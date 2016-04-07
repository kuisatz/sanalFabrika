$(document).ready(function () {

    window.lang = new Lang();
    lang.dynamic($('#langCode').val(), '/plugins/jquery-lang-js-master/langpack/' + $('#langCode').val() + '.json');
    lang.init({
        defaultLang: 'en'
    });
//    console.log($('#selectedCompanyNpk').val());
   
    

    $.ajax({
        url: 'https://proxy.sanalfabrika.com/SlimProxyBoot.php',
        //                url: 'http://proxy.sanalfabrika.com:9990/SlimProxyBoot.php',            
        data: {url: 'fillCompanyInfoEmployeesGuest_infoFirmProfile',
            language_code: $("#langCode").val(),
            npk: $('#selectedCompanyNpk').val()
        },
        method: "GET",
        dataType: "json",
        success: function (data) {
//            console.log(data);
            window.logosrc = "../../../onyuz/standard/assets/img/sfClients/logos/" + data[0].logo;
            $('#profileLogosrc').attr('src', window.logosrc);
            $('#logoPlace1').attr('src', window.logosrc);
        }
    });
});

/*
 * 
 * here this function manages data table of machines on click event of company
 * machine tools sub menus
 * @author: Bahram
 * @Since: 2016.4.7
 */


function gotLink(clicked_Id) {
        
    window.target_machine_id = clicked_Id.id.toString().replace('_link', '');
    window.target_table = target_machine_id + "_table";
    window.target_data = target_machine_id + "_data";
    window.machine_map = new Object();
    
    $('#companymtprofile').addClass('.active');

    if ($('#table_place_holder').css('visibility', 'hidden')) {
        $('#table_place_holder').css('visibility', 'visible');
        $('#table_place_holder').css('display', 'block');


        $('#machine_details_DIV').empty();
        $('#selectedMachineNamePH').empty();

        $('#machine_details_DIV').css('visibility', 'hidden');
        $('#machine_details_DIV').css('display', 'none');

        $('#selected_machine_divider').css('visibility', 'hidden');
        $('#selected_machine_divider').css('display', 'none');
    }


    machine_map['cnc_machine_data'] =
            [
                ["Mazak", "VariAxis II", "1", "2000", "Yes"],
                ["Mazak", "INTEGREX j-200 (500U)", "1", "2000", "Yes"],
                ["EMCO", "TURN CNC with C axes", "1", "2000", "Yes"],
                ["YANG", "CNC Turning Lathe", "1", "2000", "Yes"],
                ["TSUGAMI", "CNC Automatic Lathe", "1", "2000", "Yes"]
            ];
    machine_map['turning_machine_data'] =
            [
                ["METAL SUPER 2000", "Turning Lathe Universal", "1", "2000", "Yes"],
                ["TEZSAN TOS", "Turning Lathe Universal", "1", "2000", "Yes"],
                ["MEUSER", "Turning Lathe Universal", "1", "2000", "Yes"],
                ["ROVELVER 20", "Turning Lathe", "1", "2000", "Yes"],
                ["SCHAUBLIN ROVELVER", "102N Turning Lathe", "2", "2000", "Yes"],
                ["EMCO Mailer ", "maximat V13 Turning lathe", "1", "2000", "Yes"],
                ["BECHLER", "Automat Turning Lathe", "2", "2000", "Yes"],
                ["STROHM SLIDING", "Turning Lathe", "4", "2000", "Yes"]
            ];
    machine_map['milling_machine_data'] =
            [
                ["UMF RUHLA", "NC Mold Milling Machine", "1", "2000", "Yes"],
                ["TAKSAN", "Universal Milling Machine", "1", "2000", "Yes"]
            ];
    machine_map['drilling_machine_data'] =
            [
                ["LUS-SAN", "Drilling Machine", "2", "2000", "Yes"],
                ["BILMAKSAN", "Drilling Machine", "1", "2000", "Yes"],
                ["TOS", "Drilling Machine", "1", "2000", "Yes"],
                ["MITAS", "Drilling Machine", "1", "2000", "Yes"],
                ["ACIERA", "Drilling and Tapping Machine", "1", "2000", "Yes"]
            ];
    machine_map['grinding_machine_data'] =
            [
                ["BRANSON", "2000 Ultrasonic Welding Machine", "2", "2000", "Yes"],
                ["BRANSON", "900 Ultrasonic Welding Machine", "1", "2000", "Yes"],
                ["MAXWIDE", "Ultrasonic Welding Machine", "1", "2000", "Yes"]
            ];
    machine_map['uswelding_machine_data'] =
            [
                ["BRANSON", "2000 Ultrasonic Welding Machine", "2", "2000", "Yes"],
                ["BRANSON", "900 Ultrasonic Welding Machine", "1", "2000", "Yes"],
                ["MAXWIDE", "Ultrasonic Welding Machine", "1", "2000", "Yes"]
            ];
    machine_map['edm_machine_data'] =
            [
                ["CHARMILE", "D20 EDM", "1", "2000", "Yes"],
                ["SODICK", "AG600 L CNC WIRE EDM", "1", "2000", "Yes"],
                ["SODICK", "AQ750LH CNC WIRE EDM", "1", "2000", "Yes"],
                ["OSCAR", "MAX CNC SINK EDM", "1", "2000", "2000", "Yes"]
            ];
    var appending_list = "<div class='left-inner'>"
            + "<div class='row'>"
            + "<div id='"
            + window.target_machine_id
            + "'>"
            + "<table id='"
            + window.target_machine_id
            + "_table'"
            + " class='table table-hover table-striped table-condensed'"
            + " cellspacing='0' style='font-size: 12px'>"
            + " </table>"
            + " </div>"
            + " </div>"
            + " </div>";
    $('#sel_mach_cat_list_div').empty();
    $('#sel_mach_cat_list_div').append(appending_list);
    $('#' + window.target_table).DataTable({
        data: window.machine_map[target_data],
        fixedColumns: true,
        scrollX: true,
        select: {
            style: 'single'
        },
        columns: [
            {title: window.lang.translate("Manufacturer")},
            {title: window.lang.translate("Series")},
            {title: window.lang.translate("Number")},
            {title: window.lang.translate("Model")},
            {title: window.lang.translate("Owner")}
        ]
    });

    $('html, body').animate({
        scrollTop: $("#sel_mach_cat_list_div").offset().top
    }, 1000);

    window.table = $('#' + window.target_table).DataTable();
    $('#' + window.target_table + ' tbody').on('click', 'tr', function () {

        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            window.table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }

        var selectedRowIndex = $(this)[0]._DT_RowIndex;
//        this.style.color = '#72c02c';
        var d = window.table.row(this).data();
        /*
         * 
         * @type type
         * ajxa request to get product properties should be added here...
         * for now a properties array is created...
         */


        var properties = [
            {key: 'name', value: 'machine_name'},
            {key: 'code', value: 'machine_series'},
            {key: 'prop 1', value: 'machine_prop1'},
            {key: 'prop 2', value: 'machine_prop2'}
        ];
        if ($('#machine_details_DIV').css('visibility') === 'hidden') {

            $('#machine_details_DIV').empty();
            $('#selectedMachineNamePH').empty();

            var appending =
//                    "<hr>"
                    "<div class='funny-boxes funny-boxes-top-sea'>"
                    + "<div class='row'>"
                    + "<div class='left-inner'>"
                    + "<div class='progression'>"
                    + "<h3>"
                    + window.lang.translate('Machine Details')
                    + "</h3>"
                    + "<div class='row'>"
                    + "<a href="
                    + "https://www.bahram.sanalfabrika.com/onyuz/standard/assets/img/main/img12.jpg"
                    + ">"
                    + "<img class='mach_sample' src="
                    + "../../../onyuz/standard/assets/img/main/img12.jpg"
                    + " alt=''>"
                    + "</a>"
                    + "</div>"

                    + "<div class='row'>"
                    + "<table id=machinePropertiesTable "
                    + "class='table table-hover table-striped table-condensed' "
                    + "cellspacing='0' style='font-size: 12px'>"

                    + "<tr>"
                    + "<td>"
                    + d[0]
                    + "</td>"
                    + "<td>"
                    + d[1]
                    + "</td>"
                    + "</tr>"

                    + "</table>"
                    + "</div>"
                    + "</div>"
                    + "</div>"
                    + "</div>";

            $('#machine_details_DIV').append(appending);
            $('#selectedMachineNamePH').append(d[0] + '- ' + d[1]);

            var appending2;
            $.each(properties, function (key, vlaue) {

                appending2 = "<tr>"
                        + "<td>"
                        + properties[key].key
                        + "</td>"
                        + "<td>"
                        + properties[key].value
                        + "</td>"
                        + "</tr>";
                $('#machinePropertiesTable').append(appending2);
            });

            $('#selected_machine_divider').css('visibility', 'visible');
            $('#selected_machine_divider').css('display', 'block');

            $('#machine_details_DIV').css('visibility', 'visible');
            $('#machine_details_DIV').css('display', 'block');

            $('#machine_details_DIV').slideDown('slow');
            $('#machine_details_DIV').attr('lastIndex', selectedRowIndex);

        } else {
            if ($('#machine_details_DIV').attr('lastIndex').toString() === selectedRowIndex.toString()) {

                $('#machine_details_DIV').attr('lastIndex', selectedRowIndex);
                $('#machine_details_DIV').slideUp('Slow');

                $('#machine_details_DIV').css('visibility', 'hidden');
                $('#machine_details_DIV').css('display', 'none');

                $('#selected_machine_divider').css('visibility', 'hidden');
                $('#selected_machine_divider').css('display', 'none');

            } else {

                $('#machine_details_DIV').attr('lastIndex', selectedRowIndex);
                $('#machine_details_DIV').slideUp('Slow');

                $('#machine_details_DIV').css('visibility', 'hidden');
                $('#machine_details_DIV').css('display', 'none');
                $('#machine_details_DIV').empty();

                $('#selected_machine_divider').css('visibility', 'hidden');
                $('#selected_machine_divider').css('display', 'none');
                $('#selectedMachineNamePH').empty();

                var appending =
//                        "<hr>"
                        "<div class='funny-boxes funny-boxes-top-sea'>"
                        + "<div class='row'>"
                        + "<div class='left-inner'>"
                        + "<div class='progression'>"
                        + "<h3>"
                        + window.lang.translate('Machine Details')
                        + "</h3>"
                        + "<div class='row'>"
                        + "<a href="
                        + "https://www.bahram.sanalfabrika.com/onyuz/standard/assets/img/main/img12.jpg"
                        + ">"
                        + "<img class='mach_sample' src="
                        + "../../../onyuz/standard/assets/img/main/img12.jpg"
                        + " alt=''>"
                        + "</a>"
                        + "</div>"

                        + "<div class='row'>"
                        + "<table id=machinePropertiesTable "
                        + "class='table table-hover table-striped table-condensed' "
                        + "cellspacing='0' style='font-size: 12px'>"

                        + "<tr>"
                        + "<td>"
                        + d[0]
                        + "</td>"
                        + "<td>"
                        + d[1]
                        + "</td>"
                        + "</tr>"

                        + "</table>"
                        + "</div>"
                        + "</div>"
                        + "</div>"
                        + "</div>";

                $('#machine_details_DIV').append(appending);
                var appending2;
                $.each(properties, function (key, vlaue) {

                    appending2 = "<tr>"
                            + "<td>"
                            + properties[key].key
                            + "</td>"
                            + "<td>"
                            + properties[key].value
                            + "</td>"
                            + "</tr>";
                    $('#machinePropertiesTable').append(appending2);
                });

                $('#selectedMachineNamePH').append(d[0] + '- ' + d[1]);
                $('#selected_machine_divider').css('visibility', 'visible');
                $('#selected_machine_divider').css('display', 'block');

                $('#machine_details_DIV').css('visibility', 'visible');
                $('#machine_details_DIV').css('display', 'block');

                $('#machine_details_DIV').slideDown('slow');
            }
        }

        if ($('#machine_details_DIV').css('visibility') === 'visible') {
            $('html, body').animate({
                scrollTop: $("#machine_details_DIV").offset().top
            }, 1000);
        }

    });
}


