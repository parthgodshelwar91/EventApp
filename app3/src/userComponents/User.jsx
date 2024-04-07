import React, { useState } from "react";
import Sidebar from "./UserSidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Registration from "./Registration";
import Booking from "./Booking";
import Status from "./Status";
import User from "./User";
import Login from "./Login";

function App() {
  // State to track whether the user is logged in
  const [loggedIn, setLoggedIn] = useState(false);

  return (
      <>
      {loggedIn ? (
        <div className="flex">
          <Sidebar />
          <div className="flex-1 bg-gradient-to-b from-slate-100 to-slate-500">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/status" element={<Status />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )}
      </>
  );
}

export default App;
