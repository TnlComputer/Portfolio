const d = document;
const toggleTheme = d.getElementById("toggle-theme");
const toggleIcon = d.getElementById("toggle-icon");
const toggleText = d.getElementById("toggle-text");

const toggleColors = d.getElementById("toggle-colors");

const rootStyles = d.documentElement.style;

toggleTheme.addEventListener("click", () => {
  d.body.classList.toggle("dark");
  if (toggleIcon.src.includes("moon.svg")) {
    toggleIcon.src = "assets/icons/sun.svg";
    toggleText.textContent = "Light Mode";
  } else {
    toggleIcon.src = "assets/icons/moon.svg";
    toggleText.textContent = "Dark Mode";
  }
});

toggleColors.addEventListener("click", (e) => {
  rootStyles.setProperty("--primary-color", e.target.dataset.color);
});
