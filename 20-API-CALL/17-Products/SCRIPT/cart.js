window.addEventListener("load", () => {
    let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    // console.log("Shopping cart on page load:", shoppingCart[1].title);

    const MainDiv = document.querySelector(".shopping-container");

    shoppingCart.forEach((cartItem)=>{
        const cartItemDiv = document.createElement("div");

        const cartItemImg = document.createElement("img");
        const cartItemTitle = document.createElement("p");
        const cartItemPrice = document.createElement("p");

        const cartContainer = document.createElement("div");

        const cartFontawesome = document.createElement("p");
        const cartFontawesome2 = document.createElement("p");

        cartItemDiv.className = "cart-item";

        cartItemImg.className = "cart-item-img";
        cartItemTitle.className = "cart-item-title";
        cartItemPrice.className = "cart-item-price";
        cartFontawesome.className = "cart-item-fontawesome";
        cartFontawesome2.className = "cart-item-fontawesome2";

        cartContainer.className = "cart-container";

        cartItemImg.src = cartItem.thumbnail;
        cartItemTitle.textContent = cartItem.title;
        cartItemPrice.textContent = `${cartItem.price} $`;
        cartFontawesome.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;
        cartFontawesome2.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;

        cartItemDiv.append(cartItemImg);
        cartItemDiv.append(cartItemTitle);
        cartItemDiv.append(cartItemPrice);

        cartContainer.append(cartFontawesome);
        cartContainer.append(cartFontawesome2);

        cartItemDiv.append(cartContainer);

        MainDiv.append(cartItemDiv);

        const remove = cartItemDiv.querySelector(".cart-item-fontawesome2");
        const buy = cartItemDiv.querySelector(".cart-item-fontawesome");

        remove.addEventListener("click", () => {
            console.log("remove clicked");
        });

        buy.addEventListener("click", () => {
            console.log("buy clicked");
        });
    })

       
    
});
