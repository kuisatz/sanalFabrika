
(function($){
    
    console.log('here');
    
   $.fn.leftMenuFunction = function(data) {
      $.ajax({
        url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
//        url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',
        data: {
            parent: 0,
//            pk: '3441df0babc2a2dda551d7cd39fb235bc4e09cd1e4556bf261bb49188f548348',
            url: 'getLeftMenu_leftnavigation',
            language_code: $("#langCode").val()
        },
        method: "GET",
        async: false,
        dataType: "json",
        success: function (data) {

            /*
             * Bu değişkenler url kontrol için kullanılmaktadır.
             */

            var currentPath = 'https://www.bahram.sanalfabrika.com'
                    + $("#requestUriRegulated").val()
                    .replace('--dil--', $("#langCode").val());

            var currentPathArray = currentPath.split('/');

//            var langIndex = currentPathArray.indexOf($("#langCode").val());
//            var urlArraySize = currentPathArray.length;

            // Ana menü değişkenleri

            var len = data.length;
            var i = 0;
            for (i; i < len; i++) {

                if (data[i].collapse === 0) {

                    var appending_html = "<li id='menu_" +
                            data[i].id + "'><a href='" +
                            data[i].url + "'><i class='fa " +
                            data[i].icon_class + "'></i>" +
                            data[i].menu_name + "</a></li>";

                    var newappend = $(appending_html);

                } else {

                    var appending_html = "<li class='treeview' id='menu_" +
                            data[i].id + "'><a href='" +
                            data[i].url + "'><i class='fa " +
                            data[i].icon_class + "'></i><span>" +
                            data[i].menu_name +
                            "</span><i class='fa fa-angle-left pull-right'></i></a></li>";

                    var newappend = $(appending_html);
                }

                $(newappend).appendTo($("#leftside-menu"));

                /*
                 * Bu bölüm ana menü url kontrolunu yapmaktadır. 
                 * url menu iteminin url ile eşleşiyorsa o şıkkı 
                 * açacaktır ve sayfa yüklendiğinde açık 
                 * gözükecektir.
                 */
                
                for (var c = 3; c < currentPathArray.length; c++) {
                    
                    console.log('path array element: ' + currentPathArray[c]);
                    console.log('menu_name_eng: ' + data[i].menu_name_eng);
                
                    if(currentPathArray[c].toLowerCase() === data[i].menu_name_eng.toLowerCase()){
                        var targetParentinURL = currentPathArray[c];
                        var targetParentinURLId = data[i].id;
                        var targetItem = $('#menu_' + targetParentinURLId);
                        
                         $(targetItem).slideDown('normal', function () {
                            $(targetItem).trigger('click');
                            $.AdminLTE.dynamicTree(this);
                        });
                        event.stopPropagation();
                    }
                }

//                if ((currentPath.indexOf($("#langCode").val()) + 2) < currentPath.length) {
//                if (currentPathArray.length > 7) {
////                    var parrentURL = currentPath.
////                            substring(0, currentPath.indexOf($("#langCode").val()) + 2);
//                    console.log(currentPathArray);
//
//                    var parrentURL = 'https://';
//
//                    for (var c = 2; c < 7; c++) {
//                        if(c!=2){
//                            parrentURL = parrentURL + '/';
//                        }
//                        parrentURL = parrentURL + currentPathArray[c];
//                    }
//
//                    if (parrentURL === data[i].url) {
//                        var targetItem = $('#menu_' + data[i].id);
//                        $(targetItem).slideDown('normal', function () {
//                            $(targetItem).trigger('click');
//                            $.AdminLTE.dynamicTree(this);
//                        });
//                        event.stopPropagation();
//                    }
//                } else {
//
//                    if (currentPath === data[i].url) {
//                        var targetItem = $('#menu_' + data[i].id);
//                        $(targetItem).slideDown('normal', function () {
//                            $(targetItem).trigger('click');
//                            $.AdminLTE.dynamicTree(this);
//                        });
//                        event.stopPropagation();
//                    }
//                }

                /*
                 * Click fonksiyonu yeni append edilen şıkka eklenir
                 */

                $(newappend).on("click", function (event) {
                    console.log(event);
                    //alert(event.target);
                    //alert(this);
                    $.AdminLTE.dynamicTree(this);
                });

                // bir sonraki ekleme için append boşaltılır...
                newappend = null;
            }
        }
    });
   }; 
}( jQuery ));

