import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous success or error states
    setSuccess(false);
    setError("");

    // Simple validation
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Assuming successful signup for this example
    setSuccess(true);
    setTimeout(() => {
      navigate("/dashboard"); // Redirect to the dashboard (or another page)
    }, 1000); // Redirect after a short delay for the success message
  };

  // Email validation function
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-400 to-white">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-yellow-500 mb-6">Sign Up</h2>

        {/* Success Alert */}
        {success && (
          <div className="mb-4 p-4 text-green-700 bg-green-100 rounded-lg">
            Sign Up successful! Redirecting...
          </div>
        )}

        {/* Error Alert */}
        {error && (
          <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg">
            {error}
          </div>
        )}

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-yellow-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
