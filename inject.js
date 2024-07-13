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
});
