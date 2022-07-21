$(function(){
    $('.nav .nav-item').on('click', function(e) {
        e.preventDefault();

        // console.log($(this).hasClass('active'));

        if(!$(this).hasClass('active')){
            $('.nav .nav-item').removeClass('active');
            $(this).addClass('active');

        }
        
    });
});