const cart = JSON.parse(localStorage.getItem("cart") || "[]")
const container = document.getElementById(`cart__items`)
cart.forEach(product => {
    const productel = `<article class="cart__item" data-id="${product._id}" data-color="${product.color}">
            <div class="cart__item__img">
                <img src="${product.imageUrl}" alt="${product.altTxt}">
            </div>
            <div class="cart__item__content">
                <div class="cart__item__content__description">
                    <h2>${product.name}</h2>
                    <p>${product.color}</p>
                    <p>€${product.price}</p>
                </div>
                <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                        <p> Quantity: </p>
                        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                        <p class="deleteItem">Delete</p>
                    </div>
                </div>
            </div>
        </article>`;
    container.innerHTML += productel
});

var orderButton = document.getElementById('order')
orderButton.addEventListener('click', function (event) {
    const button = document.getElementById('order')
    if ('click') {
        alert("Your order has been submitted!")
        return
    }
})


var itemQuantity = document.getElementsByClassName('itemQuantity')
for (let i = 0; i < itemQuantity.length; i += 1) {
    itemQuantity[i].addEventListener('change', myFunction);
}
var cartTotal = Array.from(document.getElementsByClassName('cart__price')) 
cartTotal.forEach (function (total){ total.addEventListener('change', myFunction)});

function myFunction(e) {
    const {target} = e 
    console.log (target.value)
    var parent = target.closest('article.cart__item')
    const {id, color} = parent.dataset
    console.log (id, color);

}

//copied from product.js, may not be fully applicable...unless change quantity to price?:
//const productQuantity = Number(document.getElementById('quantity').value)
// if (!productQuantity || Number.isNaN(productQuantity)) {
//     alert("Please add a quantity")
// }
