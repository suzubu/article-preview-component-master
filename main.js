const shareBtns = document.querySelectorAll(".share-btn-wrapper .share-btn");
const shareMenu = document.querySelector("#share-menu");
const shareUrl = encodeURIComponent("https://yourwebsite.com");
const shareTitle = encodeURIComponent(
  "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
);

shareBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isOpen = !shareMenu.hidden;
    shareMenu.hidden = isOpen;
    shareBtns.forEach((b) => b.setAttribute("aria-expanded", String(!isOpen)));
  });
});
