// Side nav bar appear in all pages
document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    });
});

// Suggestions box form
const url =
  "https://portfolio-project-e155f-default-rtdb.firebaseio.com/comentario.json";

const getAllComments = () => {
  fetch(url, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      const suggestions = data;
      let Objects = Object.values(suggestions);
      const suggestionsBox = document.getElementById("suggestions-box");
      Objects.forEach((suggestion) => {
        console.log(suggestion, "suggestion");
        const suggestionElement = document.createElement("div");
        suggestionElement.classList.add("suggestion-entry");
        suggestionElement.innerHTML = `
          <img src="./assets/user.jpg" class="user-img"/>
          <div>
            <strong>${suggestion.nombre}</strong> <br>
            <p>${suggestion.mensaje}</p>
          </div>
            `;
        suggestionsBox.appendChild(suggestionElement);
      });
    });
};

const suggestions = [];
document.getElementById("suggestions-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const nameSuggestion = document.getElementById("nombre-sugerencias").value;
  const messageSuggestion = document.getElementById(
    "mensaje-sugerencias"
  ).value;

  const newSuggestion = {
    nombre: nameSuggestion,
    mensaje: messageSuggestion,
  };

  suggestions.push(newSuggestion);

  fetch(url, {
    method: "POST",
    body: JSON.stringify(newSuggestion),
    headers: {
      "Content-Type": "application/json",
    },
  });
  getAllComments();
  document.getElementById("suggestions-form").reset();
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
