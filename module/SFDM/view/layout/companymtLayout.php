<?php echo $this->doctype(); ?>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <?php echo $this->headTitle(' Virtual Enterprise ' . $this->translate('Control Panel'))->setSeparator(' - ')->setAutoEscape(false) ?>

        <?php
        echo $this->headMeta()
                ->appendName('viewport', 'width=device-width, initial-scale=1.0')
                ->appendHttpEquiv('X-UA-Compatible', 'IE=edge')
        ?>

        <!-- Bootstrap 3.3.4 -->
        <!--<link href="<?php echo $this->basePath('bootstrap/css/bootstrap.min.css') ?>" rel="stylesheet" type="text/css" /> -->
        <link href="<?php echo $this->basePath('css/bootstrap.min.css') ?>" rel="stylesheet" type="text/css" /> 
        <!-- easyui implementation -->
        <link href="<?php echo $this->basePath('plugins/jquery-easyui-1.3.3/themes/icon.css') ?>" rel="stylesheet" type="text/css" />
        <link href="<?php echo $this->basePath('plugins/jquery-easyui-1.3.3/themes/bootstrap/easyui.css') ?>" rel="stylesheet" type="text/css" />
        <!-- FontAwesome 4.3.0 -->
        <!--<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />-->
        <link href="<?php echo $this->basePath('plugins/font-awesome-4.4.0/css/font-awesome.min.css') ?>" rel="stylesheet" type="text/css" />
        <!-- Ionicons 2.0.0 -->
        <!--<link href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css" /> -->   
        <!--<link href="bootstrap/css/ionicons.min.css" rel="stylesheet" type="text/css" />    -->
        <link href="<?php echo $this->basePath('plugins/ionicons-2.0.1/css/ionicons.min.css') ?>" rel="stylesheet" type="text/css" />
        <!-- Theme style -->
        <link href="<?php echo $this->basePath('dist/css/AdminLTE.css') ?>" rel="stylesheet" type="text/css" />
        <!-- AdminLTE Skins. Choose a skin from the css/skins 
             folder instead of downloading all of them to reduce the load. -->
        <link href="<?php echo $this->basePath('dist/css/skins/_all-skins.min.css') ?>" rel="stylesheet" type="text/css" />
        <!-- iCheck -->
        <link href="<?php echo $this->basePath('plugins/iCheck/flat/blue.css') ?>" rel="stylesheet" type="text/css" />
        <!-- Morris chart -->
        <!--<link href="plugins/morris/morris.css" rel="stylesheet" type="text/css" />-->
        <!-- jvectormap -->
        <link href="<?php echo $this->basePath('plugins/jvectormap/jquery-jvectormap-1.2.2.css') ?>" rel="stylesheet" type="text/css" />
        <!-- Date Picker -->
        <link href="<?php echo $this->basePath('plugins/datepicker/datepicker3.css') ?>" rel="stylesheet" type="text/css" />
        <!-- Daterange picker -->
        <link href="<?php echo $this->basePath('plugins/daterangepicker/daterangepicker-bs3.css') ?>" rel="stylesheet" type="text/css" />
        <!-- bootstrap wysihtml5 - text editor -->
        <link href="<?php echo $this->basePath('plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css') ?>" rel="stylesheet" type="text/css" />
        
        <!-- bootstrap-modal-nakupanda ekleniyor-->
        <link href="<?php echo $this->basePath('plugins/bootstrap-modal-nakupanda/bootstrap-dialog.min.css') ?>" rel="stylesheet" type="text/css" />

        <!-- Le styles -->
        <?php /* echo $this->headLink(array('rel' => 'shortcut icon', 'type' => 'image/vnd.microsoft.icon', 'href' => $this->basePath() . '/img/favicon.ico'))
          ->prependStylesheet($this->basePath('css/style.css'))
          ->prependStylesheet($this->basePath('css/bootstrap-theme.min.css'))
          ->prependStylesheet($this->basePath('css/bootstrap.min.css')) */ ?>

        <!-- Scripts -->
        <?php /* echo $this->headScript()
          ->prependFile($this->basePath('js/bootstrap.min.js'))
          ->prependFile($this->basePath('js/jquery.min.js'))
          ->prependFile($this->basePath('js/respond.min.js'), 'text/javascript', array('conditional' => 'lt IE 9',))
          ->prependFile($this->basePath('js/html5shiv.min.js'),   'text/javascript', array('conditional' => 'lt IE 9',))
          ; */ ?>

    </head>
    <body class="skin-blue sidebar-mini">


<?php echo $this->content; ?>


<?php echo $this->inlineScript() ?>


        <?php /* echo $this->headScript()
          ->prependFile($this->basePath('jsinline/dashboard.js'), 'text/javascript')
          ->prependFile($this->basePath('js/bootstrap.min.js'), 'text/javascript')
          ->prependFile($this->basePath('plugins/sparkline/jquery.sparkline.min.js'))
          ->prependFile($this->basePath('plugins/sparkline/jquery.sparkline.min.js'))
          ->prependFile($this->basePath('plugins/jvectormap/jquery-jvectormap-world-mill-en.js'))
          ->prependFile($this->basePath('plugins/jvectormap/jquery-jvectormap-1.2.2.min.js'))
          ->prependFile($this->basePath('plugins/knob/jquery.knob.js'))
          ->prependFile($this->basePath('plugins/daterangepicker/daterangepicker.js'))
          ->prependFile($this->basePath('plugins/daterangepicker/moment.min.js'))
          ->prependFile($this->basePath('plugins/datepicker/bootstrap-datepicker.js'))
          ->prependFile($this->basePath('plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js'))
          ->prependFile($this->basePath('plugins/slimScroll/jquery.slimscroll.min.js'))
          ->prependFile($this->basePath('plugins/fastclick/fastclick.min.js'))
          ->prependFile($this->basePath('plugins/zeynel/exPlugs.js'))
          ->prependFile($this->basePath('dist/js/app.js'))
          ->prependFile($this->basePath('dist/js/demo.js'))
          ->prependFile($this->basePath('plugins/zeynel/exPlugs.js'))
          ->prependFile($this->basePath('plugins/jQueryUI/jquery-ui-1.11.2.min.js'))
          ->prependFile($this->basePath('plugins/jQuery/jQuery-2.1.4.min.js'))
          /*->prependFile($this->basePath('plugins/zeynel/exPlugs.js'))
          ->prependFile($this->basePath('plugins/zeynel/exPlugs.js'))
          ->prependFile($this->basePath('plugins/zeynel/exPlugs.js'))
          ->prependFile($this->basePath('plugins/zeynel/exPlugs.js')) */
        //; 
        ?> 




        <!-- jQuery 2.1.4 -->
        <script src="<?php echo $this->basePath('plugins/jQuery/jQuery-2.1.4.min.js') ?>"></script>
        <!-- jQuery UI 1.11.2 -->
        <!--<script src="http://code.jquery.com/ui/1.11.2/jquery-ui.min.js" type="text/javascript"></script>-->
        <script src="<?php echo $this->basePath('plugins/jQueryUI/jquery-ui-1.11.2.min.js') ?>" type="text/javascript"></script>
        <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
        <script>
            $.widget.bridge('uibutton', $.ui.button);
        </script>
        <!-- easyui implementation -->
        <script language="JavaScript" type="text/javascript" src="<?php echo $this->basePath('plugins/jquery-easyui-1.3.3/jquery.easyui.min.js') ?>"></script>
        <script language="JavaScript" type="text/javascript" src="<?php echo $this->basePath('plugins/jquery-easyui-1.3.3/locale/easyui-lang-tr.js') ?>"></script>
        <script src="<?php echo $this->basePath('plugins/jquery-easyui-1.3.3/src/datagrid-filter.js') ?>"></script>
        <!-- Bootstrap 3.3.2 JS -->
        <!--<script src="<?php echo $this->basePath('bootstrap/js/bootstrap.min.js') ?>" type="text/javascript"></script>-->    
        <script src="<?php echo $this->basePath('js/bootstrap.min.js') ?>" type="text/javascript"></script>    
        <!-- Morris.js charts -->
        <!--<script src="http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
        <script src="plugins/morris/morris.min.js" type="text/javascript"></script>-->
        <!-- Sparkline -->
        <script src="<?php echo $this->basePath('plugins/sparkline/jquery.sparkline.min.js') ?>" type="text/javascript"></script>
        <!-- jvectormap -->
        <script src="<?php echo $this->basePath('plugins/jvectormap/jquery-jvectormap-1.2.2.min.js') ?>" type="text/javascript"></script>
        <script src="<?php echo $this->basePath('plugins/jvectormap/jquery-jvectormap-world-mill-en.js') ?>" type="text/javascript"></script>
        <!-- jQuery Knob Chart -->
        <script src="<?php echo $this->basePath('plugins/knob/jquery.knob.js') ?>" type="text/javascript"></script>
        <!-- daterangepicker -->
        <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js" type="text/javascript"></script>-->
        <script src="<?php echo $this->basePath('plugins/daterangepicker/moment.min.js') ?>" type="text/javascript"></script>
        <script src="<?php echo $this->basePath('plugins/daterangepicker/daterangepicker.js') ?>" type="text/javascript"></script>
        <!-- datepicker -->
        <script src="<?php echo $this->basePath('plugins/datepicker/bootstrap-datepicker.js') ?>" type="text/javascript"></script>
        <!-- Bootstrap WYSIHTML5 -->
        <script src="<?php echo $this->basePath('plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js') ?>" type="text/javascript"></script>
        <!-- Slimscroll -->
        <script src="<?php echo $this->basePath('plugins/slimScroll/jquery.slimscroll.min.js') ?>" type="text/javascript"></script>
        <!-- FastClick -->
        <script src='<?php echo $this->basePath('plugins/fastclick/fastclick.min.js') ?>'></script>
        <!-- Zeynel plugins -->
        <script src='<?php echo $this->basePath('plugins/zeynel/exPlugs.js') ?>'></script>

        <!-- AdminLTE App -->
        <!--<script src="dist/js/app.min.js" type="text/javascript"></script>-->
        <script src="<?php echo $this->basePath('dist/js/app.js') ?>" type="text/javascript"></script>    

        <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
        <!--<script src="dist/js/pages/dashboard.js" type="text/javascript"></script>  -->  

        <!-- AdminLTE for demo purposes -->
        <script src="<?php echo $this->basePath('dist/js/demo.js') ?>" type="text/javascript"></script>

        <!-- AdminLTE for demo purposes -->
        <!--<script src="plugins/validationEngine/jquery.validationEngine-en.js" type="text/javascript"></script>
        <script src="plugins/validationEngine/jquery.validationEngine.js" type="text/javascript"></script>-->

        <!-- highcharts modülü -->
        <!--<script src="https://code.highcharts.com/highcharts.js"></script>
        <script src="https://code.highcharts.com/modules/exporting.js"></script>-->
        <script src="<?php echo $this->basePath('plugins/highcharts/highcharts.js') ?>"></script>
        <script src="<?php echo $this->basePath('plugins/highcharts/highcharts-3d.js') ?>"></script>
        <script src="<?php echo $this->basePath('plugins/highcharts/funnel.js') ?>"></script>    
        <!-- 2. You can add print and export feature by adding this line -->  
        <!--<script src="http://code.highcharts.com/modules/exporting.js"></script>-->
        <!-- Export Client-Side module (for export) dependencies -->
        <script src="<?php echo $this->basePath('plugins/highcharts/modules/exporting.js') ?>"></script>
        <!--<script src="<?php echo $this->basePath('plugins/highcharts/modules/canvas-tools.js') ?>"></script>-->
        <script src="<?php echo $this->basePath('plugins/highcharts/modules/export-csv.js') ?>"></script>
        <!--<script type="application/javascript" src="<?php echo $this->basePath('plugins/highcharts/modules/jspdf.min.js') ?>"></script>-->
        <!--<script src="<?php echo $this->basePath('plugins/highcharts/modules/highcharts-export-clientside.js') ?>"></script>-->

        <!-- Select2 -->
        <script src="<?php echo $this->basePath('plugins/select2/select2.full.js') ?>" type="text/javascript"></script>

        <!-- bootstrap-modal-nakupanda ekleniyor-->
        <script src="<?php echo $this->basePath('plugins/bootstrap-modal-nakupanda/bootstrap-dialog.min.js') ?>" type="text/javascript"></script>
        
        <!-- ddslick select plugin ekleniyor-->
        <script src="<?php echo $this->basePath('plugins/bootstrap-select-ddslick/js/ddslick.min.js') ?>" type="text/javascript"></script>

        <!-- sayfa içine yazılan js'ler ekleniyor-->
        <script src="<?php echo $this->basePath('jsinline/sfdm_confirm.js') ?>" type="text/javascript"></script>


        <!-- leftMenuFunction Js-->
        <script src="<?php echo $this->basePath('jsinline/leftMenuFunction.js') ?>" type="text/javascript"></script>



        <script>
            $.widget.bridge('uibutton', $.ui.button);
        </script>



    </body>
</html>
