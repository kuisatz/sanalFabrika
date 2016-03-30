$(document).ready(function () {

    window.i = 0;
    window.lang = new Lang();
    lang.dynamic($('#langCode').val(), '/plugins/jquery-lang-js-master/langpack/' + $('#langCode').val() + '.json');
    lang.init({
        defaultLang: 'en'
    });
    console.log($('#selectedCompanyNpk').val());
    /*
     * Start of left menu links
     ****************************
     * Company profile Link
     */

    var companyProfileLink = window.location.href.replace('companyproductsprofile', 'companyprofile');
    var profilelink = "<a href='"
            + companyProfileLink
            + "'>"
            + "<i class='fa fa-bar-chart-o'>"
            + "</i>"
            + window.lang.translate('Company Profile')
            + "</a>";
    $('#companyprofilelink').empty();
    $('#companyprofilelink').append(profilelink);
    /*
     * Company performance meters Link
     */

    var companyPerformanceMetersProfileLink = window.location.href.replace('companyproductsprofile', 'companyperformancemetersprofile');
    var perfromancelink = "<a href='"
            + companyPerformanceMetersProfileLink
            + "'>"
            + "<i class='fa fa-bar-chart-o'>"
            + "</i>"
            + window.lang.translate('Performance Meters')
            + "</a>";
    $('#companyperformancemetersprofilelink').empty();
    $('#companyperformancemetersprofilelink').append(perfromancelink);
    /*
     * Company products meters Link
     */
    var companyProductsProfileLink = window.location.href;
    var productslink = "<a href='"
            + companyProductsProfileLink
            + "'>"
            + "<i class='fa fa-bar-chart-o'>"
            + "</i>"
            + window.lang.translate('Company Products')
            + "</a>";
    $('#companyproductsprofilelink').empty();
    $('#companyproductsprofilelink').append(productslink);
    /*
     * Company members meters Link
     */
    var companyMembersProfileLink = window.location.href.replace('companyproductsprofile', 'companymembersprofile');
    var memberslink = "<a href='"
            + companyMembersProfileLink
            + "'>"
            + "<i class='fa fa-bar-chart-o'>"
            + "</i>"
            + window.lang.translate('Company Members')
            + "</a>";
    $('#companymembersprofilelink').empty();
    $('#companymembersprofilelink').append(memberslink);
    /*
     * Company projects meters Link
     */
    var companyProjectsProfileLink = window.location.href.replace('companyproductsprofile', 'companyprojectsprofile');
    var projectslink = "<a href='"
            + companyProjectsProfileLink
            + "'>"
            + "<i class='fa fa-bar-chart-o'>"
            + "</i>"
            + window.lang.translate('Company Projects')
            + "</a>";
    $('#companyprojectsprofilelink').empty();
    $('#companyprojectsprofilelink').append(projectslink);
    /*
     * Company comments meters Link
     */
    var companyCommentsProfileLink = window.location.href.replace('companyproductsprofile', 'companycommentsprofile');
    var commentslink = "<a href='"
            + companyCommentsProfileLink
            + "'>"
            + "<i class='fa fa-bar-chart-o'>"
            + "</i>"
            + window.lang.translate('Comments')
            + "</a>";
    $('#companycommentsprofilelink').empty();
    $('#companycommentsprofilelink').append(commentslink);
    /*
     * Company history meters Link
     */
    var companyHistoryProfileLink = window.location.href.replace('companyproductsprofile', 'companyhistoryprofile');
    var historylink = "<a href='"
            + companyHistoryProfileLink
            + "'>"
            + "<i class='fa fa-bar-chart-o'>"
            + "</i>"
            + window.lang.translate('Company History')
            + "</a>";
    $('#companyhistoryprofilelink').empty();
    $('#companyhistoryprofilelink').append(historylink);
    /*
     * End of left menu links
     */


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
            var logosrc = "../../../onyuz/standard/assets/img/sfClients/" + data[0].logo;
            $('#profileLogosrc').attr('src', logosrc);
        }
    });


    /*
     * Products categories and category products service
     *
     *
     * 
     *
     $.ajax({
     url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
     //                url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',            
     data: {
     url: '',
     language_code: $("#langCode").val(),
     npk: $('#selectedCompanyNpk').val()
     },
     method: "GET",
     dataType: "json",
     success: function (data) {
     //      console.log(data);
     if (data.length !== null) {
     var prod_cat_num;
     for (prod_cat_num = 0; prod_cat_num < data.category.length; prod_cat_num++) {
     if (prod_cat_num === 0) {
     var cat_tab_id = data[prod_cat_num].product_category_name.replace(/\s/g, '_');
     var appending =
     "<li class='active'><a href='#"
     + cat_tab_id
     + "' data-toggle='tab'>"
     + data[prod_cat_num].product_category_name
     + "</a></li>";
     $('#products_nav_tabs').append(appending);
     }else if (prod_cat_num > 0){
     var appending =
     "<li><a href="
     + cat_tab_id
     + " data-toggle='tab'>"
     + data[prod_cat_num].product_category_name
     + "</a></li>";
     $('#products_nav_tabs').append(appending);
     }
     }
     
     
     }
     }
     });
     */

    /*
     * Create list of products for each category service
     */

    var dataSet = [
        ["Product A", "Category A", "Customer A", "Yes", "$ 250.00", "Order Now"],
        ["Product B", "Category A", "Customer B", "No", "$ 420.00", "Order Now"],
        ["Product C", "Category B", "Customer E", "Yes", "Contact Company", "Order Now"],
        ["Product D", "Category C", "Customer G", "No", "$ 1035.00", "Order Now"],
        ["Product E", "Category A", "Customer A", "No", "$ 270.00", "Order Now"],
        ["Product F", "Category A", "Customer B", "No", "$ 200.00", "Order Now"],
        ["Product G", "Category B", "Customer E", "Yes", "Contact Company", "Order Now"],
        ["Product H", "Category C", "Customer G", "No", "$ 1543.00", "Order Now"],
        ["Product I", "Category A", "Customer Y", "Yes", "$ 250.00", "Order Now"],
        ["Product J", "Category A", "Customer A", "No", "$ 420.00", "Order Now"],
        ["Product K", "Category B", "Customer X", "Yes", "Contact Company", "Order Now"],
        ["Product L", "Category C", "Customer Q", "No", "$ 1035.00", "Order Now"],
        ["Product M", "Category A", "Customer T", "No", "$ 270.00", "Order Now"],
        ["Product N", "Category A", "Customer B", "No", "$ 200.00", "Order Now"],
        ["Product O", "Category B", "Customer E", "Yes", "Contact Company", "Order Now"],
        ["Product P", "Category C", "Customer G", "No", "$ 1543.00", "Order Now"]
    ];

    $('#product_table').DataTable({
        data: dataSet,
        fixedColumns: true,
        scrollX: true,
        select: {
            style: 'single'
        },
        columns: [
            {title: "Product"},
            {title: "Category"},
            {title: "Customer"},
            {title: "Finished Good"},
            {title: "Price"},
            {title: "Order"}
        ]
    });


    window.table = $('#product_table').DataTable();


    $('#product_table tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            window.table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }

        var selectedRowIndex = $(this)[0]._DT_RowIndex;
        this.style.color = '#72c02c';

        if ($('#product_details_DIV').css('visibility') === 'hidden') {

            $('#product_details_DIV').empty();
            var appending = "<div class='left-inner'>"
                    + "<div class='progression'>"
                    + "<h3>"
                    + window.lang.translate('Product Details')
                    + "</h3>"
                    + "<div>selected product has row index of "
                    + selectedRowIndex
                    + "</div>"
                    + "</div>"
                    + "</div>"
                    + "<hr>";

            $('#product_details_DIV').append(appending);
            $('#product_details_DIV').css('visibility', 'visible');
            $('#product_details_DIV').slideDown('slow');
            $('#product_details_DIV').attr('lastIndex', selectedRowIndex);

        } else {
            if ($('#product_details_DIV').attr('lastIndex').toString() === selectedRowIndex.toString()) {
                console.log('clicked on the same row...');
                $('#product_details_DIV').attr('lastIndex', selectedRowIndex);
                $('#product_details_DIV').slideUp('Slow');
                $('#product_details_DIV').css('visibility', 'hidden');
            } else {
                $('#product_details_DIV').attr('lastIndex', selectedRowIndex);
                $('#product_details_DIV').slideUp('Slow');
                $('#product_details_DIV').css('visibility', 'hidden');
                $('#product_details_DIV').empty();
                var appending = "<div class='left-inner'>"
                        + "<div class='progression'>"
                        + "<h3>"
                        + window.lang.translate('Product Details')
                        + "</h3>"
                        + "<div>selected product has row index of "
                        + selectedRowIndex
                        + "</div>"
                        + "</div>"
                        + "</div>"
                        + "<hr>";

                $('#product_details_DIV').css('visibility', 'visible');
                $('#product_details_DIV').append(appending);
                $('#product_details_DIV').slideDown('slow');
            }
        }
    });


    $('#product_table tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            window.table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });









});

/*
 * fixed first column js call
 * 
 */

//    $("#product_table").tableHeadFixer({"head": false, "left": 2});


function listOfCertificates() {

    console.log('Available Certificates');
    if ($("#qualityDetaildDIV").hasClass('active')) {
        $("#qualityDetaildDIV").removeClass('active');
        $("#qualityDetaildDIV").slideUp('Slow');
        $("#qualityDetailsInsideDIV").empty();
    } else {
        window.i++;
        $("#qualityDetailsInsideDIV").append('Certificates ' + i + ' , ');
        $("#qualityDetaildDIV").addClass("active");
        $("#qualityDetaildDIV").slideDown("slow");
    }

}

function qualityHistory() {

    console.log('Qulaity History');
    if ($("#qualityDetaildDIV").hasClass('active')) {
        $("#qualityDetaildDIV").removeClass('active');
        $("#qualityDetaildDIV").slideUp('Slow');
        $("#qualityDetailsInsideDIV").empty();
    } else {
        window.i++;
        $("#qualityDetailsInsideDIV").append('history ' + i + ' , ');
        $("#qualityDetaildDIV").addClass("active");
        $("#qualityDetaildDIV").slideDown("slow");
    }
}



function qualityPerformances() {

    if ($("#qualityDetaildDIV").hasClass('active')) {
        $("#qualityDetaildDIV").removeClass('active');
        $("#qualityDetaildDIV").slideUp('Slow');
        $("#qualityDetailsInsideDIV").empty();
    } else {

        $("#qualityDetaildDIV").addClass("active");
        $("#qualityDetaildDIV").slideDown("slow");
    }

}


function performanceDetails() {

    if ($("#pastPerformanceDetailsDIV").hasClass('active')) {
        $("#pastPerformanceDetailsDIV").removeClass('active');
        $("#pastPerformanceDetailsDIV").slideUp('Slow');
        $("#pastPerformanceDetailsInsideDIV").empty();
    } else {

        $("#pastPerformanceDetailsDIV").addClass("active");
        $("#pastPerformanceDetailsDIV").slideDown("slow");
    }

}

function customerDetails() {

    if ($("#customerDetailsDIV").hasClass('active')) {
        $("#customerDetailsDIV").removeClass('active');
        $("#customerDetailsDIV").slideUp('Slow');
        $("#customerDetailsInsideDIV").empty();
    } else {

        $("#customerDetailsInsideDIV").append();
        $("#customerDetailsDIV").addClass("active");
        $("#customerDetailsDIV").slideDown("slow");
    }

}
