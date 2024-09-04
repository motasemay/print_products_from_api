async function getProduct(){
    const response=await fetch("https://dummyjson.com/products");
    const elements=await response.json();

    document.querySelector(".productsName").innerHTML+=elements.products.map(function(product){
        return `<h2>${product.title}</h2>
        <img src="${product.thumbnail}">`
    }).join('');
}

getProduct();