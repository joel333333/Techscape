function togglemenu() {
    document.getElementById("navbar").classList.toggle("show");
}

// JavaScript for Interactive Features

// Update Market Value
document.getElementById("updateValueBtn").addEventListener("click", function () {
    const marketValueElement = document.getElementById("marketValue");
    const newValue = "$1,500,000"; // New market value
    marketValueElement.textContent = newValue;
    alert("Market value updated to " + newValue);
  });
  
  // Add New Product
  document.getElementById("addProductBtn").addEventListener("click", function () {
    const productList = document.getElementById("productList");
    const newProduct = prompt("Enter the name and price of the new product (e.g., Product 4 - $40):");
    if (newProduct) {
      const newProductItem = document.createElement("li");
      newProductItem.textContent = newProduct;
      productList.appendChild(newProductItem);
    }
  });