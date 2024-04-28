import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = ({ setLoggedIn, setUserRole }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7017/api/Login/login?username=${username}&password=${password}`
      );
      console.log(response.data);

      const { token, rolename } = response.data;

      // Extract token and Rolename from API response

      // Store token and user role (Rolename) in session storage
      sessionStorage.setItem("token", token);
      console.log(token);

      console.log("hii");
      console.log(response.data.rolename);
      // Set logged in state and user role in parent component

      // Redirect based on user role (Rolename)
      if (rolename === "customer") {
        setLoggedIn(true);
        setUserRole("user");

        // Redirect to customer dashboard
      } else if (rolename === "admin") {
        setLoggedIn(true);
        setUserRole("admin"); // Redirect to customer dashboard
      }
    } catch (error) {
      alert("Invalid username or password"); // Handle authentication error
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleregister() {
    const but1 = document.querySelector(".class1");
    if (but1) {
      but1.style.display = "none";
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center mb-6">
          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Login
          </button>
        </div>
        <div className="flex justify-center">
          <p className="text-center">
            Don't have an account?{" "}
            <span className="text-blue-400 cursor-pointer">
              <Link to="/register">Register here</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
