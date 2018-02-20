function initializeTable() {

    insertCountry('Bulgaria', 'Sofia');
    insertCountry('Germany', 'Berlin');
    insertCountry('Russia', 'Moscow');
    fix();
   
    $('#createLink').click(createCountry);

    function createCountry() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        insertCountry(country, capital)
        $('#newCountryText').val('');
        $('#newCapitalText').val('');
        fix();
    }

    function insertCountry(country, capital) {

        let row = $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital))
            .append($('<td>')
                .append($('<a href="#" id="moveUP">').text('[Up]').click(up))
                .append($('<a href="#" id="moveDown">').text('[Down]').click(down))
                .append($('<a href="#" id="Delete">').text('[Delete]').click(del))
            );
        row.css('display','none')
        row.appendTo($('#countriesTable'));
        row.fadeIn();
    }

    function del() {
        $(this).parent().parent().remove();
        fix();
    }

    function up() {

        let row = $(this).parent().parent()

        row.fadeOut(function(){
            row.insertBefore(row.prev());
            row.fadeIn();
            fix();
        })
    }

    function down() {
        let row = $(this).parent().parent()
        row.fadeOut(function(){
            row.insertAfter(row.next());
            row.fadeIn();
            fix();
        })
    }


    function fix() {

        $('#countriesTable a').css('display','inline');
        let rows = $('#countriesTable tr');
        $(rows[2]).find("a:contains('Up')").css('display', 'none');
        $(rows[rows.length - 1]).find("a:contains('Down')").css('display', 'none');
    }
}