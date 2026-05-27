function scrollCarousel(id, amount) {

  const carousel = document.getElementById(id);

  carousel.scrollBy({
    left: amount,
    behavior: 'smooth'
  });

}
