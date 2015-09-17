$(function () {
	$('.s-select').simpleselect();

    $('.input-daterange').datepicker({
        todayBtn: "linked"
    });
    $('.selectbox').on('click', function (event) {
        event.event.stopPropagation();
        if($('.selectbox-dropdown').is(':visible')){
            $('.selectbox-dropdown').slideUp('fast');
        }else{
            $('.selectbox-dropdown').slideDown('fast');
        }
    })


    $('.forRooms .sub').click(function () {
        var value = parseInt($('.rooms').html());
        if(value > 1){
            $('.rooms').html(value - 1);
        }
    })
    $('.forAdults .sub').click(function () {
        var value = parseInt($('.adults').html());
        if(value > 1){
            $('.adults').html(value - 1);
        }
    })
    $('.forRooms .add').click(function () {
        var value = parseInt($('.adults').html());
        var value2 = parseInt($('.rooms').html());
        if(value2 < 30){
            if(value2 < value){
                $('.rooms').html(value2 + 1);
            }
            if(value == value2){
                $('.adults').html(value + 1);
                $('.rooms').html(value2 + 1);
            }
        }
    })
    $('.forAdults .add').click(function () {
        var value = parseInt($('.adults').html());
        var value2 = parseInt($('.rooms').html());
        if(value < 30){
            if(value < value2){
                $('.adults').html(value + 1);
            }
            if(value == value2){
                $('.adults').html(value + 1);
                $('.rooms').html(value2 + 1);
            }
        }
    })

    /* navbar-bottom for dropdowns*/
    $('.navbar-bottom a').click(function () {
        if($(this).parent().hasClass('active')){
            $(this).parent().removeClass('active');
            $(this.hash).stop(true, true).slideUp();
            //$('.subnav').stop(true, true).slideUp();
        }
        else{
            $(this).parent().parent().children().removeClass('active');
            $(this).parent().addClass('active');
            $('.subnav').stop(true, true).slideUp();
            $(this.hash).stop(true, true).slideDown('slow');

        }
        return false;
    })
    $('body').click(function (event) {
        $('.navbar-bottom li').removeClass('active');
        $('.subnav').slideUp();
    })
    $('.subnav').click(function (event) {
        event.stopPropagation();
    })
});