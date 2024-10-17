document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    });
});

(function () {
  emailjs.init("bwwSwF-PGCgP7YbpF");
})();

emailjs.init("bwwSwF-PGCgP7YbpF");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Recopila los datos del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Define los parámetros que se enviarán a EmailJS
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    // Envía el correo usando EmailJS
    emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", templateParams).then(
      function (response) {
        console.log(
          "Correo enviado con éxito!",
          response.status,
          response.text
        );
      },
      function (error) {
        console.log("Error al enviar el correo", error);
      }
    );
  });
