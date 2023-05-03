const productId = (new URLSearchParams(window.location.search)).get("id"); 
console.log (productId)
fetch(`http://localhost:3000/api/products/${productId}`).then(res => res.json()).then(product => {
  const productImg = document.querySelector (".item__img img")
  productImg.src = product.imageUrl;
  productImg.alt = product.altTxt;
  document.getElementById ('title').innerHTML = product.name;
  document.getElementById ('description').innerHTML = product.description;
  document.getElementById ('price').innerHTML = product.price;
  const colorsElement = document.getElementById ('colors')
  product.colors.forEach(color => {
    const colorElement = `<option value="${color}">${color}</option>`
    colorsElement.innerHTML += colorElement
  });

})