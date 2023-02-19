//! Adding Values to inputs in the form
let cart = localStorage.getItem("totalCost");
cart = parseInt(cart);

let cartItems = localStorage.getItem("cartNumbers");
cartItems = parseInt(cartItems);

let cartProd = localStorage.getItem("productsInCart");
document.getElementById("crtvlue").value = cart;
document.getElementById("itemsname").value = cartProd;
document.getElementById("numit").value = cartItems;


//! Form Submit to Google Sheet
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  fetch(
    "https://script.google.com/macros/s/AKfycbwWLi0-WYU29TWYJL7M20n7pgYecaFPZuB-BHNr-B-9d1i7I236rE9HvwlsMw2acVgE/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      findingSeller();
    });
});

//! Remove Form
function findingSeller() {
  document.getElementById("form-wrapper").remove();
  loadingGif();
}

//! Find Seller

function loadingGif() {
  document.querySelector(".middle-head").innerHTML = "Order Details";

  let cartItems = localStorage.getItem("cartNumbers");
  cartItems = parseInt(cartItems);

  let cart = localStorage.getItem("totalCost");
  cart = parseInt(cart);

  let findSellerDiv = document.querySelector(".find-seller");
  let randint = Math.floor((Math.random() * 10) + 1);
  findSellerDiv.innerHTML += `
  <div class="orderdtl">
        <h4>Order ID: #21DFR20${randint}</h4>
        <p>Order Total: ₹<span class="order-total" style="margin-left: 0.2rem;">${cart}.00</span></p>
        <p>Total items: <span class="total-items">${cartItems}</span></p>
        <div class="finding">
          <div class="magwrap" id="mgif">
            <h4>Finding Best Sellers in Your Area</h4>
            <img src="https://cdn.dribbble.com/users/64038/screenshots/1150606/search.gif" alt="" style="max-width: 100%; display: block; margin: 0 auto;">
          </div>
      </div>
  </div>
  `;

  setTimeout(() => {
    availableSellers();
  }, 8000);
}

//! Available Sellers
function availableSellers() {
  document.querySelector(".middle-head").innerHTML = "Available Sellers";

  let cartItems = localStorage.getItem("cartNumbers");
  cartItems = parseInt(cartItems);

  let cart = localStorage.getItem("totalCost");
  cart = parseInt(cart);

  let findSellerDiv = document.querySelector(".find-seller");
  let randint = Math.floor((Math.random() * 10) + 1);
  findSellerDiv.innerHTML = `
  <div class="orderdtl">
        <h4>Order ID: #21DFR20${randint}</h4>
        <p>
          Order Total: ₹<span class="order-total" style="margin-left: 0.2rem"
            >${cart}.00</span
          >
        </p>
        <p>Total items: <span class="total-items">${cartItems}</span></p>
        <div class="finding">
          <h4 class="avs">Available Sellers</h4>
          <div class="as-head">
            <span>Seller Name</span>
            <span>Delivery Time & Fee</span>
            <span>Rating</span>
          </div>
          <div class="as-head mayank">
            <span style="color: black">Mayank Khatri</span>
            <span>Tommorow 11AM (Free)</span>
            <span
              style="display: flex; align-items: center"
              ><ion-icon name="star" style="color: #fef200"></ion-icon
              >4.82</span
            >
          </div>
          <a href="payments.html" class="choose">Choose Seller</a>
        </div>
      </div>
  `;
}
