(function () {
  emailjs.init("8mU7P_X9ophUnY3uW");
})();

document.getElementById("contact-form")?.addEventListener("submit", function (e) {
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
