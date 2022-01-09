// window.addEventListener('DOMContentLoaded', function() {
//     let openBtn = document.querySelector('.open'),
//         product = document.querySelectorAll('.product'),
//         button = document.querySelectorAll('button')

//     function openCart(){
//         let cart = document.createElement('div'),
//             field = document.createElement('div'),
//             heading = document.createElement('h2'),
//             closeBtn = document.createElement('button')

//         cart.classList.add('cart')    
//         field.classList.add('cart-field')
//         closeBtn.classList.add('close')

//         heading.textContent = 'В нашей корзине'
//         closeBtn.textContent = 'Закрыть'

//         document.body.appendChild(cart)
//         cart.appendChild(heading)
//         cart.appendChild(field)
//         cart.appendChild(closeBtn)
//     }
//     openCart()

//     let cart = document.querySelector('.cart'),
//         closeBtn = document.querySelector('.close'),
//         field = document.querySelector('.cart-field')

//     openBtn.addEventListener('click', function(){
//         cart.style.display = 'block'
//     })

//     closeBtn.addEventListener('click', function(){
//         cart.style.display = 'none'
//     })

//     button.forEach((item, i) => {
//         item.addEventListener('click', function(){
//             let clonedItem = product[i].cloneNode(true),
//                 clonedButton = clonedItem.querySelector('button')
            
//             clonedButton.remove();
//             field.appendChild(clonedItem)
//             product[i].remove();
//         })
//     });
// })

window.addEventListener('DOMContentLoaded', function() {
    let products = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('button'),
        openBtn = document.querySelector('.open');
    
    function openCart(){
        let cart = document.createElement('div'),
            theme = document.createElement('h2'),
            fieldOfProducts = document.createElement('div'),
            closeBtn = document.createElement('button');
        
        cart.classList.add('cart')
        fieldOfProducts.classList.add('cart-field')
        closeBtn.classList.add('close')

        theme.textContent = 'Products'
        closeBtn.textContent = 'Close'

        document.body.appendChild(cart)
        cart.appendChild(theme)
        cart.appendChild(fieldOfProducts)
        cart.appendChild(closeBtn)
        
    }
    openCart()

    let cart = document.querySelector('.cart'),
        cartOfField = document.querySelector('.cart-field'),
        closeButton = document.querySelector('.close');

    openBtn.addEventListener('click', () => {
        cart.style.display = 'block'
    })

    closeButton.addEventListener('click', () => {
        cart.style.display = 'none'
    })

    buttons.forEach((item, i) => {
        item.addEventListener('click', () => {
            let clonedItem = products[i].cloneNode(true)
            let clonedButton = clonedItem.querySelector('button')
            clonedButton.remove()
            cartOfField.appendChild(clonedItem)
            products[i].remove()
        })
    })
})