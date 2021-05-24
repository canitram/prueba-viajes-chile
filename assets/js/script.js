$(document).ready(function () {

    $(window).scroll(function(){
        if($('#navbarra').offset().top > 580 ){



            $('#navbarra').addClass('bg-scroll');
        }else{
            $('#navbarra').removeClass('bg-scroll');
        }
    });

});
