const mobileMenuButton = document.querySelector(".mobile_menu_button");
const menuButtonText = document.querySelector("#menu_button_text");
const navlinks = document.querySelector(".navlinks");

function toggleNavlinks() {
  mobileMenuButton.classList.toggle("active");
  navlinks.classList.toggle("active");
  document.querySelector(".text_div").classList.toggle("active");
  document.getElementById("header").classList.toggle("active");
  if (menuButtonText.textContent === "Menu |") {
    menuButtonText.textContent = "Close |";
    menuButtonText.style.color = "#ffffff";
    document.querySelector(".logo_div").style.color = "#ffffff";
  } else {
    menuButtonText.textContent = "Menu |";
    menuButtonText.style.color = "#000000";
    document.querySelector(".logo_div").style.color = "#000000";
  }
}
