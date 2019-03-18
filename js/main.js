const questionElement = document.getElementsByClassName("faq__question")[0];
const arrows = document.querySelectorAll(".faq__questions span img");
const answers = document.getElementsByClassName("question__wrapper");
const menuCartTotal = document.querySelector(".shopping-cart h5");
const cartList = document.querySelector(".cart__list");
const removeButton = document.querySelector(".item__main a");

//Adding slideToggle functionality to the FAQ section
for(let i = 0; i < arrows.length; i++) {
    $(arrows[i]).click((evt) => {
        $(answers[i]).slideToggle();
    });
};

//Function to set nav menu cart total to cartList length
function updateCartLength() {
    menuCartTotal.innerHTML = cartList.children.length;
}

//Updating shopping cart total on page load
window.onload = updateCartLength();

//Remove Item on click
removeButton.addEventListener("click", (evt) => {
    const element = evt.target.parentElement.parentElement.parentElement;
    cartList.removeChild(element);
    console.log(cartList.children);
});

//Checking of cart is empty if so adding message
removeButton.addEventListener("click", () => {
    if( cartList.children.length == 0 ) {
        const h3 = document.createElement("H3");
        h3.setAttribute("class", "cart__alert");
        h3.innerHTML = "Cart is empty";
        document.querySelector(".cart__empty").appendChild(h3);
    } else if( cartList.children.length > 0 ) {
        cartList.removeChild(h3);
    }
    updateCartLength();
});



