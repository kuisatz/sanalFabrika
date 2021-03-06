$(document).ready(function () {

    window.lang = new Lang();
    lang.dynamic($('#langCode').val(), '/plugins/jquery-lang-js-master/langpack/' + $('#langCode').val() + '.json');
    lang.init({
        defaultLang: 'en'
    });

    $("#search_box").keypress(function (event) {
        if (event.which === 13) {
            event.preventDefault();
            $("#search_btn").click();
        }
    });

    lang.change($('#langCode').val());

    $("#pagination_content").empty();

    if ($('#pk').val()) {
        window.list_service_url = 'pkFillCompanyLists_infoFirmProfile';
    } else {
        window.list_service_url = 'fillCompanyListsGuest_infoFirmProfile';
    }
    window.testLoadImage = $("#clients_left_side").loadSpinner();
    window.testLoadImage.loadSpinner('appendImage');
//    console.log('reloaded');
    //    $("#pagination_content").html("Page " + num); // or some ajax content loading...
    $.ajax({
        url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
        //                url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',            
        data: {
            url: window.list_service_url,
            pk: $('#pk').val(),
            language_code: $("#langCode").val(),
            page: 1,
            rows: 10,
            sort: null,
            order: null
        },
        method: "GET",
        dataType: "json",
        success: function (data) {
            var i;
            // @companyperpage = 10 company will be shown per page
            window.companyperpage = 10;
            var numberofpages = ~~(data.total / window.companyperpage);
            var remainingcompanynumber = data.total % window.companyperpage;
            window.totalnumberofpages;
            if (remainingcompanynumber > 0) {
                window.totalnumberofpages = numberofpages + 1;
            } else {
                window.totalnumberofpages = numberofpages;
            }
            for (i = 0; i < window.companyperpage; i++) {
                $('#selectedCompanyNpk').val(data.rows[i].npk);
                var rep_firm_short_name = data.rows[i].folder_name.toString().replace(" ", "-");
                $('#selectedCompanyShN').val(data.rows[i].firm_name_short);
                var companyProfileLink = window.location.href.replace(/clientspage/, "companyprofile/" + $('#selectedCompanyShN').val() + "/" + $('#selectedCompanyNpk').val());

                var appending_html =
                        "<!-- Clients Block-->"
//                        + "<a href='#'>"
                        + "<div class='row clients-page' style='border-bottom: solid 5px #eee;'  >"
                        + "<div class = 'col-md-2'  style='box-shadow: 0 0 30px #7c8082;'>"
                        + "<img src='/onyuz/standard/assets/img/sfClients/"
                        + data.rows[i].logo
                        + "' "
                        + "class = 'img-responsive hover-effect' alt = '' / >"
                        + "</div>"
                        + "<div class = 'col-md-10' id='"
                        + data.rows[i].npk
                        + "'>"
                        + "<a href='"
                        + companyProfileLink
                        + "'>"
                        + "<h3>"
                        + data.rows[i].firm_names
                        + "</h3>"
                        + "</a>"
                        + "<p>"
                        + data.rows[i].fim_description
                        + "</p>"
                        + "<ul class = 'list-inline'>"
                        + "<li>"
                        + "<i class = 'fa fa-map-marker color-green' style='padding-right:5px;'></i>"
                        + data.rows[i].country_names
                        + "</li>"
                        + "<li><i class = 'fa fa-globe color-green' style='padding-right:5px;'></i>"
                        + data.rows[i].web_address
                        + "</li>"
                        + "<li>"
                        + "<i class = 'fa fa-mail-forward color-green' style='padding-right:5px;'> </i>"
                        + data.rows[i].email
                        + "</li>"
                        + "<li>"
                        + "<i class = 'fa fa-microphone color-green' style='padding-right:5px;'> </i>"
                        + data.rows[i].tel
                        + "</li>"
                        + "<li>"
                        + "<i class = 'fa fa-fax color-green' style='padding-right:5px;'> </i>"
                        + data.rows[i].fax
                        + "</li>"
                        + "<li>"
                        + "<i class = 'fa fa-asterisk color-green' style='padding-right:5px;'> </i>"
                        + data.rows[i].total_machines
                        + "</li>"
                        + "<li>"
                        + "<i class = 'fa fa-sitemap color-green' style='padding-right:5px;'> </i>"
                        + data.rows[i].firm_sectoral
                        + "</li>"
                        + "</ul>"
                        + "</div>"
//                                    + "</div>"
//                                    + "</a>"
                        + "<!-- End Clinets Block --> ";
//                            console.log(appending_html);
                var newappend = $(appending_html);
                $(newappend).appendTo($("#pagination_content"));
                $('#selectedCompanyNpk').val('');
                $('#selectedCompanyShN').val('');

            }
            $("html, body").animate({scrollTop: $("#pagination_content").offset().top}, "slow");
            event.preventDefault();


            $('#paginationBar').paginator();
            $('#paginationBar').paginator('option', 'total', window.totalnumberofpages);
            $('#paginationBar').paginator('option', 'maxVisible', 5);
            $('#paginationBar').paginator('paginate');


            window.testLoadImage.loadSpinner('removeLoadImage');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('"fillAddressTypes_sysSpecificDefinitions" servis hatasÄ±->' + textStatus);
        }
    });

    /**
     * Sectors dropdown prepared
     * @type @call;$@call;ajaxCallWidget
     * @since 14/07/2016
     */
    var ajaxSectors = $('#dropdownSectors').ajaxCallWidget({
        proxy: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
        data: {
            url: 'getSectors_syssectors',
            language_code: $('#langCode').val(),
            component_type: "ddslick"
        }
    });
    ajaxSectors.ajaxCallWidget({
        onError: function (event, textStatus, errorThrown) {

        },
        onSuccess: function (event, data) {
            var data = $.parseJSON(data);
//         $('#mach-prod-box').loadImager('removeLoadImage');
            $('#dropdownSectors').ddslick({
                height: 200,
                data: data,
                width: '100%',
                selectText: "",
                //showSelectedHTML : false,
                defaultSelectedIndex: 3,
                search: true,
                //imagePosition:"right",
                onSelected: function (selectedData) {
                    if (selectedData.selectedData.value > 0) {
                        /*$('#tt_tree_menu').tree({
                         url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php?url=pkFillForAdminTree_leftnavigation&pk=' + $("#pk").val()+ '&role_id='+selectedData.selectedData.value+'&language_code='+$("#langCode").val(),
                         });*/
                        window.selected_sector_id = selectedData.selectedData.value;

                    }
                }
            });
        },
        onErrorDataNull: function (event, data) {

        }
    });
    ajaxSectors.ajaxCallWidget('call');




    /**
     * Countries dropdown prepared
     * @type @call;$@call;ajaxCallWidget
     * @since 14/07/2016
     */
    var ajaxCountries = $('#dropdownCountries').ajaxCallWidget({
        proxy: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
        data: {url: 'fillComboBox_syscountrys',
            language_code: $('#langCode').val(),
            component_type: "ddslick"
        }
    });
    ajaxCountries.ajaxCallWidget({
        onError: function (event, textStatus, errorThrown) {

        },
        onSuccess: function (event, data) {
            var data = $.parseJSON(data);
//         $('#mach-prod-box').loadImager('removeLoadImage');
            $('#dropdownCountries').ddslick({
                height: 200,
                data: data,
                width: '100%',
                selectText: "",
                //showSelectedHTML : false,
//                defaultSelectedIndex: 3,
                search: true,
                //imagePosition:"right",
                onSelected: function (selectedData) {
                    if (selectedData.selectedData.value > 0) {
                        /*$('#tt_tree_menu').tree({
                         url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php?url=pkFillForAdminTree_leftnavigation&pk=' + $("#pk").val()+ '&role_id='+selectedData.selectedData.value+'&language_code='+$("#langCode").val(),
                         });*/

                        window.selected_country_id = selectedData.selectedData.value;
                    }
                }
            });
        },
        onErrorDataNull: function (event, data) {

        }
    });
    ajaxCountries.ajaxCallWidget('call');

});

function hide_search() {

    if ($('.sky-form').attr('status') === 'opened') {
        $('.sky-form').attr('status', 'closed');
        $('.sky-form').slideUp();
    } else {
        $('.sky-form').attr('status', 'opened');
        $('.sky-form').slideDown();
    }

}

/*
 * Reset Form Elements
 * @Author: Bahram Lotfi Sadigh
 * @Since: 2016.1.21
 */

function resetForm() {

    $('#dropdownCountries').ddslick('selectByValue', {index: 0});
    $('#dropdownSectors').ddslick('selectByValue', {index: 0});
    window.selected_country_id = 0;
    window.selected_sector_id = 0;
    event.stopImmediatePropagation();
    event.target.closest('form').reset();
    event.preventDefault();

}

function searchCompanies() {

    window.testLoadImage = $("#clients_left_side").loadSpinner();
    window.testLoadImage.loadSpinner('appendImage');

    $("#pagination_content").empty();
    $("#paginationBar").empty();
    
    if ($('#pk').val()) {
        window.list_service_url = 'pkFillCompanyLists_infoFirmProfile';
    } else {
        window.list_service_url = 'fillCompanyListsGuest_infoFirmProfile';
    }
    
    $.ajax({
        url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
        //                url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',            
        data: {
            url: window.list_service_url,
            pk: $('#pk').val(),
            language_code: $("#langCode").val(),
            page: 1,
            rows: 10,
            sort: null,
            order: null,
            company_name: $('#company_name').val(),
            country_id: window.selected_country_id,
            sector_id: window.selected_sector_id
        },
        method: "GET",
        dataType: "json",
        success: function (data) {

            if (data.rows.length > 0) {
//            console.log('--------------' + data);
                var i;
                // @companyperpage = 10 company will be shown per page
                if (data.rows.length < 10) {
                    window.companyperpage = data.rows.length;
                } else {
                    window.companyperpage = 10;
                }
                var numberofpages = ~~(data.total / window.companyperpage);
                var remainingcompanynumber = data.total % window.companyperpage;
                window.totalnumberofpages;
                if (remainingcompanynumber > 0) {
                    window.totalnumberofpages = numberofpages + 1;
                } else {
                    window.totalnumberofpages = numberofpages;
                }
                
                if(data.total < window.companyperpage){
                            var comp_of_this_page = data.total ;
                        }else{
                            var comp_of_this_page = window.companyperpage;
                        } 
                        
                for (i = 0; i < comp_of_this_page; i++) {

                    $('#selectedCompanyNpk').val(data.rows[i].npk);
                    var rep_firm_short_name = data.rows[i].firm_name_short.toString().replace(" ", "-");
                    $('#selectedCompanyShN').val(rep_firm_short_name);
                    var companyProfileLink = window.location.href.replace(/clientspage/, "companyprofile/" + $('#selectedCompanyShN').val() + "/" + $('#selectedCompanyNpk').val());

                    var appending_html =
                            "<!-- Clients Block-->"
//                        + "<a href='#'>"
                            + "<div class='row clients-page' style='border-bottom: solid 5px #eee;'  >"
                            + "<div class = 'col-md-2'  style='box-shadow: 0 0 30px #7c8082;'>"
                            + "<img src='/onyuz/standard/assets/img/sfClients/"
                            + data.rows[i].logo
                            + "' "
                            + "class = 'img-responsive hover-effect' alt = '' / >"
                            + "</div>"
                            + "<div class = 'col-md-10' id='"
                            + data.rows[i].npk
                            + "'>"
                            + "<a href='"
                            + companyProfileLink
                            + "'>"
                            + "<h3>"
                            + data.rows[i].firm_names
                            + "</h3>"
                            + "</a>"
                            + "<p>"
                            + data.rows[i].fim_description
                            + "</p>"
                            + "<ul class = 'list-inline'>"
                            + "<li>"
                            + "<i class = 'fa fa-map-marker color-green' style='padding-right:5px;'></i>"
                            + data.rows[i].country_names
                            + "</li>"
                            + "<li><i class = 'fa fa-globe color-green' style='padding-right:5px;'></i>"
                            + data.rows[i].web_address
                            + "</li>"
                            + "<li>"
                            + "<i class = 'fa fa-mail-forward color-green' style='padding-right:5px;'> </i>"
                            + data.rows[i].email
                            + "</li>"
                            + "<li>"
                            + "<i class = 'fa fa-microphone color-green' style='padding-right:5px;'> </i>"
                            + data.rows[i].tel
                            + "</li>"
                            + "<li>"
                            + "<i class = 'fa fa-fax color-green' style='padding-right:5px;'> </i>"
                            + data.rows[i].fax
                            + "</li>"
                            + "<li>"
                            + "<i class = 'fa fa-asterisk color-green' style='padding-right:5px;'> </i>"
                            + data.rows[i].total_machines
                            + "</li>"
                            + "<li>"
                            + "<i class = 'fa fa-sitemap color-green' style='padding-right:5px;'> </i>"
                            + data.rows[i].firm_sectoral
                            + "</li>"
                            + "</ul>"
                            + "</div>"
//                                    + "</div>"
//                                    + "</a>"
                            + "<!-- End Clinets Block --> ";
//                            console.log(appending_html);
                    var newappend = $(appending_html);
                    $(newappend).appendTo($("#pagination_content"));

                }

                $("html, body").animate({scrollTop: $("#pagination_content").offset().top}, "slow");
                event.preventDefault();

//                $('#paginationBar').empty();
                $('#paginationBar').paginator();
                $('#paginationBar').paginator('option', 'total', window.totalnumberofpages);
                $('#paginationBar').paginator('option', 'maxVisible', 5);
                $('#paginationBar').paginator('paginate');
            }

            window.testLoadImage.loadSpinner('removeLoadImage');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('"fillCompanyListsGuest_infoFirmProfile" servis hatasÄ±->' + textStatus);
        }
    });
    return false;
}

