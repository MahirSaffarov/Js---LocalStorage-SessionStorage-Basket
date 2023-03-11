let toBasket = document.querySelectorAll(".add");

let basket = [];

if (JSON.parse(localStorage.getItem("basket")) != null) {
    basket = JSON.parse(localStorage.getItem("basket"))
}

toBasket.forEach(element => {
    element.addEventListener("click", function (e) {
        e.preventDefault();

        let productImg = this.closest(".card").firstElementChild.getAttribute("src");
        let productName = this.parentNode.firstElementChild.innerHTML;
        let productPrice = parseInt(this.previousElementSibling.innerHTML)
        let productId = parseInt(this.closest(".card").getAttribute("data-id"));


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

        localStorage.setItem("basket", JSON.stringify(basket));
        getCount(basket)

    })
});
getCount(basket)
function getCount(arr) {
    let count = 0;
    arr.forEach(element => {
        count += element.count
    });
    let p = document.querySelector("p").innerHTML = count
}