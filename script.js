const deployButton = document.getElementById("deployBtn");
const message = document.getElementById("message");

deployButton.addEventListener("click", () => {
  message.textContent = "JavaScript is working!";
  deployButton.textContent = "Deployment Ready";
});
