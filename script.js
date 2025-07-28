<nav>
  <a href="index.html">🏠 Home</a> |
  <a href="pantai.html">🏖️ Pantai</a> |
  <a href="laut.html">🌊 Laut</a>
</nav>
window.onload = function () {
  console.log("Website Barbie siap!");
};

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".barbie-img");

  images.forEach(img => {
    img.addEventListener("click", function (e) {
      const sparkle = document.createElement("div");
      sparkle.textContent = "✨";
      sparkle.style.position = "absolute";
      sparkle.style.left = e.pageX + "px";
      sparkle.style.top = e.pageY + "px";
      sparkle.style.fontSize = "2rem";
      sparkle.style.pointerEvents = "none";
      sparkle.style.animation = "fadeOut 1s ease-out forwards";
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 1000);
    });
  });
});
