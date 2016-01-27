$(document).ready(function () {

    /*
     * Disable finalize registration and submit user info before checking 
     * agreement terms and conditions...
     * @author: Bahram Lotfi Sadigh
     * @Since:2016.1.25
     */

    $('#userCommunicationInfoFormFinalize').addClass('disabled');
    $('#userCommunicationInfoFormSubmit').addClass('disabled');
    $('#userCommunicationInfoFormFinalize').attr('disabled', true);
    $('#userCommunicationInfoFormSubmit').attr('disabled', true);
    
    /* 
     * Validation binder
     * 
     */
    
    jQuery("#userGeneralInfoForm").validationEngine();
    jQuery("#userAddressInfoForm").validationEngine();
    jQuery("#userCommunicationInfoForm").validationEngine();
    jQuery("#companyInfoForm").validationEngine();
    
    
    /*
     * List of countries combobox ajax
     */
    

    $.ajax({
        url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
//        url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',
        data: {
            url: 'fillComboBox_syscountrys',
            language_code: $("#langCode").val()

        },
        method: "GET",
        dataType: "json",
        success: function (data) {
            var i;

            for (i = 0; i < data.length; i++) {
                if (data[i].name === null) {

                } else {

                    var appending_option_html = "<option value = '" + data[i].id + "' >" +
                            data[i].name +
                            "</option>";

                    var newappendingOption = $(appending_option_html);
                    $(newappendingOption).appendTo($("#usercountry"));

                }
            }
        }
    });

   
    /*
     * List of provinces combobox ajax based on selected country
     */

    $("select#usercountry").on('change', function () {

        var selectedCountryId = $('#usercountry :selected').val();

        $("#usercity").empty();
        $("#userdistrict").empty();
        $("#uservillage").empty();

        $.ajax({
            url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
//        url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',
            data: {
                url: 'fillComboBox_syscity',
                country_id: selectedCountryId,
                language_code: $("#langCode").val()
            },
            method: "GET",
            dataType: "json",
            success: function (data) {

                var i;

                for (i = 0; i < data.length; i++) {
                    if (data[i].name === null) {

                    } else {

                        var province_appending_option_html = "<option value = '" + data[i].id + "' >" +
                                data[i].name +
                                "</option>";
                        var newprovinceappendingOption = $(province_appending_option_html);
                        $(newprovinceappendingOption).appendTo($("#usercity"));
                    }
                }
            }
        });
    });

 
    /*
     * List of districts combobox ajax based on selected country and province
     */
    
    $("select#usercity").on('change', function () {

        var selectedCityId = $('#usercity :selected').val();
        var selectedCountryId = $('#usercountry :selected').val();

        $("#userdistrict").empty();
        $("#uservillage").empty();

        $.ajax({
            url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
//        url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',
            data: {
                url: 'fillComboBox_sysborough',
                country_id: selectedCountryId,
                city_id: selectedCityId,
                language_code: $("#langCode").val()
            },
            method: "GET",
            dataType: "json",
            success: function (data) {

                var i;

                for (i = 0; i < data.length; i++) {
                    if (data[i].name === null) {

                    } else {

                        var district_appending_option_html = "<option value = '" + data[i].id + "' >" +
                                data[i].name +
                                "</option>";
                        var newdistrictappendingOption = $(district_appending_option_html);
                        $(newdistrictappendingOption).appendTo($("#userdistrict"));

//                    $(newappendingOption).on("click", function (event) {

//                    });
                    }
                }
            }
        });
    });

 
    /*
     * List of villages combobox ajax based on selected country, province
     * and district
     */
    
    $("select#userdistrict").on('change', function () {

        var selectedDistrictId = $('#userdistrict :selected').val();
        var selectedCityId = $('#usercity :selected').val();
        var selectedCountryId = $('#usercountry :selected').val();

        $("#uservillage").empty();

        $.ajax({
            url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
//        url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',
            data: {
                url: 'fillComboBox_sysvillage',
                country_id: selectedCountryId,
                city_id: selectedCityId,
                boroughs_id: selectedDistrictId,
                language_code: $("#langCode").val()
            },
            method: "GET",
            dataType: "json",
            success: function (data) {

                var i;

                for (i = 0; i < data.length; i++) {
                    if (data[i].name === null) {

                    } else {

                        var district_appending_option_html = "<option value = '" + data[i].id + "' >" +
                                data[i].name +
                                "</option>";
                        var newdistrictappendingOption = $(district_appending_option_html);
                        $(newdistrictappendingOption).appendTo($("#uservillage"));

//                    $(newappendingOption).on("click", function (event) {

//                    });
                    }
                }
            }
        });
    });

 
    /*
     * List of System languages combobox ajax
     */

    $.ajax({
        url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
//        url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',
        data: {
            url: 'fillComboBox_syslanguage',
            language_code: $("#langCode").val()
        },
        method: "GET",
        dataType: "json",
        success: function (data) {
            var i;

            for (i = 0; i < data.length; i++) {
                if (data[i].language === null) {

                } else {

                    var appending_option_html = "<option value = '" + data[i].id + "' >" +
                            data[i].language +
                            "</option>";

                    var newappendingOption = $(appending_option_html);
                    $(newappendingOption).appendTo($("#userPreferedLanguage"));

                }
            }
        }
    });
 
    /*
     * List of communication types combobox ajax
     */

    $.ajax({
        url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
//        url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',
        data: {
            url: 'fillCommunicationsTypes_sysSpecificDefinitions',
            language_code: $("#langCode").val()
        },
        method: "GET",
        dataType: "json",
        success: function (data) {

            var i;

            for (i = 0; i < data.length; i++) {
                if (data[i].text === null) {

                } else {

                    var appending_option_html = "<option value = '" + data[i].id + "' >" +
                            data[i].text +
                            "</option>";

                    var newappendingOption = $(appending_option_html);
                    $(newappendingOption).appendTo($("#communicationTypes"));

                }
            }
        }
    });


     
    /*
     * Buttons function binder
     */

    $('#userGeneralInfoFormSubmit').submit(submitUserGeneralInfoForm);
    $('#userAddressInfoFormSubmit').submit(submitUserAddressInfoForm);
    $('#userCommunicationInfoFormSubmit').submit(submitUserCommunicationInfoForm);
    $("#userInfoFormReset").on('click', resetForm);
    $("#userCommunicationInfoFormFinalize").on('click', finalizeUserCommunicationInfoForm);
    $("#submitUserCommunicationInfoForm").on('click', submitUserCommunicationInfoForm);


});

/*
 * 
 * @type @exp;event@pro;target
 * Signup.js variables
 * 
 */
var clickedButton;
var clickedForm;

var makePublicProfile;




/*
 * Reset Form Elements
 * @Author: Bahram Lotfi Sadigh
 * @Since: 2016.1.21
 */

function resetForm() {

    clickedButton = event.target;
    clickedForm = clickedButton.closest('form');

    registrationBlockuiResetFormApproval.blockuiApprovalWrapper('option', {
        backgroundColor: '#FF0000',
        fadeOut: '700'
    });
    $('#informationTabContents').block({
        message: "<h1><?php echo $this->translate('Under progress...') ?></h1>",
        css: {border: 'none',
            padding: '15px',
            backgroundColor: '#FF0000',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            'border-radius': '10px',
            opacity: .5,
            color: '#fff'}
    });
    registrationBlockuiResetFormApproval.blockuiApprovalWrapper('test');

}



/*
 * Submit User Form Elements
 * @Author: Bahram Lotfi Sadigh
 * @Since: 2016.1.21
 */
function submitUserGeneralInfoForm() {

    $('#userGeneralInfo').attr('class', "tab-pane fade");
    $('#userAddressInfo').attr('class', "tab-pane fade in active");
    $('#userGeneralInfoTab').removeClass('active');
    $('#userAddressInfoTab').addClass('active');
    $('#userAddressInfoTab').removeClass('disabled');
    
    /*
     * not to display tab:*****************************************************
     * use tab plugin close ***************************************************
     * or *********************************************************************
     * append href to the tab attribute ***************************************
     */
    
    console.log($('#userFirstName').val() + '  ' + $('#userLastName').val() +  '  ' +
            '   ' + $('#preferedUsername').val() + '  ' + $('#userPreferedPassword').val() +
            '   ' + $('#useremail').val() + '   ' + $('#userIdNumber').val()+
            '   ' + $('#userPreferedLanguage').val() + '   ' + makePublicProfile);
        
    $.ajax({
        url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
//        url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',
        data: {
            url: 'tempInsert_infoUsers',
            language_code: $("#langCode").val(),      
            name: $("#userFirstName").val(), 
            surname: $('#userLastName').val(), 
            username: $('#preferedUsername').val(), 
            password: $('#userPreferedPassword').val(), 
            auth_email: $('#useremail').val(), 
            personIdNumber: $('#userIdNumber').val(), 
            preferred_language : $('#userPreferedLanguage').val(),       
            profile_public: makePublicProfile
        },
        method: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {

            console.log(jqXHR);
        }
    });
    
    $('#userAddressInfoTab').attr('href', '#userAddressInfo');
      
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, "slow");

}

function submitUserAddressInfoForm() {

    $('#userAddressInfo').attr('class', "tab-pane fade");
    $('#userCommunicationInfo').attr('class', "tab-pane fade in active");
    $('#userAddressInfoTab').removeClass('active');
    $('#userCommunicationInfoTab').addClass('active');
    $('#userCommunicationInfoTab').removeClass('disabled');
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, "slow");

}

function submitUserCommunicationInfoForm() {

    $('#userCommunicationInfo').attr('class', "tab-pane fade");
    $('#userInfo').attr('class', "tab-pane fade");
    $('#companyInfo').attr('class', "tab-pane fade in active");
    $('#userCommunicationInfoTab').removeClass('active');
    $('#userInfoTab').removeClass('active');
    $('#companyInfoTab').addClass('active');
    $('#companyInfoTab').removeClass('disabled');
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, "slow");

}

function finalizeUserCommunicationInfoForm() {

}


function activateButtons() {

    if ($("#terms").attr("checked") === "checked") {

        $('#userCommunicationInfoFormFinalize').removeClass('disabled');
        $('#userCommunicationInfoFormSubmit').removeClass('disabled');

        $('#userCommunicationInfoFormFinalize').attr('disabled', false);
        $('#userCommunicationInfoFormSubmit').attr('disabled', false);
    } else {
        $('#userCommunicationInfoFormFinalize').addClass('disabled');
        $('#userCommunicationInfoFormSubmit').addClass('disabled');

        $('#userCommunicationInfoFormFinalize').attr('disabled', true);
        $('#userCommunicationInfoFormSubmit').attr('disabled', true);
    }
}


/*
 * Function: Checks tabs (in this function user address info tab) activation, 
 * based on user general information form conditions. 
 * @author: bahram lotfi sadigh
 * @since: 2016.1.26
 */

function checkUGI() {

    if ($("#addressTabActivationController").val() === true) {

        /*
         * last insert id test on query success will be written here 
         */

    } else {

        if ($('#userAddressInfoTab').hasClass('active')) {

        } else if ($('#userAddressInfoTab').hasClass('disabled')) {

            registrationBlockuiPreventAddressTab.blockuiApprovalWrapper('option', {
                backgroundColor: '#FF0000',
                fadeOut: '700'
            });
            $('#informationTabContents').block({
                message: "<h1><?php echo $this->translate('Under progress...') ?></h1>",
                css: {border: 'none',
                    padding: '15px',
                    backgroundColor: '#FF0000',
                    '-webkit-border-radius': '10px',
                    '-moz-border-radius': '10px',
                    'border-radius': '10px',
                    opacity: .5,
                    color: '#fff'}
            });
            registrationBlockuiPreventAddressTab.blockuiApprovalWrapper('test');

        } 
    }
}

/*
 * Function: Checks tabs (in this function user communication info tab) activation, 
 * based on user address information form conditions. 
 * @author: bahram lotfi sadigh
 * @since: 2016.1.26
 */

function checkUAI() {

    if ($("#communicationTabActivationController").val() === true) {

        /*
         * last insert id test on query success will be written here 
         */

    } else {

        if ($('#userCommunicationInfoTab').hasClass('active')) {

        } else if ($('#userCommunicationInfoTab').hasClass('disabled')) {

            registrationBlockuiPreventCommunicationTab.blockuiApprovalWrapper('option', {
                backgroundColor: '#FF0000',
                fadeOut: '700'
            });
            $('#informationTabContents').block({
                message: "<h1><?php echo $this->translate('Under progress...') ?></h1>",
                css: {border: 'none',
                    padding: '15px',
                    backgroundColor: '#FF0000',
                    '-webkit-border-radius': '10px',
                    '-moz-border-radius': '10px',
                    'border-radius': '10px',
                    opacity: .5,
                    color: '#fff'}
            });
            registrationBlockuiPreventCommunicationTab.blockuiApprovalWrapper('test');

        }
    }
}

/*
 * Function: Checks tabs (in this function user communication info tab) activation, 
 * based on user address information form conditions. 
 * @author: bahram lotfi sadigh
 * @since: 2016.1.26
 */

function checkCI() {

    if ($("#companyTabActivationController").val() === true) {

        /*
         * last insert id test on query success will be written here 
         */

    } else {

        if ($('#companyInfoTab').hasClass('active')) {

        } else if ($('#companyInfoTab').hasClass('disabled')) {

            registrationBlockuiPreventCompanyTab.blockuiApprovalWrapper('option', {
                backgroundColor: '#FF0000',
                fadeOut: '700'
            });
            $('#informationTabContents').block({
                message: "<h1><?php echo $this->translate('Under progress...') ?></h1>",
                css: {border: 'none',
                    padding: '15px',
                    backgroundColor: '#FF0000',
                    '-webkit-border-radius': '10px',
                    '-moz-border-radius': '10px',
                    'border-radius': '10px',
                    opacity: .5,
                    color: '#fff'}
            });
            registrationBlockuiPreventCompanyTab.blockuiApprovalWrapper('test');

        }
    }
}

/*
 * Growls js section
 * @author: Bahram Lotfi Sadigh
 * @since: 2016.1.26
 */

var registrationBlockuiResetFormApproval = $("#growlUI-resetFormApproval").blockuiApprovalWrapper();
var registrationBlockuiSuccessfulReset = $("#growlUI-successfulReset").blockuiWrapper();
var registrationBlockuiCancelReset = $("#growlUI-cancelReset").blockuiWrapper();
/*
 * tab controller growls
 */
var registrationBlockuiPreventAddressTab = $("#growlUI-addressTabPrevention").blockuiApprovalWrapper();
var registrationBlockuiPreventCommunicationTab = $("#growlUI-communicationTabPrevention").blockuiApprovalWrapper();
var registrationBlockuiPreventCompanyTab = $("#growlUI-companyTabPrevention").blockuiApprovalWrapper();

function resetConfirmation() {
    clickedForm.reset();

    $.unblockUI();
    $("#informationTabContents").unblock();

    registrationBlockuiSuccessfulReset.blockuiWrapper('option', {
        fadeOut: '2000',
        backgroundColor: '0080000'
    });
    registrationBlockuiSuccessfulReset.blockuiWrapper('test');
}

/*
 * Reject reset operation
 * @author:Bahram lotfi sadigh
 * @since:2016.1.26
 * 
 */

function resetRejection() {

    $.unblockUI();
    $("#informationTabContents").unblock();
    event.preventDefault();
    registrationBlockuiCancelReset.blockuiWrapper('option', {
        fadeOut: '2000',
        backgroundColor: 'FF0000'
    });
    registrationBlockuiCancelReset.blockuiWrapper('test');
}

/*
 * Function to prevent openning of unallowed tab and return to previous tab
 * @author:Bahram lotfi sadigh
 * @since:2016.1.26
 * 
 */

function preventTab() {

    $.unblockUI();
    $("#informationTabContents").unblock();
    event.preventDefault();

    $("#companyInfoTab").removeClass('active');
    $("#userInfoTab").addClass('active');

    $("#userCommunicationInfoTab").removeClass('active');
    $("#userAddressInfoTab").removeClass('active');
    $("#userGeneralInfoTab").addClass('active');
}

function changePublicProfile(){
    
    if($("#makePublicProfile").attr('checked') === 'checked'){
        makePublicProfile = 0;
    }else {
        makePublicProfile = 1;
    }
}



