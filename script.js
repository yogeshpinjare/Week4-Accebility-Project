
const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

// Mobile navigation
menuBtn.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("show");

  menuBtn.setAttribute("aria-expanded", isOpen);
  menuBtn.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
});

// Close mobile menu after selecting a link
navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("show");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open navigation menu");
  });
});

// Accessibility font controls
let fontSize = 16;

const increaseFont = document.getElementById("increaseFont");
const decreaseFont = document.getElementById("decreaseFont");
const resetBtn = document.getElementById("resetBtn");
const contrastBtn = document.getElementById("contrastBtn");
const accessMessage = document.getElementById("accessMessage");

function updateFontSize() {
  document.documentElement.style.fontSize = fontSize + "px";
}

increaseFont.addEventListener("click", () => {
  if (fontSize < 22) {
    fontSize += 1;
    updateFontSize();
    accessMessage.textContent = "Text size increased.";
  } else {
    accessMessage.textContent = "Maximum text size reached.";
  }
});

decreaseFont.addEventListener("click", () => {
  if (fontSize > 12) {
    fontSize -= 1;
    updateFontSize();
    accessMessage.textContent = "Text size decreased.";
  } else {
    accessMessage.textContent = "Minimum text size reached.";
  }
});

// High contrast mode
contrastBtn.addEventListener("click", () => {
  const enabled = document.body.classList.toggle("high-contrast");

  contrastBtn.setAttribute("aria-pressed", enabled);
  accessMessage.textContent = enabled
    ? "High contrast mode enabled."
    : "High contrast mode disabled.";
});

// Reset accessibility settings
resetBtn.addEventListener("click", () => {
  fontSize = 16;
  updateFontSize();

  document.body.classList.remove("high-contrast");
  contrastBtn.setAttribute("aria-pressed", "false");

  accessMessage.textContent = "Accessibility settings reset.";
});

// Contact form validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const name = document.getElementById("name").value.trim();

  if (!name) {
    formMessage.textContent = "Please enter your name.";
    return;
  }

  formMessage.textContent =
    "Thank you! Your message has been validated successfully.";

  contactForm.reset();
});
