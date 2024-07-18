async function fetchActions(actionsUrl) {
  const response = await fetch(actionsUrl);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

function alertUser() {
  alert("Hello. This is a alert triggered by a script");
}

function getActionsUrl() {
  const scripts = document.getElementsByTagName("script");
  for (const script of scripts) {
    if (!script?.src) {
      continue;
    }

    const urlParams = new URLSearchParams(script?.src?.split("?")[1]);
    const actionsUrl = urlParams?.get("actions_url");
    if (!actionsUrl) {
      continue;
    }

    return actionsUrl;
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  const actionsUrl = getActionsUrl();
  const actions = await fetchActions(actionsUrl);
  var button = document.createElement("button");
  button.textContent = "🤖";
  button.className = "intercom-button";

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function runScript() {
    for (const action of actions) {
      const { querySelector, action: userAction, text, waitTime } = action;
      switch (userAction) {
        case "click": {
          document.querySelector(querySelector).click();
          break;
        }
        case "type": {
          document.querySelector(querySelector).value = action.text;
          break;
        }
        default: {
          console.log("No actions match");
          break;
        }
      }
      await delay(waitTime || 100);
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
