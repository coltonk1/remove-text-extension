function hide_text() {
    const targetElements = document.querySelectorAll("*");

    targetElements.forEach((element) => {
        element.style.setProperty("color", "transparent", "important");
    });
}

hide_text();
