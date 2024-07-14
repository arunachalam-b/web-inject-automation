document.addEventListener("DOMContentLoaded", function () {
  // Create button element
  var button = document.createElement("button");
  button.textContent = "C";
  button.className = "intercom-button";

  // Create modal elements
  var modal = document.createElement("div");
  modal.className = "modal";
  var modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  modal.appendChild(modalContent);

  // List of items
  var items = [
    { name: "Item 1" },
    { name: "Item 2" },
    { name: "Item 3" },
    { name: "Item 4" },
    { name: "Item 5" },
  ];

  // Function to open the modal
  function openModal() {
    modal.style.display = "block";
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Function to handle item click
  function onItemClick(item) {
    alert("You clicked on: " + item.name);
    closeModal();
  }

  // Add click event listener to open modal
  button.addEventListener("click", openModal);

  // Build and append items to modal content
  var ul = document.createElement("ul");
  items.forEach(function (item) {
    var li = document.createElement("li");
    li.textContent = item.name;
    li.addEventListener("click", function () {
      onItemClick(item);
    });
    ul.appendChild(li);
  });
  modalContent.appendChild(ul);

  // Append button and modal to the body
  document.body.appendChild(button);
  document.body.appendChild(modal);

  // Close modal when clicking outside of it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      closeModal();
    }
  });

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

    .modal {
      display: none;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0,0,0,0.4);
    }

    .modal-content {
      background-color: #fefefe;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
      max-width: 400px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }

    .modal-content ul {
      list-style-type: none;
      padding: 0;
    }

    .modal-content ul li {
      padding: 10px 0;
      cursor: pointer;
    }

    .modal-content ul li:hover {
      background-color: #f0f0f0;
    }
  `;

  document.head.appendChild(style);
}
