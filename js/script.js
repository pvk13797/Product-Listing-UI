$(document).ready(function(){
    $('.cols').slice(0, 3).show();
    console.log('jQuery Started!!!');
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