import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
/* user */
import Sidebar from "./userComponents/UserSidebar";
import Home from "./userComponents/Home";
import Registration from "./userComponents/Registration";
import Booking from "./userComponents/Booking";
import Status from "./userComponents/Status";
import User from "./userComponents/User";
import Login from "./userComponents/Login";
import BookEquipment from "./userComponents/BookEquipment";
import BookFood from "./userComponents/BookFood";
import BookLights from "./userComponents/BookLights";
import BookFlowers from "./userComponents/BookFlowers";
/* admin */
import Adminsidebar from "./adminComponents/Adminsidebar";
import AdminHome from "./adminComponents/AdminHome";
import Addvenue from "./adminComponents/Addvenue";
import Addequip from "./adminComponents/Addequip";
import Addfood from "./adminComponents/Addfood";
import Addlightning from "./adminComponents/Addlightning";
import Addflowers from "./adminComponents/Addflowers";
import Approval from "./adminComponents/Approval";
import BookingSearch from "./adminComponents/BookingSearch";
import ForgotPassword from "./adminComponents/ForgotPassword";
import AllVenues from "./adminComponents/Allvenue";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");

  return (
    <>
    <Router>
      <Routes>
        <Route path="/register" element={<Registration />} />
      
      </Routes>
      {/* <Registration/> */}
      {loggedIn ? (
        <div className="flex">
          {userRole === "admin" ? (
            <Adminsidebar />
          ) : (
            <Sidebar />
          )}
          <div className="flex-1 bg-gradient-to-b from-slate-100 to-slate-500">
            <Routes>
              {userRole === "admin" ? (
                <>
                  <Route path="/" element={<AdminHome />} />
                  <Route path="/addvenue" element={<Addvenue />} />
                  <Route path="/addequip" element={<Addequip />} />
                  <Route path="/addfood" element={<Addfood />} />
                  <Route path="/addlights" element={<Addlightning />} />
                  <Route path="/addflowers" element={<Addflowers />} />
                  <Route path="/approval" element={<Approval />} />
                  <Route path="/bookingsearch" element={<BookingSearch/>}/>
                  <Route path="/forgotpassword" element={<ForgotPassword />}/>
                  
                  <Route path="/allvenues" element={<AllVenues/>}/>
                  
                </>
              ) : (
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="/booking" element={<Booking />} />
                  <Route path="/status" element={<Status />} />
                  <Route path="/user" element={<User />} />
                  <Route path="/bookEquipment" element={<BookEquipment />} />
                  <Route path="/bookFood" element={<BookFood />} />
                  <Route path="/bookLights" element={<BookLights />} />
                  <Route path="/bookFlowers" element={<BookFlowers />} />
                  <Route path="/forgotpassword" element={<ForgotPassword />}/>
                  
                </>
              )}
            </Routes>
          </div>
        </div>
      ) : (
        <Login setLoggedIn={setLoggedIn} setUserRole={setUserRole} />
      )}
    </Router>
    {/* <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">click</button>
    </div> */}
    
    </>
  );
}

export default App;

/* 

    */
