function setText(id, value) {

    const element = document.getElementById(id);

    if (element) {
        element.textContent = value;
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
    
    renderExperience(lang);
    
    localStorage.setItem(
        "language",
        lang
    );
}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const savedLanguage =
            localStorage.getItem("language") || "pt";

        loadLanguage(savedLanguage);

    }
);
