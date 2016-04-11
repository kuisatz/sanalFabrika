$(document).ready(function () {

    window.lang = new Lang();
    lang.dynamic($('#langCode').val(), '/plugins/jquery-lang-js-master/langpack/' + $('#langCode').val() + '.json');
    lang.init({
        defaultLang: 'en'
    });

    /*
     * Profile left menu links arrangement
     * @author: Bahram Lotfi
     * @Since: 2016.03.25     
     */



    /*
     * Start of left menu links
     */
    var npk = $('#selectedCompanyNpk').val();
    var currentLink = window.location.href;
    var companyprofilerootLink = window.location.host + "/ostim/sanalfabrika/";

    /*
     * appendings
     */

    var profilelink =
            "<li id='companyprofile' class='list-group-item' onclick=changeMenu(this)>"
            + "<a href='"
            + "#"
//          + companyProfileLink 
            + "'>" + "<i class='fa fa-bar-chart-o'>" + "</i>" + window.lang.translate('Company Profile') + "</a>";
    +"</li>";
    var perfromancelink =
            "<li id='companyperformancemetersprofile' class='list-group-item' onclick=changeMenu(this)>"
            + "<a href='" +
            +"#"
//            companyPerformanceMetersProfileLink 
            + "'>" + "<i class='fa fa-bar-chart-o'>" + "</i>" + window.lang.translate('Performance Meters') + "</a>";
    +"</li>";
    var productslink =
            "<li id='companyproductsprofile' class='list-group-item' onclick=changeMenu(this)>"
            + "<a href='"
            + "#"
//            + companyProductsProfileLink 
            + "'>" + "<i class='fa fa-bar-chart-o'>" + "</i>" + window.lang.translate('Company Products') + "</a>"
            + "</li>";
    var mtslink =
            "<li id='companymtprofile' class='list-group-item list-toggle' onclick=ulActivation(this)>"
            + "<a id='companymtprofile_a' class='collapsed' data-toggle='collapse' "
            + "data-parent='#sidebar-nav-1'  href='#collapse_mach_cats'"
            + "aria-expanded='true'>"
            + "<i class='fa fa-bar-chart-o'>" 
            + "</i>"
            + window.lang.translate('Machines List')
            + "</a>"
            + "<ul id='collapse_mach_cats' class='collapse'>"
            + "<li id='cnc_machine_link' onclick=gotLink(this)>"
            + "<span class='badge rounded badge-red'>"
            + window.lang.translate('C')
            + "</span>"
            + "<a href='#'>"
            + "<i class='fa fa-chevron-circle-right'>"
            + "</i>"
            + window.lang.translate('CNC Machines')
            + "</a>"
            + "</li>"

            + "<li id='turning_machine_link' onclick=gotLink(this)>"
            + "<span class='badge rounded badge-red'>"
            + window.lang.translate('C')
            + "</span>"
            + "<a href='#'>"
            + "<i class='fa fa-chevron-circle-right'>"
            + "</i>"
            + window.lang.translate('Turning Machines')
            + "</a>"
            + "</li>"

            + "<li id='milling_machine_link' onclick=gotLink(this)>"
            + "<span class='badge rounded badge-red'>"
            + window.lang.translate('C')
            + "</span>"
            + "<a href='#'>"
            + "<i class='fa fa-chevron-circle-right'>"
            + "</i>"
            + window.lang.translate('Milling Machines')
            + "</a>"
            + "</li>"

            + "<li id='drilling_machine_link' onclick=gotLink(this)>"
            + "<span class='badge rounded badge-red'>"
            + window.lang.translate('C')
            + "</span>"
            + "<a href='#'>"
            + "<i class='fa fa-chevron-circle-right'>"
            + "</i>"
            + window.lang.translate('Drilling Machines')
            + "</a>"
            + "</li>"

            + "<li id='drilling_machine_link' onclick=gotLink(this)>"
            + "<span class='badge rounded badge-red'>"
            + window.lang.translate('C')
            + "</span>"
            + "<a href='#'>"
            + "<i class='fa fa-chevron-circle-right'>"
            + "</i>"
            + window.lang.translate('Grinding Machines')
            + "</a>"
            + "</li>"

            + "<li id='uswelding_machine_link' onclick=gotLink(this)>"
            + "<span class='badge rounded badge-blue'>"
            + window.lang.translate('W')
            + "</span>"
            + "<span class='badge rounded badge-blue'>"
            + window.lang.translate('')
            + "</span>"
            + "<a href='#'>"
            + "<i class='fa fa-chevron-circle-right'>"
            + "</i>"
            + window.lang.translate('US Welding Machines')
            + "</a>"
            + "</li>"

            + "<li id='edm_machine_link' onclick=gotLink(this)>"
            + "<span class='badge rounded badge-yellow'>"
            + window.lang.translate('UN')
            + "</span>"
            + "<span class='badge badge-u'>"
            + window.lang.translate('')
            + "</span>"
            + "<a href='#'>"
            + "<i class='fa fa-chevron-circle-right'>"
            + "</i>"
            + window.lang.translate('EDM Machines')
            + "</a>"
            + "</li>"
            + "</ul>"
            + "</li>";
    var memberslink =
            " <li id='companymembersprofile' class='list-group-item' onclick=changeMenu(this)>"
            + "<a href='"
            + "#"
//            + companyMembersProfileLink 
            + "'>" + "<i class='fa fa-bar-chart-o'>" + "</i>" + window.lang.translate('Company Members') + "</a>"
            + "</li>";
    var projectslink =
            " <li id='companyprojectsprofile' class='list-group-item' onclick=changeMenu(this)>"
            + "<a href='"
            + "#"
//            + companyProjectsProfileLink 
            + "'>" + "<i class='fa fa-bar-chart-o'>" + "</i>" + window.lang.translate('Company Projects') + "</a>";
    +"</li>";
    var commentslink =
            "<li id='companycommentsprofile' class='list-group-item' onclick=changeMenu(this)>"
            + "<a href='"
            + "#"
//            + companyCommentsProfileLink 
            + "'>" + "<i class='fa fa-bar-chart-o'>" + "</i>" + window.lang.translate('Comments') + "</a>";
    +"</li>";
    var historylink =
            "<li id='companyhistoryprofile' class='list-group-item' onclick=changeMenu(this)>"
            + "<a href='"
            + "#"
//            + companyHistoryProfileLink 
            + "'>" + "<i class='fa fa-bar-chart-o'>" + "</i>" + window.lang.translate('Company History') + "</a>";
    +"</li>";

    /*
     * Check registered user and call required menu links
     */

    if ($('#pk').val() === '') {
        $('#sidebar-nav-1').empty();
        $('#sidebar-nav-1').append(
                profilelink
                + productslink
                + mtslink
                + memberslink
                + commentslink
                + historylink);
    } else {
        $('#sidebar-nav-1').empty();
        $('#sidebar-nav-1').append(
                profilelink
                + perfromancelink
                + productslink
                + mtslink
                + memberslink
                + projectslink
                + commentslink
                + historylink);
    }

    /*
     * Check active link
     */
//    string.indexOf(substring)
    var pagenpk = currentLink.replace('https://' + companyprofilerootLink, '');
    if (pagenpk.indexOf("#")) {
        pagenpk = pagenpk.substring(0, pagenpk.indexOf('#'));
    }
    var page = pagenpk.replace('/' + npk, '');

    $('.li').on('click', function () {
        $('.active').removeClass('active');
        $('.' + $(this).attr('class')).addClass('active');
    });

    /*
     * find which link is active according to url
     */

    var found_active = $('#requestUriRegulated').val().split('/');
    var active_action;

    if (found_active[1] === '--dil--') {
        active_action = found_active[4];
    } else {
        active_action = found_active[3];
    }

    if (active_action === 'companymtprofile') {
        $('#' + active_action).siblings().removeClass('active');
        $('#' + active_action).addClass('active');
//        console.log($('#companymtprofile_a').attr('aria-expanded'));
//        console.log($('#companymtprofile_a').attr('class'));

        $('#companymtprofile_a').attr('aria-expanded', true);
        $('#companymtprofile_a').attr('class', '');
        $('#collapse_mach_cats').addClass('in');
        $('#collapse_mach_cats').attr('aria-expanded', true);

//        console.log($('#companymtprofile_a').attr('aria-expanded'));
//        console.log($('#companymtprofile_a').attr('class'));

    } else {

        $('#' + active_action).siblings().removeClass('active');
        $('#' + active_action).addClass('active');

    }
});


function changeMenu(clicked_link) {

    var divided = $('#requestUriRegulated').val().split('/');
    var action;

    if (divided[1] === '--dil--') {
        action = divided[4];
    } else {
        action = divided[3];
    }

    $(clicked_link).siblings().removeClass('active');
    $(clicked_link).addClass('active');
//    console.log(window.location.href);

    var newURL = window.location.href.replace(action, clicked_link.id);
    window.location.replace(newURL);

}

function ulActivation(clicked) {

    if (!$('#companymtprofile').hasClass('.active')) {

        $('#companymtprofile').siblings().removeClass('active');
        $('#companymtprofile').addClass('.active');

        var divided = $('#requestUriRegulated').val().split('/');
        var action;

        if (divided[1] === '--dil--') {
            action = divided[4];
        } else {
            action = divided[3];
        }

        $(clicked).siblings().removeClass('active');
        $(clicked).addClass('active');

        var newURL = window.location.href.replace(action, clicked.id);
        window.location.replace(newURL);
    }

}
