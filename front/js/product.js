fetch(`http://localhost:3000/api/products?id=107fb5b75607497b96722bda5b504926`).then(res => res.json()).then(data => {
    const container = document.getElementById(`items`)
    data.data(product => {
        console.log(product)
        const productel = `<article>
        <div class="item__img">
          <img src="${product.imageUrl}" alt="${product.altTxt}"> 
        </div>
        <div class="item__content">

          <div class="item__content__titlePrice">
            <h1 id="title">${product.name}</h1>
            <p>Prix : <span id="price">${product.price}</span>€</p>
          </div>

          <div class="item__content__description">
            <p class="item__content__description__title">Description:</p>
            <p id="description">${product.description}</p>
          </div>

          <div class="item__content__settings">
            <div class="item__content__settings__color">
              <label for="color-select">Chose your color:</label>
              <select name="color-select" id="colors">
                  <option value="">--Please, select a color --</option>
                  <option value="vert">green</option>
                  <option value="blanc">white</option>
              </select>
            </div>

            <div class="item__content__settings__quantity">
              <label for="itemQuantity">Number of articles (1-100):</label>
              <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">
            </div>
          </div>

          <div class="item__content__addButton">
            <button id="addToCart">Add to cart</button>
          </div>

        </div>
      </article>`;
    });
})
console.log(data)