function updatePortfolio(lang) {

    document
        .getElementById("portfolio-subtitle")
        .textContent =
        portfolioContent[lang].heroSubtitle;

    document
        .getElementById("portfolio-title")
        .textContent =
        portfolioContent[lang].heroTitle;

    document
        .getElementById("portfolio-description")
        .textContent =
        portfolioContent[lang].heroDescription;

}

function renderPortfolio() {

    const container =
        document.getElementById(
            "portfolio-container"
        );

    container.innerHTML = "";

    const years =
        Object.keys(
            portfolioContent.projects
        )
        .sort((a, b) => b - a);

    for (const year of years) {

        const section =
            document.createElement(
                "section"
            );

        section.className =
            "year-section";

        section.innerHTML = `

            <h2>${year}</h2>

            <div class="carousel-wrapper">

                <button
                    class="arrow arrow-left"
                    onclick="scrollCarousel('carousel${year}', -1200)">
                    ‹
                </button>

                <div
                    class="carousel"
                    id="carousel${year}">
                </div>

                <button
                    class="arrow arrow-right"
                    onclick="scrollCarousel('carousel${year}', 1200)">
                    ›
                </button>

            </div>

        `;

        container.appendChild(
            section
        );

        const carousel =
            document.getElementById(
                `carousel${year}`
            );

        portfolioContent.projects[year]
        .forEach(project => {

            carousel.innerHTML += `

                <div class="card">

                    <div class="card-image">

                        <img
                            src="${project.image}"
                            alt="${project.title}">

                    </div>

                    <div class="overlay">

                        <div class="top-row">

                        <div class="play-btn" onclick="openVideo('${project.video}')"> ▶ </div>

                            <div class="meta">

                                <div class="age">
                                    ${project.age}
                                </div>

                                <div class="type">
                                    ${project.type}
                                </div>

                            </div>

                        </div>

                        <div class="genres">

                            ${project.genres
                                .map(
                                    genre =>
                                    `<div class="genre">${genre}</div>`
                                )
                                .join("")
                            }

                        </div>

                        <div class="project-title">

                            ${project.title}

                        </div>

                        <div class="project-platform">

                            Disponível na ${project.platform}

                        </div>

                        <div class="project-role">

                            ${project.role}

                        </div>

                    </div>

                </div>

            `;

        });

    }

}

renderPortfolio();
