// Side nav bar appear in all pages
document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    });
});

// Suggestions box form

const suggestions = [];
document.getElementById("suggestions-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const nameSuggestion = document.getElementById("nombre-sugerencias").value;
  const messageSuggestion = document.getElementById(
    "mensaje-sugerencias"
  ).value;

  const newSuggestion = {
    name: nameSuggestion,
    message: messageSuggestion,
  };

  suggestions.push(newSuggestion);

  displaySuggestion();
  document.getElementById("suggestions-form").reset();
  console.log(suggestions);
});

const displaySuggestion = () => {
  const suggestionsBox = document.getElementById("suggestions-box");

  suggestionsBox.innerHTML = "";

  suggestions.forEach((suggestion) => {
    const suggestionDiv = document.createElement("div");
    suggestionDiv.classList.add("suggestion-entry");

    suggestionDiv.innerHTML = `
    <img src="./assets/user.jpg" class="user-img"/>
      <div>
        <strong>${suggestion.name}</strong> <br>
        <p>${suggestion.message}</p>
      </div>
    `;

    suggestionsBox.appendChild(suggestionDiv);
  });
};

// Contact form - EmailJS integration
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
      },
      function (error) {
        console.log("Error al enviar el correo", error);
      }
    );
  });
