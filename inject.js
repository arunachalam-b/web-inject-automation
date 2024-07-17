const actions = [
  {
    id: "input1",
    action: "type",
    text: "Welcome to my automation script",
  },
  {
    id: "btn1",
    action: "click",
  },
];

function alertUser() {
  alert("Hello. This is a alert triggered by a script");
}

document.addEventListener("DOMContentLoaded", function () {
  var button = document.createElement("button");
  button.textContent = "C";
  button.className = "intercom-button";

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function runScript() {
    for (const action of actions) {
      if (action.action === "click") {
        document.getElementById(action.id).click();
      } else if (action.action === "type") {
        document.getElementById(action.id).value = action.text;
      }
      await delay(100);
    }
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
