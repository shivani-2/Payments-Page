var no_of_links;

$(document).ready(function (){
    $( ".add-row" ).click(function(){
        var $clone = $( "ul.personal-details" ).first().clone();
        $clone.append( "<button type='button' class='remove-row'>-</button>" );
        $clone.insertBefore( ".add-row" );
        no_of_links = $('ul.personal-details').length;
        return no_of_links;
    });

    $( ".form-style-9" ).on("click", ".remove-row", function(){
        $(this).parent().remove();
        no_of_links = $('ul.personal-details').length;
        return no_of_links;
    });

});


//let no_of_links = $('ul.personal-details').length;
            // var total;
            // function logic_links(){
            //     if (no_of_links = 1 ){
            //         total = 2000;
            //     }
            //     else if((no_of_links > 1) && (no_of_links < 5) ){
            //         total = 1800 * no_of_links;
            //     }
            //     else if((no_of_links > 5) && (no_of_links < 20) ){
            //         total = 1500 * no_of_links;
            //     }
            //     else if(no_of_links > 20){
            //         total = 1200 * no_of_links;
            //     }
            // }