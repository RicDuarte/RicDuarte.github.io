function scrollCarousel(id, amount) {

  const carousel = document.getElementById(id);

  carousel.scrollBy({
    left: amount,
    behavior: 'smooth'
  });

}

/* VIDEO PLAYER */

document.addEventListener('DOMContentLoaded', () => {

  const playButtons = document.querySelectorAll('.play-btn');

  playButtons.forEach(button => {

    button.addEventListener('click', () => {

      const card = button.closest('.card');

      const imageContainer = card.querySelector('.card-image');

      const overlay = card.querySelector('.overlay');

      let iframe = imageContainer.querySelector('iframe');

      /* VIDEO DOESN'T EXIST */

      if (!iframe) {

        const image = imageContainer.querySelector('img');

        image.style.display = 'none';

        iframe = document.createElement('iframe');

        iframe.src =
          'https://www.youtube.com/embed/ddT_eY7Mlg4?autoplay=1&rel=0';

        iframe.allow =
          'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';

        iframe.allowFullscreen = true;

        iframe.frameBorder = '0';

        imageContainer.appendChild(iframe);

        /* BUTTON */

        button.innerHTML = '❚❚';

        /* ALLOW YOUTUBE CLICKS */

        overlay.classList.add('video-active');

      }

      /* REMOVE VIDEO */

      else {

        iframe.remove();

        const image = imageContainer.querySelector('img');

        image.style.display = 'block';

        button.innerHTML = '▶';

        overlay.classList.remove('video-active');

      }

    });

  });

});
