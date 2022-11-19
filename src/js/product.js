

 $('section .cards_list').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          } ,
      {
        breakpoint: 976,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
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

  $(".xzoom").xzoom({

    // top, left, right, bottom, inside, lens, fullscreen, #ID
    position: 'lens', 
  
    // inside, fullscreen
    mposition: 'fullscreen', 
  
    // In the HTML structure, this option gives an ability to output xzoom element, to the end of the document body or relative to the parent element of main source image.
    rootOutput: false,
  
    // x/y offset
    Xoffset: 0,
    Yoffset: 0,
  
    // Fade in effect, when zoom is opening.
    fadeIn: true,
  
    // Fade transition effect, when switching images by clicking on thumbnails.
    fadeTrans: true,
  
    // Fade out effect, when zoom is closing.
    fadeOut: true,
  
    // Enable smooth effects
    smooth: true,
  
    // Smooth move effect of the big zoomed image in the zoom output window. 
    // The higher value will make movement smoother.
    smoothZoomMove: 3,
  
    // Smooth move effect of lens.
    smoothLensMove: 1,
  
    // Smooth move effect of scale.
    smoothScale: 6,
  
    // From -1 to 1, that means -100% till 100% scale
    defaultScale: 0, 
  
    // Scale on mouse scroll.
    scroll: true,
  
    // Tint color. Color must be provided in format like "#color". 
    tint: false,
  
    // Tint opacity from 0 to 1.
    tintOpacity: 0.5,
  
    // Lens color. Color must be provided in format like "#color". 
    lens: true,
  
    // Lens opacity from 0 to 1.
    lensOpacity: 0.5,
  
    // 'box', 'circle'
    lensShape: 'circle', 
  
    // Custom width of zoom window in pixels.
    zoomWidth: '100',
  
    // Custom height of zoom window in pixels.
    zoomHeight: '100',
  
    // Class name for source "div" container.
    sourceClass: 'xzoom-source',
  
    // Class name for loading "div" container that appear before zoom opens, when image is still loading.
    loadingClass: 'xzoom-loading',
  
    // Class name for lens "div".
    lensClass: 'xzoom-lens',
  
    // Class name for zoom window(div).
    zoomClass: 'xzoom-preview',
  
    // Class name that will be added to active thumbnail image.
    activeClass: 'xactive',
  
    // With this option you can make a selection action on thumbnail by hover mouse point on it.
    hover: false,
  
    // Adaptive functionality.
    adaptive: true,
  
    // When selected position "inside" and this option is set to true, the lens direction of moving will be reversed.
    lensReverse: false,
  
    // Same as lensReverse, but only available when adaptive is true.
    adaptiveReverse: false,
  
    // Lens will collide and not go out of main image borders. This option is always false for position "lens".
    lensCollision: true,
  
    //  Output title/caption of the image, in the zoom output window.
    title: false,
  
    // Class name for caption "div" container.
    titleClass: 'xzoom-caption',
  
    // Zoom image output as background
    bg: true 
    
  });

let product_images = document.querySelectorAll('a .xzoom-gallery')

product_images.forEach(item => {
    item.addEventListener('click' , (e) => {
        e.preventDefault()
        if(!item.classList.contains('xactive')) {
            product_images.forEach(item => item.classList.remove('xactive'))
            document.querySelector('.xzoom').setAttribute('src' , item.getAttribute('src'))
            document.querySelector('.xzoom').setAttribute('xoriginal' , item.getAttribute('src'))
            item.classList.add('xactive')
        }
    })
})


 

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


let  counter = document.querySelector('.product_counter .counter') ,
result = counter.querySelector('.count') 

counter.addEventListener('click' , (e) => {      
        let target = e.target
            if(target.classList.contains('plus')) {
                result.textContent = +result.textContent +  1
            }
            if(target.classList.contains('minus')) {
                if(+result.textContent - 1 !== 0) {
                    result.textContent = +result.textContent -  1                   
                }
            }
    })