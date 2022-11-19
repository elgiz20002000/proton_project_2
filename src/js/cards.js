const card_list = document.querySelectorAll('.cards_list')

card_list.forEach(item => {
    if(item.innerHTML) {
        item.addEventListener('click' , (e) => {
            let target = e.target
            if(target.getAttribute('alt') === 'favorite') {
                if(target.getAttribute('src') == './src/images/icon/heart-outline.svg'){
                    target.setAttribute('src' , './src/images/icon/heart-filled.svg')
                } else {
                    target.setAttribute('src' , './src/images/icon/heart-outline.svg')
                }
            }
        })
    }
})
