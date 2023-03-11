let toBasket = document.querySelectorAll(".to-basket");

let basket = [];

if (JSON.parse(localStorage.getItem("basket")) != null) {
    basket = JSON.parse(localStorage.getItem("basket"))
}

toBasket.forEach(element => {
    element.addEventListener("click", function (e) {
        e.preventDefault();

        let productImg = this.closest(".cart").firstElementChild.firstElementChild.getAttribute("src");
        let productName = this.parentNode.previousElementSibling.innerText;
        let productPrice = parseFloat(this.previousElementSibling.innerText)
        let productId = parseInt(this.closest(".cart").getAttribute("data-id"));

        let existProduct = basket.find(m => m.id == productId);

        if (existProduct != undefined) {
            existProduct.count += 1;
        }
        else {
            basket.push({
                id: productId,
                name: productName,
                price: productPrice,
                image: productImg,
                count: 1
            })
        }
        localStorage.setItem("basket",JSON.stringify(basket));
    })
});