const shareBtn = document.querySelector(".share-btn-wrapper > .share-btn");
const shareMenu = document.querySelector("#share-menu");
const closeBtn = document.querySelector(".share-menu .share-btn");

function getFirstFocusable(root) {
  return root.querySelector(
    'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
  );
}

function openMenu() {
  shareMenu.hidden = false;
  shareBtn.setAttribute("aria-expanded", "true");

  const firstFocusable = getFirstFocusable(shareMenu);
  if (firstFocusable) {
    firstFocusable.focus({ preventScroll: true });
    return;
  }

  const hadTabindex = shareMenu.hasAttribute("tabindex");
  const prevTabindex = shareMenu.getAttribute("tabindex");
  shareMenu.setAttribute("tabindex", "-1");
  shareMenu.focus({ preventScroll: true });

  if (hadTabindex) {
    shareMenu.setAttribute("tabindex", prevTabindex);
  } else {
    shareMenu.removeAttribute("tabindex");
  }
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
