function enterWebsite() {
  let name = document.getElementById("username").value.trim();
  if (name === "") {
    alert("Masukkan nama terlebih dahulu!");
    return;
  }
  
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("main-content").style.display = "block";
  
  let greetingText = `Selamat Datang, ${name}!`;
  let greetingElement = document.getElementById("user-greeting");
  
  typeWriter(greetingElement, greetingText, 50);
}

function typeWriter(element, text, speed) {
  element.innerHTML = "";
  let i = 0;
  
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");
  let themeButton = document.querySelector(".theme-toggle");
  themeButton.textContent = document.body.classList.contains("light-mode") ? "🌙" : "🌞";
}

function buyProduct1(url) {
  window.location.href = url;
}

function buyProduct2(url) {
  window.location.href = url;
}

function buyProduct3(url) {
  window.location.href = url;
}

function copyProduct1(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Sukses mengcopy preset!");
  });
}

function copyProduct2(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Sukses mengcopy preset!");
  });
}

function searchProduct() {
  let input = document.getElementById("search").value.toLowerCase();
  let products = document.querySelectorAll(".product");
  
  products.forEach(product => {
    let name = product.getAttribute("data-name").toLowerCase();
    if (name.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

function clearSearch() {
  document.getElementById("search").value = "";
  searchProduct();
}