function scrollCarousel(id, amount) {

  const carousel = document.getElementById(id);

  carousel.scrollBy({
    left: amount,
    behavior: 'smooth'
  });

}

function toggleMobileMenu() {

    const nav =
        document.querySelector("nav");

    if (!nav) return;

    nav.classList.toggle(
        "mobile-open"
    );

    const button =
        nav.querySelector(
            ".mobile-menu-button"
        );

    if (!button) return;

    button.textContent =
        nav.classList.contains(
            "mobile-open"
        )
        ? "✕"
        : "☰";

}
