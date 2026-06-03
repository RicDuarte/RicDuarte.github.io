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

    console.log(
        portfolioContent.projects
    );

}

renderPortfolio();
