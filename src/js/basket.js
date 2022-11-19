

 $('section .cards_list').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
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

const total_price_f = () => {
    total_price.textContent = '0'
    document.querySelectorAll('td.total .price').forEach((total_item , index) => {
    if(index <= total.length - 1) {
        total_price.textContent = +total_price.textContent + +total_item.textContent
    }
})
}
let  counter = document.querySelectorAll('.count .counter') ,
total_price = document.querySelector('.total_price .price') ,
result = document.querySelectorAll('.count .counter .result') ,
total = document.querySelectorAll('td.total .price') ,
price = document.querySelectorAll('.price .price') 


    document.querySelectorAll('tr').forEach(item => {
        item.addEventListener('click', (e) => {
            let target = e.target 
            if(target.classList.contains('delete')) {
                item.remove()
                total_price_f()
            }
        })
    })
total_price_f()

counter.forEach((item , index) => {
    item.addEventListener('click' , (e) => {      
        let target = e.target
            if(target.classList.contains('plus')) {
                result[index].textContent = +result[index].textContent +  1
                total[index].textContent=(price[index].textContent * result[index].textContent).toFixed(2)

               total_price_f()
                
            }
            if(target.classList.contains('minus')) {
                 total_price.textContent = '0'
                if(+result[index].textContent - 1 !== 0) {
                    result[index].textContent = +result[index].textContent -  1

                    total[index].textContent=(price[index].textContent * result[index].textContent).toFixed(2)

                   total_price_f()
                   
                }
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