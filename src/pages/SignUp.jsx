import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { validation } from "../utils/validation";
import InputField from "../components/InputField";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const { handleEmailSignUp } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const validationErrors = validation(
      formData.email,
      formData.password,
      formData.confirmPassword
    );

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    handleEmailSignUp(formData.email, formData.password);
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
        <form onSubmit={handleSignUp}>
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
