var pageIndex = 1;
$(function () {
    $('body').scrollTop(0);
    setTimeout(() => {
        $('.loading').parents('.container').addClass('hide');
        $('.loading').parents('.container').removeClass('minHeight-500');

        $('.mainWrapper').removeClass('hide');
        $('.mainWrapper').addClass('minHeight-500');

    }, 2000);

});

//handle next intro click
//===================================================================================================================================================================================
$('.nextIntro').on('click', function () {
    if (pageIndex > 3) {
        return;
    }
    $('.header .prevIntro').removeClass('hide');
    pageIndex++;
    $('.bullet').removeClass('active');
    $('.bullet').eq(pageIndex - 1).addClass('active');
    if (pageIndex == 1) {
        $('.first__header').removeClass('hide');
        $('.second__header').addClass('hide');
        $('.third__header').addClass('hide');
        $('.second__header .animateCar').removeClass('showCar');
        $('.second__header .animateCar').addClass('stopCar');

    }
    else if (pageIndex == 2) {
        $('.first__header').addClass('hide');
        $('.second__header').removeClass('hide');
        $('.third__header').addClass('hide');
        setTimeout(() => {
            $('.second__header .animateCar').addClass('showCar');
            $('.second__header .animateCar').removeClass('stopCar');

        }, 3);
    } else if (pageIndex == 3) {
        $('.first__header').addClass('hide');
        $('.second__header').addClass('hide');
        $('.third__header').removeClass('hide');
        $('.second__header .animateCar').removeClass('showCar');
        $('.second__header .animateCar').addClass('stopCar');

    }
});

//handle previous intro click
//===================================================================================================================================================================================
$('.prevIntro').on('click', function () {
    pageIndex--;
    $('.bullet').removeClass('active');
    $('.bullet').eq(pageIndex - 1).addClass('active');

    if (pageIndex === 1) {
        $('.header .prevIntro').addClass('hide');
        $('.first__header').removeClass('hide');
        $('.second__header').addClass('hide');
        $('.third__header').addClass('hide');
        $('.animateCar').removeClass('stopCar');
        $('.animateCar').addClass('showCar');


        return;
    } else if (pageIndex == 2) {
        $('.first__header').addClass('hide');
        $('.second__header').removeClass('hide');
        $('.third__header').addClass('hide');
        setTimeout(() => {
            $(' .second__header .animateCar').removeClass('stopCar');
            $('.second__header .animateCar').addClass('showCar');

        }, 3);
    } else if (pageIndex == 3) {
        $('.animateCar').removeClass('stopCar');
        $('.animateCar').addClass('showCar');
        $('.first__header').addClass('hide');
        $('.second__header').addClass('hide');
        $('.third__header').removeClass('hide');

    }
});

// $('.toggleSignInPage').on('click', function () {

//     $('.page').addClass('hide');
//     $('#signInPage').removeClass('hide');
//     $('footer').css('bottom', '5%');

//     debugger;

// });
// $('.toggleSignUpPage').on('click', function () {

//     $('.page').addClass('hide');
//     $('#signUpPage').removeClass('hide');
//     $('footer').css('bottom', '0%');
// });
$('.verificationInput').on('keyup', function (e) {
    debugger;
    if ($(this).val().length == 1) {
        $(this).parents('.form-group').next('.form-group').find('input').trigger('focus');
        $(this).parents('.form-group').find('.line').css('background', ' white');

    } else if ($(this).val().length > 1) {
        $(this).val($(this).val().slice(0, -1));
        $(this).parents('.form-group').next('.form-group').find('input').trigger('focus');

    }


});
$('.verificationInput').on('focus', function () {
    debugger;
    $(this).parents('.form-group').find('.line').css('background', ' #009FD1');
});

// $('.SignUpSubmit').on('click', function () {
//     $('.page').addClass('hide');
//     $('.verification').removeClass('hide');
//     $('body').scrollTop(0);
//     $('footer').css('bottom', '0%');


// });
// $('.forgotPasswordButton').on('click', function () {
//     $('.page').addClass('hide');
//     $('.resetPasswordPage').removeClass('hide');
//     $('body').scrollTop(0);

// });
// $('.forgotPassword').on('click', function () {
//     $('.page').addClass('hide');
//     $('.forgotPasswordPage').removeClass('hide');
//     $('body').scrollTop(0);

// });
