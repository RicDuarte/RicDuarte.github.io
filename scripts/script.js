function scrollCarousel(id, amount) {

  const carousel = document.getElementById(id);

  carousel.scrollBy({
    left: amount,
    behavior: 'smooth'
  });

}

/* YOUTUBE API */

let players = {};

function onYouTubeIframeAPIReady() {

  document.querySelectorAll('.card').forEach((card, index) => {

    const playButton = card.querySelector('.play-btn');

    const imageContainer = card.querySelector('.card-image');

    const overlay = card.querySelector('.overlay');

    const image = imageContainer.querySelector('img');

    const playerId = `youtube-player-${index}`;

    playButton.addEventListener('click', () => {

      /* PLAYER DOESN'T EXIST */

      if (!players[playerId]) {

        image.style.display = 'none';

        const playerDiv = document.createElement('div');

        playerDiv.id = playerId;

        imageContainer.appendChild(playerDiv);

        players[playerId] = new YT.Player(playerId, {

          height: '185',

          width: '100%',

          videoId: 'ddT_eY7Mlg4',

          playerVars: {

            autoplay: 1,
            controls: 1,
            rel: 0

          },

          events: {

            onReady: (event) => {

              event.target.playVideo();

              playButton.innerHTML = '❚❚';

              overlay.classList.add('video-active');

            },

            onStateChange: (event) => {

              /* PLAYING */

              if (event.data === YT.PlayerState.PLAYING) {

                playButton.innerHTML = '❚❚';

              }

              /* PAUSED */

              if (event.data === YT.PlayerState.PAUSED) {

                playButton.innerHTML = '▶';

              }

              /* ENDED */

              if (event.data === YT.PlayerState.ENDED) {

                playButton.innerHTML = '▶';

              }

            }

          }

        });

      }

      /* PLAYER EXISTS */

      else {

        const state = players[playerId].getPlayerState();

        /* PLAYING -> PAUSE */

        if (state === YT.PlayerState.PLAYING) {

          players[playerId].pauseVideo();

        }

        /* PAUSED -> PLAY */

        else {

          players[playerId].playVideo();

        }

      }

    });

  });

}

/* LOAD YOUTUBE API */

const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";

document.body.appendChild(tag);
