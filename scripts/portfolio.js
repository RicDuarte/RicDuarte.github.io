let currentFilters = {

    platform: "all",

    role: "all",

    type: "all",

    search: ""

};

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
    
    updatePortfolioFilters(lang);
    renderPortfolio();
}

function updatePortfolioFilters(lang) {

    const t =
        portfolioTranslations[lang];

    document.getElementById(
        "filter-platform-title"
    ).textContent =
        t.platform;

    document.getElementById(
        "filter-role-title"
    ).textContent =
        t.role;

    document.getElementById(
        "filter-content-title"
    ).textContent =
        t.content;

    document.getElementById(
        "platform-all-chip"
    ).textContent =
        t.all;

    document.getElementById(
        "role-all-chip"
    ).textContent =
        t.all;

    document.getElementById(
        "type-all-chip"
    ).textContent =
        t.all;

    document
        .querySelectorAll(
            '[data-filter-type="role"]'
        )
        .forEach(chip => {

            switch (
                chip.dataset.value
            ) {

                case "Tradução":

                    chip.textContent =
                        t.translation;

                    break;

                case "Tradução MTPE":

                    chip.textContent =
                        t.translationMTPE;

                    break;

                case "Revisão":

                    chip.textContent =
                        t.review;

                    break;

                case "Revisão MTPE":

                    chip.textContent =
                        t.reviewMTPE;

                    break;

                case "Metadata - Tradução":

                    chip.textContent =
                        t.metadataTranslation;

                    break;

                case "Metadata - Revisão":

                    chip.textContent =
                        t.metadataReview;

                    break;

            }

        });

    document
        .querySelectorAll(
            '[data-filter-type="type"]'
        )
        .forEach(chip => {

            if (
                t[chip.dataset.value]
            ) {

                chip.textContent =
                    t[chip.dataset.value];

            }

        });

    document
        .querySelectorAll(
            '[data-filter-type="platform"]'
        )
        .forEach(chip => {

            switch (
                chip.dataset.value
            ) {

                case "Canais de TV":

                    chip.textContent =
                        t.tvChannels;

                    break;

                case "Outros":

                    chip.textContent =
                        t.others;

                    break;

            }

        });

    const button =
        document.getElementById(
            "filters-button"
        );

    if (button) {

        const isOpen =
            filtersPanel?.classList.contains(
                "open"
            );

        button.textContent =
            `${t.filtersButton} ${
                isOpen
                    ? "▲"
                    : "▼"
            }`;

    }

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

        let visibleProjects = 0;

        portfolioContent.projects[year]
            .filter(project => {

                if (
                    currentFilters.platform !== "all" &&
                    project.platform !==
                    currentFilters.platform
                ) {
                
                    return false;
                
                }
                
                if (
                    currentFilters.role !== "all" &&
                    project.role !==
                    currentFilters.role
                ) {
                
                    return false;
                
                }
                if (
                    currentFilters.type !== "all" &&
                    project.type !==
                    currentFilters.type
                ) {
                
                    return false;
                
                }
                if (

                    currentFilters.search !== "" &&
                
                    !project.title
                        .toLowerCase()
                        .includes(
                            currentFilters.search
                                .toLowerCase()
                        )
                
                ) {
                
                    return false;
                
                }

                visibleProjects++;

                return true;

            })
            .forEach(project => {

                carousel.innerHTML += `

                    <div
                        class="card"
                        data-video="${project.video}"
                        data-image="${project.image}">

                        <div class="card-image">

                            <img
                                src="${project.image}"
                                alt="${project.title}">

                        </div>

                        <div class="overlay">

                            <div class="top-row">

                                <div
                                    class="play-btn"
                                    onclick="playVideo(this)">
                                    ▶
                                </div>

                                <div class="meta">

                                    <div class="age">
                                        ${project.age}
                                    </div>

                                    <div class="type">

                                        ${portfolioTranslations[
                                            localStorage.getItem(
                                                "language"
                                            ) || "pt"
                                        ][project.type]}

                                    </div>

                                </div>

                            </div>

                            <div class="genres">

                                ${project.genres
                                    .map(
                                        genre =>
                                        `<div class="genre">${
                                            portfolioTranslations[
                                                localStorage.getItem(
                                                    "language"
                                                ) || "pt"
                                            ][genre]
                                        }</div>`
                                    )
                                    .join("")
                                }

                            </div>

                            <div class="project-title">

                                ${project.title}

                            </div>

                            <div class="project-platform">

                                ${
                                    localStorage.getItem(
                                        "language"
                                    ) === "en"
                            
                                    ? `${portfolioTranslations.en.availableOn} ${project.platform}`
                            
                                    : `${portfolioTranslations.pt.availableOn} ${
                                        portfolioTranslations.pt.platformPrepositions[
                                            project.platform
                                        ]
                                    } ${project.platform}`
                                }
                                
                            </div>

                            <div class="project-role">
                            
                                ${
                                    portfolioTranslations[
                                        localStorage.getItem(
                                            "language"
                                        ) || "pt"
                                    ][project.role]
                                }
                            
                            </div>

                        </div>

                    </div>

                `;

            });

        if (visibleProjects === 0) {

            section.remove();

        }

    }

}

function playVideo(button) {
    const card =
        button.closest(".card");

    const imageContainer =
        card.querySelector(
            ".card-image"
        );

    const iframe =
        imageContainer.querySelector(
            "iframe"
        );

    /* FECHAR O TRAILER ATUAL */

    if (iframe) {

        imageContainer.innerHTML = `

            <img
                src="${card.dataset.image}"
                alt="">

        `;

        button.textContent = "▶";
        
        card.classList.remove(
            "video-playing"
        );

        return;

    }

    let videoUrl =
        card.dataset.video;

    if (
        videoUrl.includes(
            "youtube.com/watch?v="
        )
    ) {

        videoUrl =
            videoUrl.replace(
                "watch?v=",
                "embed/"
            );

    }

    /* FECHAR TODOS OS OUTROS TRAILERS */

    document
        .querySelectorAll(".card")
        .forEach(card => {

            const iframe =
                card.querySelector(
                    "iframe"
                );

            if (!iframe) return;

            card.querySelector(
                ".card-image"
            ).innerHTML = `

                <img
                    src="${card.dataset.image}"
                    alt="">

            `;

            card.querySelector(
                ".play-btn"
            ).textContent = "▶";

            card.classList.remove(
                "video-playing"
            );

        });

    /* ABRIR NOVO TRAILER */
    
    card.classList.add(
        "video-playing"
    );
    
    imageContainer.innerHTML = `

        <iframe
            width="100%"
            height="220"
            src="${videoUrl}?autoplay=1"
            allow="autoplay; encrypted-media"
            allowfullscreen>
        </iframe>

    `;


    button.textContent = "■";

}

renderPortfolio();

const filtersButton =
    document.getElementById(
        "filters-button"
    );

const filtersPanel =
    document.getElementById(
        "filters-panel"
    );

filtersButton?.addEventListener(
    "click",
    () => {

        filtersPanel.classList.toggle(
            "open"
        );

        const lang =
            localStorage.getItem(
                "language"
            ) || "pt";

        const label =
            portfolioTranslations[
                lang
            ].filtersButton;

        filtersButton.textContent =
            `${label} ${
                filtersPanel.classList.contains(
                    "open"
                )
                ? "▲"
                : "▼"
            }`;

    }
);

document
    .querySelectorAll(
        '[data-filter-type="platform"]'
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        '[data-filter-type="platform"]'
                    )
                    .forEach(chip =>
                        chip.classList.remove(
                            "active"
                        )
                    );

                button.classList.add(
                    "active"
                );

                currentFilters.platform =
                    button.dataset.value;

                renderPortfolio();

            }
        );

    });

document
    .querySelectorAll(
        '[data-filter-type="role"]'
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        '[data-filter-type="role"]'
                    )
                    .forEach(chip =>
                        chip.classList.remove(
                            "active"
                        )
                    );

                button.classList.add(
                    "active"
                );

                currentFilters.role =
                    button.dataset.value;

                renderPortfolio();

            }
        );

    });

document
    .querySelectorAll(
        '[data-filter-type="type"]'
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        '[data-filter-type="type"]'
                    )
                    .forEach(chip =>
                        chip.classList.remove(
                            "active"
                        )
                    );

                button.classList.add(
                    "active"
                );

                currentFilters.type =
                    button.dataset.value;

                renderPortfolio();

            }
        );

    });

const titleSearch =
    document.getElementById(
        "title-search"
    );

titleSearch?.addEventListener(
    "input",
    () => {

        currentFilters.search =
            titleSearch.value;

        renderPortfolio();

    }
);
