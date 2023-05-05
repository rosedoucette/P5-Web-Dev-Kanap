fetch(`http://localhost:3000/api/products`).then(res => res.json()).then(data => {
    const container = document.getElementById(`items`)
    data.forEach(product => {
        console.log(product)
        const productel = `<a href="./product.html?id=${product._id}">
        <article>
          <img src="${product.imageUrl}" alt="${product.altTxt}">
          <h3 class="productName">${product.name}</h3>
          <p class="productDescription">${product.description}</p>
        </article>
      </a>`;
        container.innerHTML += productel
    });
})
console.log(data)



//below is the item configuration for the cart products..

fetch(`http://localhost:3000/api/products`).then(res => res.json()).then(data => {
    const container = document.getElementById(`items`)
    data.forEach(product => {
        console.log(product)
        const productel = `<article class="cart__item" data-id="${product._id}" data-color="${product.colors}">
                <div class="cart__item__img">
                  <img src="${product.imageUrl}" alt="${product.altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${product.name}</h2>
                    <p>${color}</p>
                    <p>${product.price}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Quantity : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Delete</p>
                    </div>
                  </div>
                </div>
              </article>`;
    });
})