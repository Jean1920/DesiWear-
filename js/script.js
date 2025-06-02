document.addEventListener("DOMContentLoaded", function () {
  const cartCounter = document.getElementById("cart-count");
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCartCount() {
    cartCounter.textContent = cartItems.length;
  }

  const buttons = document.querySelectorAll(".add-to-cart");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = {
        name: btn.dataset.name,
        price: btn.dataset.price,
      };
      cartItems.push(item);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      updateCartCount();
      alert(`${item.name} added to cart.`);
    });
  });

  updateCartCount();

  const cartDisplay = document.getElementById("cart-items");
  if (cartDisplay) {
    if (cartItems.length === 0) {
      cartDisplay.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      cartItems.forEach((item) => {
        const div = document.createElement("div");
        div.innerHTML = `<p>${item.name} - ${item.price}</p>`;
        cartDisplay.appendChild(div);
      });
    }
  }

  const checkoutForm = document.getElementById("checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Order placed successfully!");
      localStorage.removeItem("cart");
      location.reload();
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartCountSpan = document.getElementById("cart-count");
  let itemCount = 0;

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      itemCount++;
      cartCountSpan.textContent = itemCount;
      console.log(`Added ${this.dataset.name} to cart`);
    });
  });
});
