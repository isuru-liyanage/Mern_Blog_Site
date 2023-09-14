document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

  // Create HTML elements using JavaScript
  const h1 = document.createElement("h1");
  h1.textContent = "Contact Us";
  body.appendChild(h1);

  const form = document.createElement("form");
  form.id = "contactForm";
  body.appendChild(form);

  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email:";
  form.appendChild(emailLabel);

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "email";
  emailInput.name = "email";
  emailInput.required = true;
  form.appendChild(emailInput);

  const phoneLabel = document.createElement("label");
  phoneLabel.textContent = "Contact Number:";
  form.appendChild(phoneLabel);

  const phoneInput = document.createElement("input");
  phoneInput.type = "tel";
  phoneInput.id = "phone";
  phoneInput.name = "phone";
  phoneInput.required = true;
  form.appendChild(phoneInput);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  form.appendChild(submitButton);

  const confirmationMessage = document.createElement("div");
  confirmationMessage.id = "confirmationMessage";
  confirmationMessage.style.display = "none";
  confirmationMessage.innerHTML = "<p>Thank you for contacting us! We will get back to you shortly.</p>";
  body.appendChild(confirmationMessage);

  form.addEventListener("submit", function (e) {
      e.preventDefault();

      // You can add additional validation here if needed
      const email = emailInput.value;
      const phone = phoneInput.value;

      // Perform server-side processing or send data as needed
      // For this example, we'll just show a confirmation message
      confirmationMessage.style.display = "block";

      // You may also want to clear the form fields after submission
      form.reset();
  });
});
