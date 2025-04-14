// Toggle mode terang/gelap
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("toggle-mode");

  button.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});
