document.addEventListener("DOMContentLoaded", () => {
    const enButton = document.getElementById("en-btn");
    const uaButton = document.getElementById("ua-btn");
    const elementsToTranslate = document.querySelectorAll("[data-en]");

    const switchLanguage = (lang) => {
        elementsToTranslate.forEach((element) => {
            element.textContent = element.getAttribute(`data-${lang}`);
        });
    };

    enButton.addEventListener("click", () => switchLanguage("en"));
    uaButton.addEventListener("click", () => switchLanguage("ua"));
});
