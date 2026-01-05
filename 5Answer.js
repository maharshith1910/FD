//5. Write a function updateProductInfo that extracts the id and name properties from a product object and then adds new properties (discount and inStock) using the spread operator    .


function updateProductInfo(product){
    const{id,name} = product
    const updateProduct = {
        ...{id,name},
        discount : 10,
        inStock : true
    }
    return updateProduct
}

const product = {
    id : 101,
    name :"Pen"
}

const updateProduct = updateProductInfo(product)

document.getElementById("result").innerHTML = 
    "Id :"+updateProduct.id+"<br>"+
    "Name :"+updateProduct.name+"<br>"+
    "Discount :"+updateProduct.discount+"<br>"+
    "In Stock? "+updateProduct.inStock;