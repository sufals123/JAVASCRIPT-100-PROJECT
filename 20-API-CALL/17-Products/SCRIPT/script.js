let container = document.querySelector(".products-container");

async function fetchListProduct() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        data.products.forEach((item) => {
            const createDivElement = document.createElement("div");
            const productTitle = document.createElement("p");
            const productImg = document.createElement("img");
            const productDescription = document.createElement("p");
            const productPrice = document.createElement("p");
            const buyProductButton = document.createElement("button");
            const sellProductButton = document.createElement("button");
            const buttonContainer = document.createElement("div");

            createDivElement.className = "products-item";
            productTitle.className = "products-item-title";
            productImg.className = "products-item-img";
            productDescription.className = "products-item-description";
            productPrice.className = "products-item-price";
            buttonContainer.className = "button-container";

            buyProductButton.className = "products-item-button";
            sellProductButton.className = "products-sell-item-button";

            productTitle.textContent = item.title;
            productImg.src = item.thumbnail;
            productDescription.textContent = item.description;
            productPrice.textContent = `${item.price} $`;
            buyProductButton.textContent = "BUY";
            sellProductButton.textContent = "SELL";

            container.append(createDivElement);
            createDivElement.append(productTitle);
            createDivElement.append(productImg);
            createDivElement.append(productDescription);
            createDivElement.append(productPrice);
            createDivElement.append(buttonContainer);

            buttonContainer.append(buyProductButton);
            buttonContainer.append(sellProductButton);

            // Add event listeners to buy and sell buttons
            buyProductButton.addEventListener("click", () => handleBuy(item));
            sellProductButton.addEventListener("click", () => handleSell(item));
        });
    } catch (e) {
        console.log(e);
    }
}

function handleBuy(product) {
    console.log("Buy button clicked for:", product);
    // Implement buy functionality

    // Add product to shopping cart
    
    let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    shoppingCart.push(product);

    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    console.log(shoppingCart);
    console.log(shoppingCart);

}

// Function to handle sell event
function handleSell(product) {
    console.log("Sell button clicked for:", product.title);
    // Implement sell functionality
}

fetchListProduct();
