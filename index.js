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
