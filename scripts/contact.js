document
.querySelector(".contact-form")
.addEventListener("submit", sendMessage);

function sendMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("contact-name").value;

    const email =
        document.getElementById("contact-email").value;

    const subject =
        document.getElementById("contact-subject").value;

    const message =
        document.getElementById("contact-message").value;

    emailjs.send(
        "service_1zbdnl1",
        "template_hvnzeju",
        {
            name: name,
            email: email,
            subject: subject,
            message: message
        }
    )

    .then(() => {

        showPopup(
            "Mensagem enviada com sucesso!"
        );

        document
            .querySelector(".contact-form")
            .reset();

    })

    .catch((error) => {
    
        console.error(
            "EMAILJS ERROR:",
            error
        );
    
        alert(
            JSON.stringify(error)
        );
    
    });

}

function showPopup(text) {

    const popup =
        document.getElementById(
            "contact-popup"
        );

    popup.textContent = text;

    popup.classList.add("show");

    setTimeout(() => {

        popup.classList.remove(
            "show"
        );

    }, 3000);

}

function updateContact(lang) {

    document
        .getElementById("contact-title")
        .textContent =
        contactContent[lang].title;

    document
        .getElementById("contact-description")
        .textContent =
        contactContent[lang].description;

}
