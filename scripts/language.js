function setText(id, value) {

    const element = document.getElementById(id);

    if (element) {
        element.textContent = value;
    }

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
        "about-text-2",
        content[lang].aboutText3
    );

    setText(
        "experience-title",
        content[lang].experienceTitle
    );

    setText(
        "skills-title",
        content[lang].skillsTitle
    );

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
