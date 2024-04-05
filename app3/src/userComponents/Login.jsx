import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Registration from "./Registration";


const Login = ({ setLoggedIn, setUserRole }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  const handleLogin = () => {
    if (username === "user" && password === "123456") {
      setLoggedIn(true);
      setUserRole("user"); 
    } else if (username === "admin" && password === "admin") {
      setLoggedIn(true);
      setUserRole("admin");
    } else {
      alert("Wrong username or password");
    }
  };
  

  
  /* function handleregister() {


    navigate("/register");
  } */

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
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
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
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
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
          <p className=" mt-4">
            Don't have an account?
            <span className="text-blue-400 cursor-pointer ml-1 "  >
            {/* onClick={toggleComponents}
            {showComponent1 ? <Registration /> : <Login />} */}
             <Link to='/register'>Register here</Link> 
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
