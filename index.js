const buyButtons = document.querySelectorAll('.buy-now-button');
const toastElement = document.getElementById('toast');
const cartIcon = document.getElementById('cart-icon')
function showToast(message){

    toastElement.textContent = message;
    toastElement.classList.add("show");

    setTimeout(() => {

        toastElement.classList.remove("show");
    
    }, 3000);


}



buyButtons.forEach(button =>{

    button.addEventListener("click", () =>{
        button.textContent = "Added to the cart!"
        showToast("Product added to cart successfully!");

        console.log("button clicked");
        button.disabled = true;

        cartIcon.classList.add('shake-cart')



        setTimeout(() => {
            cartIcon.classList.remove('shake-cart')
            },500);
        




    });

});

