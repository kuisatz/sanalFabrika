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

    $("#userGeneralInfoForm").validationEngine();
    $("#userAddressInfoForm").validationEngine();
    $("#userCommunicationInfoForm").validationEngine();
    $("#companyInfoForm").validationEngine();


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
var makePublicProfile = 0;

/*
 * Reset Form Elements
 * @Author: Bahram Lotfi Sadigh
 * @Since: 2016.1.21
 */

function resetForm() {

    clickedButton = event.target;
    clickedForm = clickedButton.closest('form');

//    registrationBlockuiResetFormApproval.blockuiCentered('option', {
//        backgroundColor: '#FF0000',
//        fadeOut: '700'
//    });
    $('#informationTabContents').blockElement();
    registrationBlockuiResetFormApproval.blockuiCentered('show');

}

/*
 * Submit User Form Elements
 * @Author: Bahram Lotfi Sadigh
 * @Since: 2016.1.21
 */

function submitUserGeneralInfoForm() {

    /*
     * not to display tab:*****************************************************
     * use tab plugin close ***************************************************
     * or *********************************************************************
     * append href to the tab attribute ***************************************
     */


    if ($('#userGeneralInfoForm').validationEngine('validate')) {


        $('#userGeneralInfo').removeClass("tab-pane fade in active");
        $('#userGeneralInfo').addClass("tab-pane fade");
        $('#userAddressInfo').removeClass("tab-pane fade");
        $('#userAddressInfo').addClass("tab-pane fade in active");

        $('#userGeneralInfoTab').removeClass('active');
        $('#userAddressInfoTab').addClass('active');
        $('#userAddressInfoTab').removeClass('disabled');

        if (!$("#pktemp") === null) {

            var lastInsertId = $("#lastInsertId");

            $.ajax({
                url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
//                url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',
                data: {
                    url: 'pkUpdate_infoUsers',
                    language_code: $("#langCode").val(),
                    name: $("#userFirstName").val(),
                    surname: $('#userLastName').val(),
                    username: $('#preferedUsername').val(),
                    password: $('#userPreferedPassword').val(),
                    auth_email: $('#useremail').val(),
                    personIdNumber: $('#userIdNumber').val(),
                    preferred_language: $('#userPreferedLanguage').val(),
                    profile_public: makePublicProfile,
                    operation_type_id: 2,
                    active: 0,
                    act_parent_id: 0
                },
                method: "GET",
                dataType: "json",
                success: function (data) {

                    $("#checkGeneralForm").val("1");
                    console.log($("#checkGeneralForm"));
                    $("#pktemp").val(data.pktemp);
                    $('#lastInsertId').val(data.lastInsertId);

                    $('#informationTabContents').blockElement();
                    submitUserGeneralInfoSuccessful.blockuiCentered('show');

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.error(jqXHR);

                    $('#informationTabContents').blockElement();
                    submitUserGeneralInfoUnsuccessful.blockuiCentered('show');
                }
            });

        } else {

            $.ajax({
                url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
//                url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',
                data: {
                    url: 'tempInsert_infoUsers',
                    language_code: $("#langCode").val(),
                    name: $("#userFirstName").val(),
                    surname: $('#userLastName').val(),
                    username: $('#preferedUsername').val(),
                    password: $('#userPreferedPassword').val(),
                    auth_email: $('#useremail').val(),
                    personIdNumber: $('#userIdNumber').val(),
                    preferred_language: $('#userPreferedLanguage').val(),
                    profile_public: makePublicProfile
                },
                method: "GET",
                dataType: "json",
                success: function (data) {

                    $("#pktemp").val(data.pktemp);
                    console.log('pk ' + $("#pktemp"));
                    $('#lastInsertId').val(data.lastInsertId);
                    console.log('lastInsertId ' + $("#lastInsertId"));
                    $("#checkGeneralForm").val("1");
                    console.log($("#checkGeneralForm"));

                    $('#informationTabContents').blockElement();
                    submitUserGeneralInfoSuccessful.blockuiCentered('show');

                },
                error: function (jqXHR, textStatus, errorThrown) {

                    $("#checkGeneralForm").val("0");


                    $('#informationTabContents').blockElement();
                    submitUserGeneralInfoUnsuccessful.blockuiCentered('show');
                }
            });
        }

        $('#userAddressInfoTab').attr('href', '#userAddressInfo');

        event.preventDefault();
        $("html, body").animate({scrollTop: 0}, "slow");
    }
}

function submitUserAddressInfoForm() {


    if ($('#userAddressInfoForm').validationEngine('validate')) {


        $('#userAddressInfo').attr('class', "tab-pane fade");
        $('#userCommunicationInfo').attr('class', "tab-pane fade in active");
        $('#userAddressInfoTab').removeClass('active');
        $('#userCommunicationInfoTab').addClass('active');
        $('#userCommunicationInfoTab').removeClass('disabled');
        event.preventDefault();
        $("html, body").animate({scrollTop: 0}, "slow");

    }

}

function submitUserCommunicationInfoForm() {

    if ($('#userCommunicationInfoForm').validationEngine('validate')) {


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

    if ($("#checkGeneralForm").val() === "1") {


    } else if ($("#checkGeneralForm").val() === "0") {

        if ($('#userAddressInfoTab').hasClass('active')) {

        } else if ($('#userAddressInfoTab').hasClass('disabled')) {


//            registrationBlockuiPreventAddressTab.blockuiCentered('option', {
//                backgroundColor: '#FF0000',
//                fadeOut: '700'
//            });
            $('#informationTabContents').blockElement();
            registrationBlockuiPreventAddressTab.blockuiCentered('show');

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

    if ($("#checkAddressForm").val() === "1") {

    } else if ($("#checkAddressForm").val() === "0") {

        if ($('#userCommunicationInfoTab').hasClass('active')) {

        } else if ($('#userCommunicationInfoTab').hasClass('disabled')) {

//            registrationBlockuiPreventCommunicationTab.blockuiCentered('option', {
//                backgroundColor: '#FF0000',
//                fadeOut: '700'
//            });
            $('#informationTabContents').blockElement();
            registrationBlockuiPreventCommunicationTab.blockuiCentered('show');

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

    if ($("#checkCommunicationForm").val() === "1") {

        /*
         * last insert id test on query success will be written here 
         */

    } else if ($("#checkCommunicationForm").val() === "0") {

        if ($('#companyInfoTab').hasClass('active')) {

        } else if ($('#companyInfoTab').hasClass('disabled')) {

//            registrationBlockuiPreventCompanyTab.blockuiCentered();
            $('#informationTabContents').blockElement();
            registrationBlockuiPreventCompanyTab.blockuiCentered('show');

        }
    }
}

/*
 * Growls js section
 * @author: Bahram Lotfi Sadigh
 * @since: 2016.1.26
 */

var registrationBlockuiResetFormApproval = $("#growlUI-resetFormApproval").blockuiCentered();
var registrationBlockuiSuccessfulReset = $("#growlUI-successfulReset").blockuiCentered();
var registrationBlockuiCancelReset = $("#growlUI-cancelReset").blockuiCentered();
/*
 * tab controller growls
 */
var registrationBlockuiPreventAddressTab = $("#growlUI-addressTabPrevention").blockuiCentered();
var registrationBlockuiPreventCommunicationTab = $("#growlUI-communicationTabPrevention").blockuiCentered();
var registrationBlockuiPreventCompanyTab = $("#growlUI-companyTabPrevention").blockuiCentered();

/*
 * @returns {undefined}
 * Info submission growls
 * @author: Bahram Lotfi Sadigh
 * @since: 2016.1.27
 * 
 * submit general info
 */
var submitUserGeneralInfoSuccessful = $("#growlUI-submitUserGeneralInfoSuccessful").blockuiCentered();
var submitUserGeneralInfoUnsuccessful = $("#growlUI-submitUserGeneralInfoUnsuccessful").blockuiCentered();

/* 
 * submit address info
 */
var submitUserAddressInfoSuccessful = $("#growlUI-submitUserAddressInfoSuccessful").blockuiCentered();
var submitUserAddressInfoUnsuccessful = $("#growlUI-submitUserAddressInfoUnsuccessful").blockuiCentered();


/* 
 * submit communication info
 */
var submitUserCommunicationInfoSuccessful = $("#growlUI-submitUserCommunicationInfoSuccessful").blockuiCentered();
var submitUserCommunicationInfoUnsuccessful = $("#growlUI-submitUserCommunicationInfoUnsuccessful").blockuiCentered();


/*
 * 
 * @returns {undefined}
 * functions section
 * 
 */

function resetConfirmation() {
    clickedForm.reset();

    $.unblockUI();
    $("#informationTabContents").unblock();

//    registrationBlockuiSuccessfulReset.blockuiCentered('option', {
//        fadeOut: '2000',
//        backgroundColor: '0080000'
//    });
    registrationBlockuiSuccessfulReset.blockuiCentered('show');
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
    registrationBlockuiCancelReset.blockuiCentered('option', {
        fadeOut: '700'
    });
    registrationBlockuiCancelReset.blockuiCentered('show');
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

    console.log('general    ' + $("#checkGeneralForm").val());
    console.log('address    ' + $("#checkAddressForm").val());
    console.log('communication  ' + $("#checkCommunicationForm").val());

    $("#userAddressInfo").hide();

    $("#companyInfoTab").removeClass('active');
    $("#userInfoTab").addClass('active');

    $("#userCommunicationInfoTab").removeClass('active');
    $("#userAddressInfoTab").removeClass('active');
    $("#userAddressInfoTab").attr('display', 'hide');
    $("#userGeneralInfoTab").addClass('active');

    $('#userAddressInfo a').tab('hide');
//    $('#userGeneralInfo a').tab('show');

    $("#secondaryTabs a:last").tab('show');

    if ($("#checkCommunicationForm").val() === "1") {
        $("#companyInfoTab").addClass('active');
        $("#userInfoTab").removeClass('active');
        $("#companyInfoTab").find('a').replaceWith("<a href='#companyInfo' data-toggle='tab'>");
        console.log($("#companyInfoTab").find('a'));


    } else {

        if ($("#checkAddressForm").val() === "1") {

            $("#companyInfoTab").removeClass('active');
            $("#userInfoTab").addClass('active');
            $("#userCommunicationInfoTab").addClass("active");
            $("#userAddressInfoTab").removeClass('active');
            $("#userGeneralInfoTab").removeClass('active');

        } else {

            if ($("#checkGeneralForm").val() === "1") {

                $("#companyInfoTab").removeClass('active');
                $("#userInfoTab").addClass('active');
                $("#userCommunicationInfoTab").removeClass("active");
                $("#userAddressInfoTab").addClass('active');
                $("#userGeneralInfoTab").removeClass('active');

            } else {

                $("#companyInfoTab").removeClass('active');
                $("#userInfoTab").addClass('active');
                $("#userCommunicationInfoTab").removeClass("active");
                $("#userAddressInfoTab").removeClass('active');
                $("#userGeneralInfoTab").addClass('active');

            }
        }
    }


}

function changePublicProfile() {

    if ($("#makePublicProfile").attr('checked') === 'checked') {
        makePublicProfile = 0;
    } else {
        makePublicProfile = 1;
    }
}




