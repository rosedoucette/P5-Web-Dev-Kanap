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