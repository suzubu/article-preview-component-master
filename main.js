const shareBtn = document.querySelector(".share-btn-wrapper > .share-btn");
const shareMenu = document.querySelector("#share-menu");
const closeBtn = document.querySelector(".share-menu .share-btn");

function openMenu() {
  shareMenu.hidden = false;
  shareBtn.setAttribute("aria-expanded", "true");
  const firstFocusable = shareMenu.querySelector("a, button");
  (firstFocusable || shareMenu).focus();
}

function closeMenu() {
  shareMenu.hidden = true;
  shareBtn.setAttribute("aria-expanded", "false");
  shareBtn.focus();
}

if (shareBtn && shareMenu) {
  shareBtn.addEventListener("click", () => {
    if (shareMenu.hidden) openMenu();
    else closeMenu();
  });

  shareMenu.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

if (closeBtn && shareMenu) {
  closeBtn.addEventListener("click", closeMenu);
}
