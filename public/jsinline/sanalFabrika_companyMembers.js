$(document).ready(function () {

    window.i = 0;

    window.lang = new Lang();
    lang.dynamic($('#langCode').val(), '/plugins/jquery-lang-js-master/langpack/' + $('#langCode').val() + '.json');
    lang.init({
        defaultLang: 'en'
    });

//    console.log($('#selectedCompanyNpk').val());

    $.ajax({
        url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
        //                url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',            
        data: {
            url: 'fillCompanyInfoEmployeesGuest_infoFirmProfile',
            language_code: $("#langCode").val(),
            npk: $('#selectedCompanyNpk').val()
        },
        method: "GET",
        dataType: "json",
        success: function (data) {
//            console.log(data);

            var imageFolAddress = 'https://' + window.location.hostname + '/onyuz/standard/assets/img/sfClients/logos/';

            window.logosrc = imageFolAddress + data[0].logo;

            $('#profileLogosrc').attr('src', window.logosrc);

        }
    });

    $.ajax({
        url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
        //                url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',            
        data: {
            url: 'pkFillGridSingularNpk_infoFirmUsers',
            language_code: $("#langCode").val(),
            npk: $('#selectedCompanyNpk').val(),
            pk: $('#pk').val()
        },
        method: "GET",
        dataType: "json",
        success: function (data) {

            $('#members_ph').empty();

            for (var i = 0; i < data.rows.length; i++) {

                var image_url =
                        "https://"
                        + window.location.hostname
                        + "/onyuz/standard/assets/img/sfClients/"
                        + "EMGE/"
                        + data.rows[i].picture;


                var appending =
//                        "<li class='col-sm-3 col-xs-6 md-margin-bottom-30'>"
//                        + "<div class='team-img'>"
//                        + "<img class='img-responsive' src='"
//                        + image_url
//                        + "' alt=''>"
//                        + "<ul>"
//                        + "<li><a href='#'><i class='icon-custom icon-sm rounded-x fa fa-twitter'></i></a></li>"
//                        + "<li><a href='#'><i class='icon-custom icon-sm rounded-x fa fa-facebook'></i></a></li>"
//                        + "<li><a href='#'><i class='icon-custom icon-sm rounded-x fa fa-google-plus'></i></a></li>"
//                        + "</ul>"
//                        + "</div>"
//                        + "<h3>"
//                        + data.rows[i].name + ' ' + data.rows[i].surname
//                        + "</h3>"
//                        + "<h4>"
//                        + "<strong>Title: </strong>" + window.lang.translate(data.rows[i].title)
//                        + "</h4>"
//                        + "<p>"
//                        + "<strong>Description: </strong>" + window.lang.translate(data.rows[i].description)
//                        + "</p>"
//                        + "</li>";


                        "<div class='col-sm-12 sm-margin-bottom-20'>"
                        + "<div class='profile-blog'>"
                        + "<img class='rounded-x' src='"
                        + image_url
                        + "' alt=''>"
                        + "<div class='name-location'>"
                        + "<strong>"
                        + data.rows[i].name + ' ' + data.rows[i].surname
                        + "</strong>"
                        + "<span><i class='fa fa-tag'></i>Title: "
                        + window.lang.translate(data.rows[i].title)
                        + "</span>"
                        + "</div>"
                        + "<div class='clearfix margin-bottom-20'></div>"
                        + "<p><strong>Description: </strong>"
                        + window.lang.translate(data.rows[i].description)
                        + "</p>"
                        + "<hr>"
                        + "<ul class='list-inline team-social'>"
                        + "<li><a data-placement='top' data-toggle='tooltip' class='fb tooltips' data-original-title='Facebook' href='#'><i class='fa fa-facebook'></i></a></li>"
                        + "<li><a data-placement='top' data-toggle='tooltip' class='tw tooltips' data-original-title='Twitter' href='#'><i class='fa fa-twitter'></i></a></li>"
                        + "<li><a data-placement='top' data-toggle='tooltip' class='gp tooltips' data-original-title='Google +' href='#'><i class='fa fa-google'></i></a></li>"
                        + "</ul>"
                        + "</div>"
                        + "</div>";

                console.log(appending);
                $('#members_ph').append(appending);
            }

        }
    });


});