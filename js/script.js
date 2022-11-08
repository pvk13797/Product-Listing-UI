$(document).ready(function(){
    // Search
    $('#search').keyup(function(){
        var filter = $(this).val();
        var count = 0;
        $('.cols').each(function(){
            if($(this).text().search(new RegExp(filter, 'i')) < 0){
                $(this).fadeOut();
            } else {
                $(this).show();
                count++;
            }
        })
    });
    $('.cols').slice(0, 3).show();
    $('.view_more a').click(function(e){
        e.preventDefault();
        $('.cols:hidden').slice(0, 3).show();
        if($('.cols:hidden').length === 0){
            $('.view_more').hide();
        } else {
            $('.view_more').show();
        }
    });
});