var pageIndex = 1;
$(function () {
    console.log('test');
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