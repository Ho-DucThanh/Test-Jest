class Auth_User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  isComplete() {
    return this.email && this.password ? true : false;
  }

  isValidEmail() {
    return this.email.includes("@gmail.com");
  }

  isValidPassword() {
    return this.password.length >= 8;
  }

  isValidEmailAndPassword() {
    return this.isComplete() && this.isValidEmail() && this.isValidPassword();
  }
}

export default Auth_User;
