/* EMAILJS */
(function () {
  emailjs.init("8mU7P_X9ophUnY3uW");
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_oubno0f",
    "template_uq2wfou",
    this
  ).then(
    () => {
      alert("Message sent successfully!");
      this.reset();
    },
    () => {
      alert("Something went wrong. Please try again.");
    }
  );
});

/* THEME TOGGLE */
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀︎";
});

/* AI-LIKE CONTACT UX */
const message = document.getElementById("message");
const hint = document.getElementById("aiHint");

message.addEventListener("input", () => {
  const length = message.value.length;
  if (length < 20) hint.textContent = "Tell us a bit more about your goals.";
  else if (length < 50) hint.textContent = "Good — what problem are you solving?";
  else hint.textContent = "Perfect. We have enough context.";
});
