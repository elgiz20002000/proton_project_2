
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

let order_type = document.querySelectorAll('.order_types .type')

order_type.forEach(item => {
    item.addEventListener('click' , () => {
        if(!item.classList.contains('active_type')) {
            console.log('hello');
            order_type.forEach(item => item.classList.remove('active_type'))
            item.classList.add('active_type')
        }
    })
})


let tbody = document.querySelector('table tbody') ,
orders = [
    {
    photo:"src/Products/1616657590a-210_3.kWD0g.jpg",
    name:'Üzlük' ,
    count:2,
    color:'-',
    price:3.00,
    date:new Date('25 Nov 2021').toUTCString(),
    status:'Çatdırılıb'
    } ,
    {
        photo:"src/Products/1616657590a-210_3.kWD0g.jpg",
        name:'Üzlük' ,
        count:4,
        color:'-',
        price:3.00,
        date:new Date('25 Nov 2022').toUTCString(),
        status:'Çatdırılıb'
    } ,
    {
        photo:"src/Products/1616657590a-210_3.kWD0g.jpg",
        name:'Üzlük' ,
        count:4,
        color:'-',
        price:3.00,
        date:new Date('25 Nov 2019').toUTCString(),
        status:'Yoldadır'
    }
]

const addOrders = (sort_time , sort_status) => {
    tbody.innerHTML  = ''
    let newArr = []
  

    switch(sort_status) {
        case 'all':
            newArr = orders
            break
        case 'delievered':
            newArr = orders.filter((a) => (a.status == 'Çatdırılıb'))
            break
        
        case 'on_way':
            newArr = orders.filter((a) => (a.status == 'Yoldadır'))
            break
            
        
        default:
    }


    switch(sort_time) {
        case 'new_to_old':
            newArr = newArr.sort((a,b) => (new Date(b.date) - new Date(a.date)))
            break
        case 'old_to_new':
            newArr = newArr.sort((a,b) => (new Date(a.date) - new Date(b.date)))
            break
        
        default:
    }
    newArr.forEach(item => {
        tbody.innerHTML += 
        `<tr>
            <td class="photo">
                <span>Şəkil</span>
                <img src=${item.photo} alt="product">
            </td>
            <td class="name">
                <span>Məhsulun adı</span>
                ${item.name}
            </td>
            <td class="count">
                <span>Say</span>
                ${item.count}
            </td>
            <td class="color">
                <span>Rəng</span>
                ${item.color}
            </td>
            <td class="price">
                <span>Qiymət</span>
                ${item.price} Azn
            </td>
            <td class="history">
                <span>Tarix</span>
                ${item.date}
            </td>
            <td class="status">
                <span>Status</span>
                <div class="status_bar">
                ${item.status}
                </div>
            </td>
            <td class="reorder">
                <button>
                    Təkrar sifariş
                </button>
            </td>
        </tr>`
    })
}


const history_filter = document.querySelectorAll('.sort_types .type select')[0] ,
status_filter = document.querySelectorAll('.sort_types .type select')[1]
addOrders(history_filter.value , status_filter.value)


history_filter.addEventListener('change' , () => addOrders(history_filter.value , status_filter.value))

status_filter.addEventListener('change' , () => addOrders(history_filter.value , status_filter.value))


