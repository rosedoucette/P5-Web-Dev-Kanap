const cart = JSON.parse(localStorage.getItem("cart") || "[]")
const container = document.getElementById(`cart__items`)
cart.forEach(product => {
    const productel = `<article class="cart__item" data-id="${product._id}" data-color="${product.colors}">
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