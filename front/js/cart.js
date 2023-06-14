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
    itemQuantity[i].addEventListener('change', updatePrice);
}

function calculateTotal() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    let total = 0
    cart.forEach(function (item) {
        const { quantity, price } = item
        const subtotal = quantity * price
        total += subtotal
    })
    return total
}

function updatePrice(e) {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    if (e) {
        const { target } = e
        const { value } = target
        var parent = target.closest('input.itemQuantity')
        const { id, color } = parent.dataset;
        const productMatching = cart.find((product) => product.id === id && product.color === color)
        if (productMatching) {
            productMatching.quantity = value
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }
    const cartTotal = calculateTotal()
    const cartQuantity = cart.reduce(function (prev, curr) {
        return prev + curr.quantity
    }, 0)
    document.getElementById('totalQuantity').innerHTML = cartQuantity
    document.getElementById('totalPrice').innerHTML = cartTotal
}
updatePrice()

function refreshPage() {
    window.location.reload(false);
}


//copied from product.js, may not be fully applicable...unless change quantity to price?:
//const productQuantity = Number(document.getElementById('quantity').value)
// if (!productQuantity || Number.isNaN(productQuantity)) {
//     alert("Please add a quantity")
// }
