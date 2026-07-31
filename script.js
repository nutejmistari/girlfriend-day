// Happy Girlfriend's Day Script
// ===============================

// Welcome Message
window.onload = function () {
    setTimeout(() => {
        alert("❤️ Welcome! Happy Girlfriend's Day ❤️");
    }, 1000);
};

// Surprise Button
function showSurprise() {

    // Music play
    const music = document.getElementById("bgMusic");
    music.play();

    // Tera existing surprise code
    alert("Happy Girlfriend's Day ❤️");
}
// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-30px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    let position = -30;

    const speed = 2 + Math.random() * 3;

    const animation = setInterval(() => {

        position += speed;

        heart.style.top = position + "px";

        if (position > window.innerHeight) {
            clearInterval(animation);
            heart.remove();
        }

    }, 20);

}

// Create Hearts Every 500ms
setInterval(createHeart, 500);

console.log("Girlfriend Day Website Loaded Successfully ❤️");