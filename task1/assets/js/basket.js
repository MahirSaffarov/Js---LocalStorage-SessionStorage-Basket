"use strict"
let tableBody = document.querySelector("tbody")
let products = JSON.parse(localStorage.getItem("basket"))
if (products != null) {
    products.forEach(element => {
        tableBody.innerHTML +=
            `
        <tr>
        <td><img src="${element.image}" alt="" style="width: 100px; height: 100px;"></td>
        <td>${element.name}</td>
        <td>${element.price}</td>
        <td>
        <span class="minus" style="font-size: 28px; color: red; cursor:pointer">-</span>
        <input type="number" value="${element.count}" min="1" style="width: 40px; height: 20px;">
        <span class="plus" style="font-size: 28px; cursor:pointer">+</span></td>
        <td><i class="fa-solid fa-trash del" style="color: red; cursor:pointer"></i></td>
        <td style="display:none">${element.id}</td>
        </tr>
        `
        let total = document.querySelector(".total-price");
        total.innerHTML = +total.innerHTML + +element.price * +element.count
        
    });
}
if(products!= null){
    getBasketCount(products)
}
function getBasketCount(arr){
    let count = 0;
    for (const item of arr) {
        count+= item.count
    }
    document.querySelector(".count").innerHTML = count
}
function increaseCount(arr){
    let plus = document.querySelectorAll(".plus")
    plus.forEach(buttons => {
        buttons.addEventListener("click", function(){
            for (const item of arr) {
                let currentCount = item.count;
                let newCount = currentCount;
                newCount + 1;
                item.count = newCount;
            }
            localStorage.setItem("basket", JSON.stringify(products))
        })
    });
}