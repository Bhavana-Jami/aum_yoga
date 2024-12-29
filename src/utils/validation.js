export const validation = (email, password, confirmPassword) => {
    const errors = {
      email: null,
      password: null,
      confirmPassword: null,
    };
  
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Enter a valid email.";
    }
  
    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }
  
    if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match.";
    }
  
    return errors;
  };
  