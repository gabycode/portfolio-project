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

    const name = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;

    const templateParams = {
      name: name,
      telefono: telefono,
      correo: correo,
    };

    emailjs.send("service_mz43gdb", "Ttemplate_d4iml9n", templateParams).then(
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
