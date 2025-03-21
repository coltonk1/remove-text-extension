function hide_text() {
    const targetElements = document.querySelectorAll("button, a, select, label");

    targetElements.forEach((element) => {
        element.style.setProperty("color", "transparent", "important");
    });

    const style = document.createElement("style");
    style.innerHTML = `
        input::placeholder, textarea::placeholder {
            color: transparent !important;
        }
    `;
    document.head.appendChild(style);
}

hide_text();
