<?php

namespace Supervisor\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Zend\Session\Container;

class SupervisorController extends AbstractActionController {

    public function indexAction() {
        $langCode = $this->getServiceLocator()
                ->get('serviceTranslator');
        $requestUriRegulated = $this->getServiceLocator()
                ->get('serviceTranslatorUrlRegulator');

        $view = new ViewModel(array(
            'requestUriRegulated' => $requestUriRegulated,
            'langCode' => $langCode,
        ));
        return $view;
    }

    public function coregAction() {
        $langCode = $this->getServiceLocator()
                ->get('serviceTranslator');
        $requestUriRegulated = $this->getServiceLocator()
                ->get('serviceTranslatorUrlRegulator');

        $view = new ViewModel(array(
            'requestUriRegulated' => $requestUriRegulated,
            'langCode' => $langCode,
        ));
        return $view;
    }

    public function machineparkAction() {
        $langCode = $this->getServiceLocator()
                ->get('serviceTranslator');
        $requestUriRegulated = $this->getServiceLocator()
                ->get('serviceTranslatorUrlRegulator');

        $view = new ViewModel(array(
            'requestUriRegulated' => $requestUriRegulated,
            'langCode' => $langCode,
        ));
        return $view;
    }
    
    public function softwareAction(){
        
        $langCode = $this->getServiceLocator()
                ->get('serviceTranslator');
        $requestUriRegulated = $this->getServiceLocator()
                ->get('serviceTranslatorUrlRegulator');

        $view = new ViewModel(array(
            'requestUriRegulated' => $requestUriRegulated,
            'langCode' => $langCode,
        ));
        return $view;
        
    }

    public function addAction() {
        
    }

    public function editAction() {
        
    }

    public function deleteAction() {
        
    }

}
