const form = document.querySelector("#login-form");
const passwordInput = document.querySelector("#passwordInput");
const usernameInput = document.querySelector("#usernameInput");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  const result = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }).then((response) => response.json());

  if (result.message.success) {
    window.location.href = "/home.html"; // Điều hướng đến trang chủ
  } else if (result.message.error) {
    alert("Login failed");
  } else {
    alert("Unexpected response from server");
  }
  console.log(result.message);
});

// SignUp
const SignupForm = document.querySelector("#signup-form");
const SignupUsernameInput = document.querySelector("#SignupUsernameInput");
const SignupPasswordInput = document.querySelector("#SignupPasswordInput");
const SignupConfirmationInput = document.querySelector(
  "#SignupConfirmPasswordInput"
);

SignupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = SignupUsernameInput.value;
  const password = SignupPasswordInput.value;
  const confirmpassword = SignupConfirmationInput.value;

  const result = await fetch("http://localhost:8080/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, confirmpassword }),
  }).then((response) => response.json());

  if (result.message.success) {
    window.location.href = "/home.html"; // Điều hướng đến trang chủ
  } else if (result.message.error) {
    alert("Login failed");
  } else {
    alert("Unexpected response from server");
  }
  console.log(result.message);
});
