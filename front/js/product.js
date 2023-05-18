const cart = JSON.parse (localStorage.getItem ("cart") || "[]")

const productId = (new URLSearchParams(window.location.search)).get("id"); //getting the product ID from console.log//
console.log (productId)
let productData = {}
fetch(`http://localhost:3000/api/products/${productId}`).then(res => res.json()).then(product => {
productData = {...product}  
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

  var addItemToCartButton = document.getElementById ('addToCart')
  console.log(addItemToCartButton)
    addItemToCartButton.addEventListener('click', function(event) {
       const productColor = document.getElementById ('colors').value 
       if (!productColor) { //! is like opposite. so if there's no product color selected//
        alert ("Please select a color")
        return 
       }
       const productQuantity = Number(document.getElementById ('quantity').value) //Numbers clarifies that we are changing this info to a number//
       if (!productQuantity || Number.isNaN(productQuantity)) {
        alert ("Please add a quantity")
        return //return tells the code to stop running any further and return/display the message..
       }
        const productMatching = cart.find ((product) => product.id === productId && product.color === productColor)
        if (productMatching) {
            productMatching.quantity += productQuantity 
        }
        else {
            cart.push ({
                ...productData, //pulling down product copy & avoids extra product calls on the following page//
                id:productId, color:productColor, quantity:productQuantity
            })
        }
        localStorage.setItem ("cart", JSON.stringify(cart))
        alert ("Cart updated!")
    })
  

  function updateCartTotal() {
    var cartItemContainer = document.getElementById('cart__items')[0]
  }

})