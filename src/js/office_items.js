document.addEventListener('DOMContentLoaded' , async () => {

    var itemsCount = 300;
    var itemsOnPage = 10;

    var pagination1 = new Pagination({
        container: document.getElementById("pagination-1")
    });
    pagination1.make(itemsCount, itemsOnPage);



function filterData( min  , max , types ='' , new_t , recommend_t) {
    cards_list.innerHTML = ''
    let newArr = data
    .filter(({price}) => +price <= +max && +price >= +min)

    if(types && types.length > 0) {
        newArr = newArr.filter(({type}) => types.includes(type) )
    }
    if(new_t && recommend_t) {
        newArr = newArr.filter(({isRecommend ,isNew}) => isNew === new_t || isRecommend === recommend_t)
    }
    else if(new_t) {
        newArr = newArr.filter(({isNew}) => isNew === new_t)
    }

    else if(recommend_t) {
        newArr = newArr.filter(({isRecommend}) => isRecommend === recommend_t)
    }

    newArr.forEach(element => {
        cards_list.innerHTML+=
        `
        <a href="product.html">
        <div data-type=${element.type} class="card ${element.isRecommend  ? 'recommend' : null}
        ${element.isNew ? 'new' : null}">
            <img src="./src/images/icon/heart-outline.svg" alt="favorite">
            <img src=${element.img} alt="product">
            <div class="products_title">
                ${element.name}
            </div>
            <div class="price">
                ${element.price} Azn
            </div>
            <button>Səbətə at</button>
        </div>
        </a>
        `
    });
    return newArr
}

const sortData = (sortType , sorting_data) => {
    cards_list.innerHTML = ''
    let newArr = []
    if(sorting_data.length > 0) {
        newArr = sorting_data
    } else {
        newArr = data
    }
    if(sortType == 'ascending') {
        newArr = newArr.sort((a , b) => a.price - b.price )
    }
    else if(sortType == 'descending') {
        newArr = newArr.sort((a , b) => b.price - a.price )
    }

    newArr.forEach(element => {
        cards_list.innerHTML+=
        `
        <div data-type=${element.type} class="card ${element.isRecommend  ? 'recommend' : null}
        ${element.isNew ? 'new' : null}">
            <img src="./src/images/icon/heart-outline.svg" alt="favorite">
            <img src=${element.img} alt="product">
            <div class="products_title">
                ${element.name}
            </div>
            <div class="price">
                ${element.price} Azn
            </div>
            <button>Səbətə at</button>
        </div>
        `
    });
}

    $( function() {
        $( ".price_range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( "#start" ).val(ui.values[0])
            $( "#end" ).val(ui.values[1])
        }
        });
        $( "#start" ).val($( ".price_range" ).slider( "values", 0 ))
        $( "#end" ).val($( ".price_range" ).slider( "values", 1 ))
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


    let cards_list = document.querySelector('.cards_list') ,
    start_range = document.querySelector('#start'),
    end_range = document.querySelector('#end') ,
    filter_submit = document.querySelector('.filter_submit') ,
    new_t = document.querySelectorAll('.products_types .type input')[0] ,
    recommend_t = document.querySelectorAll('.products_types .type input')[1] ,
    category_list = document.querySelectorAll('.category_list .item input') ,
    sort_cost = document.querySelectorAll('.sort_types .type select')[1]


    const data = await fetch('http://127.0.0.1:5500/src/products.json', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => data.products)

    

    data.forEach(element => {
        cards_list.innerHTML+=
        `
        <a href="product.html">
        <div data-type=${element.type} class="card ${element.isRecommend  ? 'recommend' : null}
        ${element.isNew ? 'new' : null}">
            <img src="./src/images/icon/heart-outline.svg" alt="favorite">
            <img src=${element.img} alt="product">
            <div class="products_title">
                ${element.name}
            </div>
            <div class="price">
                ${element.price} Azn
            </div>
            <button>Səbətə at</button>
        </div>
        </a>
        `
    });
    let newArr = []
    filter_submit.addEventListener('click' , () => {
        let types = []
        category_list.forEach(item => {
                if(item.checked) {
                    types.push(item.value )
                } 
        })
       newArr =  filterData(start_range.value ,end_range.value ,
         types, new_t.checked , recommend_t.checked )
    })

    sort_cost.addEventListener('change' , (e) => {
        sortData(e.target.value , newArr)
    })

})







