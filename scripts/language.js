function setText(id, value) {

    const element = document.getElementById(id);

    if (element) {
        element.textContent = value;
    }

}

// Função que renderiza dinamicamente a navbar geral superior
function renderNavigation(lang) {

    setText(
        "nav-about",
        content[lang].navAbout
    );

    setText(
        "nav-portfolio",
        content[lang].navPortfolio
    );

    setText(
        "nav-contact",
        content[lang].navContact
    );

}

// Função que renderiza dinamicamente a parte essencial do landing com a minha foto, a zona Hero.
function renderHero(lang) {

    setText(
        "hero-subtitle",
        content[lang].heroSubtitle
    );

    setText(
        "hero-first-name",
        content[lang].heroFirstName
    );

    setText(
        "hero-last-name",
        content[lang].heroLastName
    );

    setText(
        "hero-description",
        content[lang].heroDescription
    );

    const image =
        document.getElementById(
            "hero-image"
        );

    if (image) {

        image.src =
            content[lang].heroImage;

        image.alt =
            content[lang].heroImageAlt;
    }

}

// Função que renderiza dinamicamente a parte da Experiência
function renderExperience(lang) {

    const container =
        document.getElementById(
            "experience-container"
        );

    if (!container) return;

    container.innerHTML = "";

    content[lang].experience
        .forEach(item => {

            container.innerHTML += `

                <div class="timeline-item">

                    <div class="timeline-year">
                        ${item.year}
                    </div>

                    <div class="timeline-title">
                        ${item.title}
                    </div>

                    <div class="timeline-description">
                        ${item.description}
                    </div>

                </div>

            `;

        });

}

// Função que renderiza dinamicamente a parte das Skills
function renderSkills(lang) {

    const container =
        document.getElementById(
            "skills-container"
        );

    if (!container) return;

    container.innerHTML = "";

    content[lang].skills
        .forEach(skill => {

            container.innerHTML += `

                <div class="skill">

                    ${skill}

                </div>

            `;

        });

}

function loadLanguage(lang) {

    setText(
        "about-title",
        content[lang].aboutTitle
    );

    setText(
        "about-text-1",
        content[lang].aboutText1
    );

    setText(
        "about-text-2",
        content[lang].aboutText2
    );

    setText(
        "about-text-3",
        content[lang].aboutText3
    );

    setText(
        "aboutExpYears",
        content[lang].aboutExpYears
    );

    setText(
        "aboutExpYearsDescription",
        content[lang].aboutExpYearsDescription
    );

    setText(
        "aboutExpProjects",
        content[lang].aboutExpProjects
    );

    setText(
        "aboutExpProjectsDescription",
        content[lang].aboutExpProjectsDescription
    );

    setText(
        "aboutExpChannels",
        content[lang].aboutExpChannels
    );

    setText(
        "aboutExpChannelsDescription",
        content[lang].aboutExpChannelsDescription
    );

    setText(
        "experience-title",
        content[lang].experienceTitle
    );

    setText(
        "skills-title",
        content[lang].skillsTitle
    );
    
    renderNavigation(lang);
    renderHero(lang);
    renderExperience(lang);
    renderSkills(lang);

    document
        .querySelectorAll(".lang-option")
        .forEach(el =>
            el.classList.remove("active")
    );

    document
        .querySelector(
            `[data-lang="${lang}"]`
        )
    ?.classList.add("active");
    
    localStorage.setItem(
        "language",
        lang
    );

    if (typeof updatePortfolio === "function") {
        updatePortfolio(lang);
    }

    if (typeof updateContact === "function") {
        updateContact(lang);
    }
}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const savedLanguage =
            localStorage.getItem("language") || "pt";

        loadLanguage(savedLanguage);

    }
);
