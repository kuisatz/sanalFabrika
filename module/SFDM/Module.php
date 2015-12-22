<?php
/**
 * OSTİM TEKNOLOJİ Framework 
 *
 * @link      https://github.com/corner82/slim_test for the canonical source repository
 * @copyright Copyright (c) 2015 OSTİM TEKNOLOJİ (http://www.ostim.com.tr)
 * @license   
 */
namespace SFDM;

 use Zend\ModuleManager\Feature\AutoloaderProviderInterface;
 use Zend\ModuleManager\Feature\ConfigProviderInterface;
 use Zend\Mvc\ModuleRouteListener;
 use Zend\Mvc\MvcEvent;
 use Zend\Session\SessionManager;
 use Zend\Session\Container;

 class Module implements AutoloaderProviderInterface, ConfigProviderInterface
 {
     
     public function init() {

     }
     
     public function onBootstrap(MvcEvent $e)
    {
         
        $eventManager = $e->getApplication()->getEventManager();
        $moduleRouteListener = new ModuleRouteListener();
        $moduleRouteListener->attach($eventManager);

        
        // session expire control event
        $eventManager->attach('route', array($this, 'sessionExpireControl'));
        // auth control event
        $eventManager->attach('route', array($this, 'authControl'));
        
        // translator service attaching to dispatch 
        $eventManager->attach('dispatch', array($this, 'translaterControl'));
        
        $eventManager->getSharedManager()->attach('Zend\Mvc\Controller\AbstractActionController', 
                                                    'dispatch', 
                                                    function($e) {
            /**
             * added for layout control due to module action
             * @author Mustafa Zeynel Dağlı
             * @since 16/12/2015
             */
            $controlerName = $e->getRouteMatch()->getParam('action');
            $controller = $e->getTarget();
            $controllerClass = get_class($controller);
            $moduleNamespace = substr($controllerClass, 0, strpos($controllerClass, '\\'));
            $config          = $e->getApplication()->getServiceManager()->get('config');
            
            /**
             *  added for layout control due to module action
             *  @author Mustafa Zeynel Dağlı
             *  @since 16/12/2015
             */
            if (isset($config['action_layouts'][$moduleNamespace][$controlerName])) {
                $controller->layout($config['action_layouts'][$moduleNamespace][$controlerName]);
                //print_r($config['action_layouts'][$moduleNamespace][$controlerName]);
            } else  if (isset($config['module_layouts'][$moduleNamespace])) {
                $controller->layout($config['module_layouts'][$moduleNamespace]);
            }
            
        }, 100);

        $moduleRouteListener->attach($eventManager);  
        
    }
    
    /**
     * Translater service has been launched on 'dispatch' event 
     * in this function scope
     * @param MvcEvent $e
     * @author Mustafa Zeynel Dağlı
     * @since 17/12/2015
     */
    public function translaterControl(MvcEvent $e) {
        $e->getApplication()
          ->getServiceManager()
          ->get('serviceTranslator');
    }

    public function sessionExpireControl(MvcEvent $e) { 
        $serviceManager = $e->getApplication()->getServiceManager();
        $sessionManager = $serviceManager ->get('SessionManagerDefault');
        $serviceManager ->get('sessionExpireControler');
    }


    public function authControl(MvcEvent $e) {

        /* 
         * sessionManager servis çağırılıyor
         */ 
        $serviceManager = $e->getApplication()->getServiceManager();
        
        
        // if auth control will be made block
        if($serviceManager->get('authenticationControlerLocator')) {
            // calling auth service and makes auth control inside service
            $serviceManager->get('serviceAuthenticate');
        } 
    }

    public function getServiceConfig()
    {
         
    }
    
     public function getAutoloaderConfig()
     {
         return array(
             'Zend\Loader\ClassMapAutoloader' => array(
                 __DIR__ . '/autoload_classmap.php',
             ),
             'Zend\Loader\StandardAutoloader' => array(
                 'namespaces' => array(
                     __NAMESPACE__ => __DIR__ . '/src/' . __NAMESPACE__,
                 ),
             ),
         );
     }

     public function getConfig()
     {
         return include __DIR__ . '/config/module.config.php';
     }
 }
