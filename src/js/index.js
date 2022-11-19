

$('.slider_wrapper').slick({
    arrows:true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.brends .list').slick({
    dots:true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      } ,
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  
    ]
  });


  let search_btn = document.querySelector('.search_btn')

let search_overlay =  document.querySelector('.search_overlay') ,
exit_btn_search = document.querySelector('.search_overlay .exit_btn')




exit_btn_search.addEventListener('click' , (e) => {
    search_overlay.classList.remove('active')
})

search_btn.addEventListener('click' , (e) => {
    search_overlay.classList.add('active')
})

let menu_btn = document.querySelector('.menu_btn') ,
exit_btn_menu = document.querySelector('.menu_overlay .exit_btn')



menu_btn.addEventListener('click' , () => {
    document.querySelector('.menu_overlay').classList.add('active')
})

exit_btn_menu.addEventListener('click' , (e) => {
    document.querySelector('.menu_overlay').classList.remove('active')
})