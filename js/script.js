$('.reviews-cont').slick({
    arrows:false,
    autoplay:true,
    pauseOnFocus:false,
    pauseOnHover:true,
   
})

$(document).ready(function(){
    $('.menu-toggle').click(function(){
      $('.header_nav').toggleClass('active')
    })
  })