function scrollCarousel(id, amount) {

  const carousel = document.getElementById(id);

  carousel.scrollBy({
    left: amount,
    behavior: 'smooth'
  });

}

/* PLAY BUTTON */

document.addEventListener('DOMContentLoaded', () => {

  const playButtons = document.querySelectorAll('.play-btn');

  playButtons.forEach(button => {

    button.addEventListener('click', () => {

      window.open(
        'https://www.youtube.com/watch?v=69XoA7a0Gqs',
        '_blank'
      );

    });

  });

});
