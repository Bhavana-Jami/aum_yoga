import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { validation } from "../utils/validation";
import InputField from "../components/InputField";
import Loading from "../components/Loading";

const SignUpPage = () => {
  const { handleEmailSignUp, authState } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();

    const validationErrors = validation(
      formData.email,
      formData.password,
      formData.confirmPassword
    );

    if (validationErrors.email || validationErrors.password || validationErrors.confirmPassword) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    await handleEmailSignUp(formData.email, formData.password);
    console.log("Auth State after sign up:", authState.error);
    if (authState.error === "Firebase: Error (auth/email-already-in-use).") {
      alert("Email already in use. Please sign in instead.");
      navigate("/signin");
      return;
    }
    else if (authState.error === "Firebase: Error (auth/invalid-email).") {
      alert("Invalid credentials, please try again!", authState.error);
      navigate("/");
      return;
    } else if (authState.error) {
      alert("Something went wrong while singing up, please try again later", authState.error);
      navigate("/");
      return;
    }
    else {
      alert("Signed up successfully, please sign in to proceed!");
      navigate("/signin");
    }
  };


  const inputs = [
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      value: formData.email,
      onChange: (e) => setFormData({ ...formData, email: e.target.value }),
      error: errors.email,
    },
    {
      id: "password",
      label: "Password",
      type: showPassword ? "text" : "password",
      placeholder: "Create a password",
      value: formData.password,
      onChange: (e) => setFormData({ ...formData, password: e.target.value }),
      error: errors.password,
      showToggle: true,
      toggle: () => setShowPassword(!showPassword),
      showState: showPassword,
    },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      type: showConfirmPassword ? "text" : "password",
      placeholder: "Confirm your password",
      value: formData.confirmPassword,
      onChange: (e) =>
        setFormData({ ...formData, confirmPassword: e.target.value }),
      error: errors.confirmPassword,
      showToggle: true,
      toggle: () => setShowConfirmPassword(!showConfirmPassword),
      showState: showConfirmPassword,
    },
  ];
  if (authState.loading) return <Loading />
  return (
    <div className="min-h-screen bg-[#f9f7fc] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-3xl font-bold text-[#745982] mb-6 text-center">
          Join Aum Yoga
        </h2>
        <form onSubmit={(e) => handleSignUp(e)}>
          {inputs.map((input) => (
            <InputField key={input.id} {...input} />
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#745982] text-white py-2 px-4 rounded-md hover:bg-[#db2a59] transition duration-300"
            type="submit"
          >
            Sign Up
          </motion.button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a
              href="/signin"
              className="text-[#745982] hover:text-[#db2a59] font-semibold"
            >
              Sign in
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpPage;
