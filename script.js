document.addEventListener("DOMContentLoaded", useScript);

function useScript() {
    const button = document.querySelector(".btn");
    if (!button) return;

    const buttonRect = button.getBoundingClientRect();
    const centerX = window.innerWidth / 2 - buttonRect.width / 2;
    const centerY = window.innerHeight / 2 - buttonRect.height / 2;

    button.style.position = "fixed";
    button.style.left = `${centerX}px`;
    button.style.top = `${centerY}px`;

    button.addEventListener("mousemove", (event) => {
        const btnRect = button.getBoundingClientRect();
        const maxDist = 150;
        const mousePos = getMouseCoords(event, btnRect);

        const Xdiff = mousePos.x > 0 ? -maxDist : maxDist;
        const Ydiff = mousePos.y > 0 ? -maxDist : maxDist;
    
        const {newX, newY} = calculateNewPosition(Xdiff, Ydiff, btnRect);

        button.style.left = `${newX}px`;
        button.style.top = `${newY}px`;
    })
    button.addEventListener("click", () => (alert("Победа!")));
}

function getMouseCoords(event, btnRect) {
    return {
        x: event.clientX - (btnRect.left + window.scrollX + btnRect.width / 2),
        y: event.clientY - (btnRect.top + window.scrollY + btnRect.height / 2)
    };
}

function calculateNewPosition(Xdiff, Ydiff, btnRect) {
    let newX = btnRect.left + Xdiff + window.scrollX;
    let newY = btnRect.top + Ydiff + window.scrollY;

    newX = Math.max(0, Math.min(newX, window.innerWidth - btnRect.width));
    newY = Math.max(0,Math.min(newY, window.innerHeight - btnRect.height));
    
    return {newX, newY};
}