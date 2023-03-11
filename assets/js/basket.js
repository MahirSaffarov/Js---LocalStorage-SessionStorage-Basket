let products = document.querySelector(".leftt");

let addedProducts = JSON.parse(localStorage.getItem("basket"));

if (addedProducts != null) {
    addedProducts.forEach(element => {
        let product = document.createElement('div')
        product.classList.add('product')
        products.appendChild(product);
        let imgDiv = document.createElement('div')
        imgDiv.classList.add("img")
        product.appendChild(imgDiv);
        let productImg = document.createElement('img')
        imgDiv.appendChild(productImg);
        productImg.getAttribute("src") = element.image
        let productName = document.createElement('p')
        product.appendChild(productName);
        productName.innerHTML = element.name
        let inputDiv = document.createElement('div')
        inputDiv.classList.add("input")
        product.appendChild(inputDiv);
        let minusSpan = document.createElement('span')
        plusSpan.classList.add("minus")
        inputDiv.appendChild(minusSpan)
        plusSpan.innerHTML = "-"
        let input = document.createElement('input')
        inputDiv.appendChild(input)
        input.value = element.count
        let plusSpan = document.createElement('span')
        plusSpan.classList.add("plus")
        inputDiv.appendChild(plusSpan)
        plusSpan.innerHTML = "+"
        let h5 = document.createElement('h5')
        product.appendChild(h5)
        h5.innerHTML = element.price
        let trashDiv = document.createElement('div')
        trashDiv.classList.add("bin")
        product.appendChild(trashDiv)
        let trashImg = document.createElement('img')
        trashDiv.appendChild(trashImg)
       });
}



















