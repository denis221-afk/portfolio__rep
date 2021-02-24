// const { on } = require("gulp");

$(document).ready(function(){
    $('.slider__inner').slick({
        speed: 300,
        adaptiveHeight: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="../icons/chevron-left-solid.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="../icons/chevron-right-solid.png"></button>',

        responsive:[
            {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                }  
            },
        ]

        
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });


      $('.catalog-iteam__link').each(function(i){
          $(this).on('click', function(e){
              e.preventDefault();
              $('.catalog-iteam__content').eq(i).toggleClass('catalog-iteam__content_active');
              $('.catalog-iteam__list').eq(i).toggleClass('catalog-iteam__list_active');
          })
      })
      $('.catalog-iteam__list-link').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-iteam__content').eq(i).toggleClass('catalog-iteam__content_active');
            $('.catalog-iteam__list').eq(i).toggleClass('catalog-iteam__list_active');
        })
    })



    // modal

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn();
    })

    $('.modal__close').on('click', function() {
      $('.overlay, #consultation').fadeOut();
    });


    $('[data-bay=order]').on('click', function() {
      $('.overlay, #order').fadeIn();
    });


    $('.catalog-iteam__btn').each(function(i){
      $(this).on('click', function(){
        $('#order .modal__descer').text($('.catalog-iteam__subtitle').eq(i).text());
      })
    });





    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');


        $(form).trigger('reset');
      });
      return false;
    });



    $(window).scroll(function(){
      if($(this).scrollTop() > 1600){
        $('.pageup').fadeIn();
      }else{
        $('.pageup').fadeOut();
      }
    })

  });