"use strict";

var $ = jQuery,
  $body = $('body');

$(document).ready(function() {

  /* Converting img to svg
  -------------------------------------------------------------*/
  $('img.svg').each(function(){
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
        var $svg = $(data).find('svg');
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        $img.replaceWith($svg);

    }, 'xml');
  });

  /**/
  $('.header .my-button').on( "click", function() {
    var myButton = $('header .my-button')
    myButton.toggleClass('open');

    if($body.hasClass('hideOverflow')) {
      $body.removeClass( "hideOverflow" );
    }else {
      $body.addClass( "hideOverflow" );
    }
  });

  /**/
  $('.btn-show-fiter').on( "click", function() {
    var wrapFilter = $('.catalog-wrap-filter');
    wrapFilter.toggleClass('open');
  });

  //swiper gallery
  var swiperGallery = new Swiper(".mySwiper-gallery", {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      240: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });

  //swiper mySwiper-review
  var swiperReview = new Swiper(".mySwiper-review", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $("header .navbar-nav a, .scroll-btn").mPageScroll2id({});

  //qty


  

});

$(window).on('load', function () {
//   (function () {
//   const quantityContainer = document.querySelector(".quantity");
//   const minusBtn = quantityContainer.querySelector(".minus");
//   const plusBtn = quantityContainer.querySelector(".plus");
//   const inputBox = quantityContainer.querySelector(".input-box");

//   updateButtonStates();

//   quantityContainer.addEventListener("click", handleButtonClick);
//   inputBox.addEventListener("input", handleQuantityChange);

//   function updateButtonStates() {
//     const value = parseInt(inputBox.value);
//     minusBtn.disabled = value <= 1;
//     plusBtn.disabled = value >= parseInt(inputBox.max);
//   }

//   function handleButtonClick(event) {
//     if (event.target.classList.contains("minus")) {
//       decreaseValue();
//     } else if (event.target.classList.contains("plus")) {
//       increaseValue();
//     }
//   }

//   function decreaseValue() {
//     let value = parseInt(inputBox.value);
//     value = isNaN(value) ? 1 : Math.max(value - 1, 1);
//     inputBox.value = value;
//     updateButtonStates();
//     handleQuantityChange();
//   }

//   function increaseValue() {
//     let value = parseInt(inputBox.value);
//     value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
//     inputBox.value = value;
//     updateButtonStates();
//     handleQuantityChange();
//   }

//   function handleQuantityChange() {
//     let value = parseInt(inputBox.value);
//     value = isNaN(value) ? 1 : value;

//     // Execute your code here based on the updated quantity value
//     console.log("Quantity changed:", value);
//   }
// })();

   $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
      });
      $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
      });
});
