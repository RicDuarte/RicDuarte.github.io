function scrollCarousel(id, amount) {

  const carousel = document.getElementById(id);

  carousel.scrollBy({
    left: amount,
    behavior: 'smooth'
  });

}

/* PLAY TRAILER INSIDE CARD */

document.addEventListener('DOMContentLoaded', () => {

  const playButtons = document.querySelectorAll('.play-btn');

  playButtons.forEach(button => {

    button.addEventListener('click', () => {

      const card = button.closest('.card');

      const imageContainer = card.querySelector('.card-image');

      /* Prevent duplicate iframe */

      if (imageContainer.querySelector('iframe')) {
        return;
      }

      imageContainer.innerHTML = `
        <iframe
          width="100%"
          height="185"
          src="https://www.youtube.com/embed/ddT_eY7Mlg4?autoplay=1&mute=0&rel=0"
          title="Trailer"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowfullscreen>
        </iframe>
      `;

    });

  });

});
