
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const menuToggle = document.querySelector(".fa-bars");

  // Toggle the menu visibility
  menuToggle.addEventListener("click", function () {
      menu.classList.toggle("active");
  });

  // Optional: Add actions for other icons
  document.querySelector(".fa-house").addEventListener("click", function () {
      window.location.href = "index.html"; // or your home page
  });

  document.querySelector(".fa-magnifying-glass").addEventListener("click", function () {
      alert("Search function will be added soon!");
  });

  document.querySelector(".fa-user").addEventListener("click", function () {
      window.location.href = "login.html"; // or your user/profile page
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".button.type1");
    button.addEventListener("click", function () {
        alert("បានបន្ថែមមុខទំនិញទៅក្នុងកន្ត្រករួចរាល់!");
        
        // Optional: You can update a cart counter or show a message on the page
        // Example:
        const msg = document.createElement("p");
        msg.textContent = "✓ មុខទំនិញត្រូវបានបន្ថែមទៅក្នុងកន្ត្រក!";
        msg.style.color = "green";
        msg.style.fontFamily = "khmer os content";
        document.querySelector(".des").appendChild(msg);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.querySelector('.add-to-cart');
    const productName = document.querySelector('.des1 h2').textContent;
    const productPrice = document.querySelector('.des1 p').textContent;

    addToCartBtn.addEventListener('click', function () {
      alert(`${productName} added to cart at ${productPrice}`);
      // You can also log it or do more actions like updating a cart array
      console.log({
        name: productName,
        price: productPrice
      });
    });
  });

  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const login = document.getElementById('login');

    // Reset error message
    login.textContent = '';

    if (username === '' || password === '') {
        login.textContent = 'papa';
      return;
    }

    if (password.length < 6) {
        login.textContent = '123456.';
      return;
    }

    // If validation passes
    alert(`Welcome, ${username}!`);
    // You can redirect or do something else here
  });