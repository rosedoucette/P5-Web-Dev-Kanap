const productId = (new URLSearchParams(window.location.search)).get("id"); //getting the product ID from console.log//
console.log (productId)
fetch(`http://localhost:3000/api/products/${productId}`).then(res => res.json()).then(product => {
  const productImg = document.querySelector (".item__img img")
  productImg.src = product.imageUrl;
  productImg.alt = product.altTxt;
  document.getElementById ('title').innerHTML = product.name; //changing element info//
  document.getElementById ('description').innerHTML = product.description;
  document.getElementById ('price').innerHTML = product.price;
  const colorsElement = document.getElementById ('colors') //colors//
  product.colors.forEach(color => { 
    const colorElement = `<option value="${color}">${color}</option>` //parses the color options into the dropdown//
    colorsElement.innerHTML += colorElement //changes the color options 
  });

  //below is my attempt at adding products to the cart//
  //might work, you don't know//

  var addItemToCartButton = document.getElementsByClassName ('item__content__addButton')
  console.log(addItemToCartButton)
  for (var i = 0; i > addItemToCartButton; i++) {
    var button = addItemToCartButton[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.add ()
        updateCartTotal()
    })
  }

  function updateCartTotal() {
    var cartItemContainer = document.getElementById('cart__items')[0]
  }

})