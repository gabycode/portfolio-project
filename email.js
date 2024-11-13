// Side nav bar appear in all pages
document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    const templateParams = {
      from_name: name,
      to_name: "Gabriella",
      from_email: correo,
      to_email: "gabriellarosario72@gmail.com",
      from_phone: telefono,
      message: mensaje,
    };

    emailjs.send("service_mz43gdb", "template_d4iml9n", templateParams).then(
      function (response) {
        console.log(
          "Correo enviado con éxito!",
          response.status,
          response.text,
          console.log(templateParams)
        );
        alert("¡Mensaje enviado con éxito!");
        event.target.reset();
      },
      function (error) {
        console.log("Error al enviar el correo", error);
        alert("Error al enviar correo, intenta de nuevo.");
      }
    );
  });
