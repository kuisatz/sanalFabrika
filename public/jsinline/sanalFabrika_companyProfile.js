$(document).ready(function () {

    window.lang = new Lang();
    lang.dynamic($('#langCode').val(), '/plugins/jquery-lang-js-master/langpack/' + $('#langCode').val() + '.json');
    lang.init({
        defaultLang: 'en'
    });

    window.current_Lang = $('#langCode').val();

    lang.change($('#langCode').val());
    
    if ($('#pk').val()) {
        var soc_med_service_url = 'pkFillCompanyInfoSocialedia_infoFirmProfile';
        var verbal_service_url = 'pkFillUsersFirmVerbalNpk_infoFirmVerbal';
        var user_desc_service_url = 'pkFillUsersDescForFirmVerbalNpk_infoFirmUserDescForCompany';
        var address_info_service_url = 'pkFillUsersFirmAddressNpk_infoFirmAddress';
                
    } else {
        var soc_med_service_url = 'fillCompanyInfoSocialediaGuest_infoFirmProfile';
        var verbal_service_url = 'fillUsersFirmVerbalNpkGuest_infoFirmVerbal';
        var user_desc_service_url = 'fillUsersDescForFirmVerbalNpkGuest_infoFirmUserDescForCompany';
        var address_info_service_url = 'FillUsersFirmAddressNpkQuest_infoFirmAddress';
        
    }


    $.ajax({
        url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
        //                url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',            
        data: {url: verbal_service_url,
            language_code: $("#langCode").val(),
            npk: $('#selectedCompanyNpk').val(),
            pk: $('#pk').val()
        },
        method: "GET",
        dataType: "json",
        success: function (data) {

            if (data.rows.length > 0) {
                                
//                console.log(data.rows[0]);
                $('#firm_name_ph').empty();
                $('#header_company_name').empty();
                $('#about_firm_ph').empty();
                $('#title_1_ph').empty();
                $('#verbal_1_ph').empty();
                $('#title_2_ph').empty();
                $('#verbal_2_ph').empty();
                $('#title_3_ph').empty();
                $('#verbal_3_ph').empty();
                $('#profileLogosrc').empty();
                var about_company = data.rows[0].about;
                window.firm_name = data.rows[0].firm_name;
                var title_1 = data.rows[0].verbal1_title;
                var verbal_1 = data.rows[0].verbal1;
                var title_2 = data.rows[0].verbal2_title;
                var verbal_2 = data.rows[0].verbal2;
                var title_3 = data.rows[0].verbal3_title;
                var verbal_3 = data.rows[0].verbal3;
//                var imageFolAddress = 'https://' + window.location.hostname + '/onyuz/standard/assets/img/sfClients/';
//                var logo_src = imageFolAddress + data.rows[0].logo;
//                console.log(logo_src);
                $('#header_company_name').append("<i class='fa fa-user'></i>" + window.firm_name);
                $('#firm_name_ph').append(window.firm_name);
                $('#about_firm_ph').append(about_company);
                $('#title_1_ph').append(title_1);
                $('#verbal_1_ph').append(verbal_1);
                $('#title_2_ph').append(title_2);
                $('#verbal_2_ph').append(verbal_2);
                $('#title_3_ph').append(title_3);
                $('#verbal_3_ph').append(verbal_3);
//                $('#profileLogosrc').attr('src', logo_src);
            }
        }

    });

    $.ajax({
        url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
        //                url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',            
        data: {url: 'getFirmLogo_infoFirmProfile',
            npk: $('#selectedCompanyNpk').val()
        },
        method: "GET",
        dataType: "json",
        success: function (data) {
            if(data.resultSet.length > 0){
            var imageFolAddress = 'https://' + window.location.hostname + '/onyuz/standard/assets/img/sfClients/';
            window.logosrc = imageFolAddress + data.resultSet[0].logo;
            $('#profileLogosrc').attr('src', window.logosrc);
//            $('#logoPlace1').attr('src', window.logosrc);
            }else{
                $('#profileLogosrc').attr('src', '');
            }            
        }
    });

    $.ajax({
        url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
        //                url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',            
        data: {url: user_desc_service_url,
            language_code: $("#langCode").val(),
            npk: $('#selectedCompanyNpk').val(),
            pk: $('#pk').val()
        },
        method: "GET",
        dataType: "json",
        success: function (data) {
//            console.log(data);
            var i;
            $('#testimonials_ph').empty();
            for (i = 0; i < data.rows.length; i++) {
                var userProfileLink = "https://" + window.location.host + "/ostim/sanalfabrika/userprofile/" + data.rows[i].unpk ;
                
                var appending =
                        "<div class='col-sm-6'>"
                        + "<!-- Testimonials v4 -->"
                        + "<div class='testimonials-v4 md-margin-bottom-50'>"
                        + "<div class='testimonials-v4-in'>"
                        + "<p>"
                        + data.rows[i].verbal1
                        + "</p>"
                        + "</div>"
                        + "<a href='" + userProfileLink + "'>" 
                        + "<img class='rounded-x' src='https://"
                        + window.location.hostname 
                        + "/onyuz/standard/assets/img/sfClients/"
                        + data.rows[i].picture
                        + "' "
                        + " alt='"
                        +  data.rows[i].name + "_" + data.rows[i].surname
                        + "'data-unpk='" + data.rows[i].unpk + "'>"
                        + "<span class='testimonials-author'>"
                        + data.rows[i].name + " " + data.rows[i].surname
//                        + "<br>"
//                        + "<em>"
//                        + data.rows[i].title
//                        + "</em>"
                        + "</span></a>"
                        + "</div>"
                        + "<!-- End Testimonials v4 -->"
                        + "</div>";
//                console.log(appending);
                $('#testimonials_ph').append(appending);
            }
        }
    });

    $.ajax({
        url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
        //                url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',            
        data: {
            url: "fillWithReferenceNpk_infoFirmReferences",
            language_code: $("#langCode").val(),
            npk: $('#selectedCompanyNpk').val()
        },
        method: "GET",
        dataType: "json",
        success: function (data) {

            $('#effect-2').empty();
            var i;
            if (data.length !== null) {
                for (i = 0; i < data.length; i++) {
                    var ref_image_url = "https://"
                            + window.location.hostname
                            + "/onyuz/standard/assets/img/sfClients/"
                            + data[i].ref_logo;
                    var referencesPHAppending =
                            "<li style='cursor:pointer' "
                            + " onclick='referenceRedirect()'>"
                            + "<figure>"
                            + "<img src='"
                            + ref_image_url
                            + "' alt=''>"
                            + "<div ref_network_key='"
                            + data[i].ref_network_key
                            + "' ref_sh_name='"
                            + data[i].ref_firm_name
                            + "' class='img-hover'>"
                            + "<h4 style='font-size:10px'>"
                            + data[i].ref_firm_name
                            + "</h4>"
                            + "</div>"
                            + "</figure>"
                            + "</li>";
                    $('#effect-2').append(referencesPHAppending);
                }
            }
        }
    });

    $.ajax({
        url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
        //                url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',            
        data: {url: soc_med_service_url,
            language_code: $("#langCode").val(),
            npk: $('#selectedCompanyNpk').val(),
            pk: $("#pk").val()
        },
        method: "GET",
        dataType: "json",
        success: function (data) {
//            console.log(data);
            $('#social_media_ph').empty();
            var i;
            for (i = 0; i < data.length; i++) {
                var soc_appending =
                        "<li>"
                        + "<a id='"
                        + data[i].socialmedia
                        + "' target='_blank' href='"
                        + data[i].firm_link
                        + "' data-original-title='"
                        + data[i].socialmedia
                        + "' class='rounded-x social_"
                        + data[i].socialmedia
                        + "'></a></li>";
                $('#social_media_ph').append(soc_appending);
            }
        }
    });
    
    /*
     * Address information service 
     * For users with pk
     */
    $.ajax({
        url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
        //                url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',            
        data: {url: address_info_service_url,
            language_code: $("#langCode").val(),
            npk: $('#selectedCompanyNpk').val(),
            pk: $("#pk").val()
        },
        method: "GET",
        dataType: "json",
        success: function (data) {
//            console.log(data);
            $('#addresses_div').empty();
            for (var i = 0; i < data.rows.length; i++) {
                var borough_name;
                var city_name;
                if (data.rows[i].borough_name !== null) {
                    borough_name = data.rows[i].borough_name;
                } else {
                    borough_name = '';
                }
                if (data.rows[i].city_name !== null) {
                    city_name = data.rows[i].city_name;
                } else {
                    city_name = '';
                }
                var appending_address =
                        "<li style='font-family:sans-serif'><i class='fa fa-home'></i>"
                        + data.rows[i].firm_building_type
                        + ": "
                        + data.rows[i].address
                        + " "
                        + borough_name
                        + " "
                        + city_name
                        + " "
                        + data.rows[i].country_name
                        + "</li>"
                        + "<li><i class='fa fa-phone'></i>"
                        + data.rows[i].tel
                        + "</li>"
                        + "<li><i class='fa fa-fax'></i>"
                        + data.rows[i].fax
                        + "</li></ul><hr>";

                $('#addresses_div').append(appending_address);
            }

            /*if (data.rows[0].web_address !== '') {
             
             var web_appender =
             "<li><a href='#'><i class='fa fa-envelope'></i>"
             + data.rows[0].email
             + "</a></li>"
             + "<li><a target='_blank' href='"
             + data.rows[0].web_address
             + "'><i class='fa fa-globe'></i>"
             + data.rows[0].web_address
             + "</a></li>";
             $('#addresses_div').append(web_appender);
             
             }*/
        }
    });

    var nonAttachedTreeLoadImage = $("#notificationContainer").loadSpinner();
    nonAttachedTreeLoadImage.loadSpinner('appendImage');

    window.notificationWidget = $('#notificationContainer').notifications({
        container: $('#notificationWidget')
    });
    window.notificationWidget.notifications({
        onServiceSuccess: function (event, data) {
            /*var elementData = data.element;
             var id = data.id;*/
            //window.deleteServicePrivilegeDialog(id, elementData);
            //console.warn(data.element);
            //console.warn(data.element.attr('attr-notification'));
            //alert('onServiceSucess');  
            nonAttachedTreeLoadImage.loadSpinner('removeLoadImage');

        }
    });

    //window.notificationWidget.notifications('test');
    window.notificationWidget.notifications('getNotifications');


    window.testLoadImage = $("#bannerWidget").loadSpinner();
    window.testLoadImage.loadSpinner('appendImage');

    window.testLoadImage_2 = $("#bannerWidget_mt").loadSpinner();
    window.testLoadImage_2.loadSpinner('appendImage');


    /*
     * Get left counter calculations
     * visitors information
     */
    $.ajax({
        url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
        data: {
            url: "getUsersLeftNotifications_ActUsersActionStatistics",
//            pk: $('#pk').val(),
            npk: $('#selectedCompanyNpk').val()
        },
        type: 'GET',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {

            $('#visitor_total').empty();
            $('#visitor_last_six').empty();
            $('#visitor_last_twelve').empty();
            $('#total_sys_visitors').empty();
            $('#visitor_rate_number').empty();

            $('#visitor_bar').css('width', "0%");
            $('#visitor_bar').attr("aria-valuenow", "0");

            $('#visitor_total').append(data[0].allfirmnotificationscount);
            $('#visitor_last_six').append(data[0].lastsix);
            $('#visitor_last_twelve').append(data[0].lasttwelve);
            $('#total_sys_visitors').append(data[0].allnotificationscount);
            $('#visitor_rate_number').append(data[0].lasttwelvepercent + "%");

            $('#visitor_bar').css('width', data[0].lasttwelvepercent + "%");
            $('#visitor_bar').attr("aria-valuenow", data[0].lasttwelvepercent);

            window.testLoadImage.loadSpinner('removeLoadImage');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //console.log('error');
            console.error(textStatus);
        }
    });

    /*
     * Get left counter calculations
     * machine tools infomation
     */
    $.ajax({
        url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
        data: {
            url: "getUsersRightNotifications_ActUsersActionStatistics",
//            pk: $('#pk').val(),
            npk: $('#selectedCompanyNpk').val()
        },
        type: 'GET',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {

            $('#total_mt').empty();
            $('#add_mt_last_six').empty();
            $('#add_mt_last_twelve').empty();
            $('#add_mt_rate').empty();
            $('#total_sys_mt').empty();

            $('#add_mt_rate_bar').css('width', "0%");
            $('#add_mt_rate_bar').attr("aria-valuenow", "0");

            $('#total_mt').append(data[0].firmmachinetotal);
            $('#add_mt_last_six').append(data[0].lastsix);
            $('#add_mt_last_twelve').append(data[0].lasttwelve);
            $('#total_sys_mt').append(data[0].allfirmmachinetotal);
            $('#add_mt_rate').append(data[0].lasttwelvepercent + "%");

            $('#add_mt_rate_bar').css('width', data[0].lasttwelvepercent + "%");
            $('#add_mt_rate_bar').attr("aria-valuenow", data[0].lasttwelvepercent);

            window.testLoadImage_2.loadSpinner('removeLoadImage');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //console.log('error');
            console.error(textStatus);
        }
    });

});


function referenceRedirect() {
    var ref_network_key = $(event.target).attr('ref_network_key');
    var rep_firm_short_name = $(event.target).attr('ref_sh_name').toString().replace(" ", "-");

    if ($('#langCode').val() !== 'undefined') {
        var redirecting_url = "https://" + window.location.hostname + "/" + $('#langCode').val() + "/ostim/sanalfabrika/companyprofile/" + rep_firm_short_name + "/" + ref_network_key;
    } else {
        var redirecting_url = "https://" + window.location.hostname + "/ostim/sanalfabrika/companyprofile/" + rep_firm_short_name + "/" + ref_network_key;
    }
    window.location = redirecting_url;
}