function loadLanguage(lang) {

    document.getElementById("about-title")
        .textContent = content[lang].aboutTitle;

    document.getElementById("about-text-1")
        .textContent = content[lang].aboutText1;

    document.getElementById("about-text-2")
        .textContent = content[lang].aboutText2;

    document.getElementById("experience-title")
        .textContent = content[lang].experienceTitle;

    document.getElementById("skills-title")
        .textContent = content[lang].skillsTitle;

    localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {

    const savedLanguage =
        localStorage.getItem("language") || "pt";

    loadLanguage(savedLanguage);
});
