document.addEventListener("DOMContentLoaded", function () {
  var button = document.createElement("button");
  button.textContent = "C";
  button.className = "intercom-button";

  function runScript() {
    console.log("Started running script");
  }

  button.addEventListener("click", runScript);

  document.body.appendChild(button);

  addStyles();
});

function addStyles() {
  var style = document.createElement("style");

  style.innerHTML = `
    .intercom-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #4CAF50;
      border: none;
      color: white;
      padding: 15px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      cursor: pointer;
      width: 50px;
      height: 50px;
      border-radius: 50%; /* Make it circular */
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add a shadow */
    }
  `;

  document.head.appendChild(style);
}
