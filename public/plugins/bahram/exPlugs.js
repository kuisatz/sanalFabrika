// multilanguage bar setter
(function ($) {
    /**
     * this function sets languga bar <li> for language bar front end interfaces
     * @param {json object} data
     * @param {array} options
     * @returns {null}
     * @author Mustafa Zeynel Dağlı
     * @since 23/12/2015
     */
    $.fn.multiLanguageBarSetter = function (data, options) {
        var data = data;
        $this = $(this);
        //console.warn($.fn.multiLanguageBarSetter.defaults.langCode);
        //console.warn($.fn.multiLanguageBarSetter.defaults.requestUriTranslated);
        if ($.fn.multiLanguageBarSetter.defaults.requestUriTranslated.toLowerCase().indexOf("--dil--") >= 0) {
            //console.warn('--dil-- bulundu');
            $.fn.multiLanguageBarSetter.setLanguageLinkByLangCode(data);

        } else {
            //console.warn('--dil-- bulunamadı'); 
            $.fn.multiLanguageBarSetter.setLanguageLinkBase(data);
        }

        var opts = $.extend({}, $.fn.multiLanguageBarSetter.defaults, options);
    };

    /**
     * if language set in the request this fıunction prepares url links for language bar
     * and sets langugage bar
     * @param {json object} data
     * @returns {null}
     * @author Mustafa Zeynel Dağlı
     * @since 24/12/2015
     */
    $.fn.multiLanguageBarSetter.setLanguageLinkByLangCode = function (data) {
        var data = data;
        $.each(data, function (index, element) {
            var requestUriTranslatedLocal = $.fn.multiLanguageBarSetter.defaults.requestUriTranslated;
            requestUriTranslatedLocal = requestUriTranslatedLocal.replace("--dil--", element.language_main_code);
            if ($.fn.multiLanguageBarSetter.defaults.langCode == element.language_main_code) {
                $this.append('<li class="active" ><a href="' + requestUriTranslatedLocal + '" >' + element.language + ' <i class="fa fa-check"></i> </a></li>');
            } else {
                $this.append('<li><a href="' + requestUriTranslatedLocal + '" >' + element.language + ' </a></li>');
            }
        });
    };

    /**
     * 
     * @param {json object} data
     * @returns {null}
     * @author Mustafa Zeynel Dağlı
     * @since 24/12/2015
     */
    $.fn.multiLanguageBarSetter.setLanguageLinkBase = function (data) {
        var data = data;
        var uriSlasher = '/';
        if ($.fn.multiLanguageBarSetter.defaults.requestUriTranslated.match(/\/$/)) {
            //console.warn('--/ karakteri ile bitiyor-->'+$.fn.multiLanguageBarSetter.defaults.requestUriTranslated);
            uriSlasher = '';
        }
        $.each(data, function (index, element) {
            if ($.fn.multiLanguageBarSetter.defaults.requestUriTranslated == '/') {
                if ($.fn.multiLanguageBarSetter.defaults.baseLanguage == element.language_main_code) {
                    $this.append('<li class="active" ><a href="/' + element.language_main_code + '/' + $.fn.multiLanguageBarSetter.defaults.basePath + '" >' + element.language + ' <i class="fa fa-check"></i> </a></li>');
                } else {
                    $this.append('<li><a href="/' + element.language_main_code + '/' + $.fn.multiLanguageBarSetter.defaults.basePath + '" >' + element.language + ' </a></li>');
                }
            } else {
                if ($.fn.multiLanguageBarSetter.defaults.baseLanguage == element.language_main_code) {
                    $this.append('<li class="active" ><a href="/' + element.language_main_code + '' + $.fn.multiLanguageBarSetter.defaults.requestUriTranslated + '" >' + element.language + ' <i class="fa fa-check"></i> </a></li>');
                } else {
                    $this.append('<li><a href="/' + element.language_main_code + '' + $.fn.multiLanguageBarSetter.defaults.requestUriTranslated + '" >' + element.language + ' </a></li>');
                }
            }

        });
    };

    /**
     * sets global variables for language bar widget functions
     * @author Mustafa Zeynel Dağlı
     * @since 24/12/2015
     */
    $.fn.multiLanguageBarSetter.defaults = {
        basePath: '/',
        baseLanguage: 'en',
        requestUriTranslated: '/',
        langCode: 'tr',
    };
}(jQuery));

(function ($) {

    /**
     * set alpaca form due to machine tree selected machine item
     * @author Mustafa Zeynel Dağlı
     * @Edit: Bahram Lotfi
     * @since 29/02/2016
     */
    $.widget("sanalfabrika.machineGeneralInfoFormCreater", {
        /**
         * Default options.
         * @returns {null}
         */
        options: {
            proxy: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
            pk: $("#pk").val(),
            ajaxParams: null,
            machineID: null,
            //treeClass: ' .tree ',
            //treeID: ' #tree ',
            alpacaGenFormContainer: '#selectedMTGenInformation'
        },
        /**
         * private method to call sub nodes
         * @returns {null}
         */
        _create: function () {

        },
        /**
         * set alpaca plugin form
         * @returns {undefined}
         * @author Mustafa Zeynel Dağlı
         * @since 29/02/2016
         */
        setMachineGeneralInfoForm: function () {

            $(this.options.alpacaGenFormContainer).alpaca("destroy");
            $(this.options.alpacaGenFormContainer).empty();

            this._getGeneralServiceForAlpacaForm();
        },
        /**
         * 
         * @returns {undefined}
         * @author Mustafa Zeynel Dağlı
         * @since 29/02/2016
         */

        _getGeneralServiceForAlpacaForm: function () {
            self = this;

            $.ajax({
                url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
                data: {
                    url: self.options.url,
                    pk: $("#pk").val(),
                    machine_id: self.options.machineID
                },
                type: 'GET',
                dataType: 'json',
                success: function (data, textStatus, jqXHR) {

                    if (data.rows.length !== 0) {
                        $(self.options.alpacaGenFormContainer).alpaca({
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "manufacturer": {
                                        "type": "text"
                                    },
                                    "name": {
                                        "type": "text"
                                    },
                                    "model": {
                                        "type": "text"
                                    },
                                    "type": {
                                        "type": "text"
                                    }
                                }
                            },
                            "options": {
                                "fields": {
                                    "manufacturer": {
                                        "label": window.lang.translate("Machine Manufacturer"),
                                        "type": "text",
                                        "readonly": true
                                    },
                                    "name": {
                                        "label": window.lang.translate("Machine Name"),
                                        "type": "text",
                                        "disabled": true,
                                    },
                                    "model": {
                                        "label": window.lang.translate("Machine Model"),
                                        "type": "text",
                                        "disabled": true
                                    },
                                    "type": {
                                        "label": window.lang.translate("Machine Type"),
                                        "type": "text",
                                        "disabled": true
                                    }
                                }
                            },
                            "data": {
                                "manufacturer": data.rows[0].manufacturer_name,
                                "name": data.rows[0].machine_tool_names,
                                "model": data.rows[0].model_year,
                                "type": data.rows[0].machine_tool_grup_names
                            }
                        });
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log('error');
                    console.error(textStatus);
                }
            });
        }
    });

    /*
     * paginator widget 
     * @author: Bahram Lotfi Sadigh
     * @Since: 2016.03.20
     */

    if ($('#pk').val()) {
        window.list_service_url = 'pkFillCompanyLists_infoFirmProfile';
    } else {
        window.list_service_url = 'fillCompanyListsGuest_infoFirmProfile';
    }

    $.widget("sanalfabrika.paginator", {
        /**
         * Default options.
         * @returns {null}
         */
        options: {
            total: 50,
            page: 1,
            maxVisible: 5,
            leaps: true,
            firstLastUse: true,
            first: '<span aria-hidden="true">&larr;</span>',
            last: '<span aria-hidden="true">&rarr;</span>',
            wrapClass: 'pagination',
            activeClass: 'active',
            disabledClass: 'disabled',
            nextClass: 'next',
            prevClass: 'prev',
            lastClass: 'last',
            firstClass: 'first'
        },
        /**
         * private constructor method for jquery widget
         * @returns {null}
         */
        _create: function () {
        },
        /**
         * public method to remove loading image when necessary
         * @returns {null}
         */
        paginate: function () {
            $('#paginationBar').bootpag({
                total: this.options.total,
                page: this.options.page,
                maxVisible: this.options.maxVisible,
                leaps: this.options.leaps,
                firstLastUse: this.options.firstLastUse,
                first: this.options.first,
                last: this.options.last,
                wrapClass: this.options.wrapClass,
                activeClass: this.options.activeClass,
                disabledClass: this.options.disabledClass,
                nextClass: this.options.nextClass,
                prevClass: this.options.prevClass,
                lastClass: this.options.lastClass,
                firstClass: this.options.firstClass
            }).on("page", function (event, num) {

                $("#pagination_content").empty();

                $.ajax({
                    url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
                    //                url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',            
                    data: {url: window.list_service_url,
                        pk: $('#pk').val(),
                        language_code: $("#langCode").val(),
                        page: num,
                        rows: window.companyperpage,
                        sort: null,
                        order: null
                    },
                    method: "GET",
                    dataType: "json",
                    success: function (data) {
//                        console.log(data);
                        var i;
                        for (i = 0; i < 10; i++) {
                            
                            $('#selectedCompanyNpk').val(data.rows[i].npk);
                var rep_firm_short_name = data.rows[i].firm_name_short.toString().replace(" ", "-");
                $('#selectedCompanyShN').val(rep_firm_short_name);
                var companyProfileLink = window.location.href.replace(/clientspage/, "companyprofile/" + $('#selectedCompanyShN').val() + "/" + $('#selectedCompanyNpk').val());

                var appending_html = 
                        "<!-- Clients Block-->"
//                        + "<a href='#'>"
                        + "<div class='row clients-page ' style='border-bottom: solid 5px #eee;'>"
                        + "<div class = 'col-md-2' style='box-shadow: 0 0 30px #7c8082;'>"
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
                        + "<p>"
                        + data.rows[i].fim_description
                        + "</p>"
                        + data.rows[i].firm_names
                        + "</h3>"
                        + "</a>"
                        + "<ul class = 'list-inline'>"
                        + "<li>"
                        + "<i class = 'fa fa-map-marker color-green' style='padding-right:5px;'></i>"
                        + data.rows[i].country_names
                        + "</li>"
                        + "<li><i class = 'fa fa-globe color-green' style='padding-right:5px;'></i>"
                        + "<a class='linked' href='"
                        + data.rows[i].web_address
                        + "'>"
                        + data.rows[i].web_address
                        + "</a>"
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
//                        
                    }
                });
                $("html, body").animate({scrollTop: $(".header").offset().top}, "slow");
                event.preventDefault();
            });
        }
    });
    
    
/**
 * widget for front page notifications
 * @author Mustafa Zeynel Dağlı
 * @since 13/12/2016
 */    
$.widget("sanalfabrika.notifications", {
        /**
         * Default options.
         * @returns {null}
         */
        options: {
            proxy: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
            pk: $("#pk").val(),
            serviceUrl : null,
            ajaxParams: null,
            machineID: null,

        },
        /**
         * @returns {null}
         */
        _create: function () {

        },
        
        test: function() {
          var self = $this;
          self.container.append('<li class="notification"> \n\
                                    <img class="rounded-x" src="/onyuz/standard/assets/img/women-icon.png" alt="">\n\
                                    <div class="overflow-h">\n\
                                        <span><strong>Sedat Çelikdoğan</strong> zirate felan filan</span>\n\
                                            <small> 18:25 </small>\n\
                                    </div>\n\
                                </li>');
        },
        
        /**
         * 
         * get notifications from service
         * @author Mustafa Zeynel Dağlı
         * @since 13/12/2016
         */
        getNotifications: function () {
            self = this;

            $.ajax({
                url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
                data: {
                    url: self.options.url,
                    pk: $("#pk").val(),
                    machine_id: self.options.machineID
                },
                type: 'GET',
                dataType: 'json',
                success: function (data, textStatus, jqXHR) {

                    
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log('error');
                    console.error(textStatus);
                }
            });
        }
    });
    
    
    
    
}(jQuery));