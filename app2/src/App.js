
import Sidebar from "./components/Sidebar";
import Addvenue from './components/Addvenue';
import Addequip from './components/Addequip';
import Addfood from './components/Addfood';
import Addlightning from './components/Addlightning';
import Addflowers from './components/Addflowers';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router,Routes, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-gradient-to-b from-slate-100 to-slate-500">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addvenue" element={<Addvenue />} />
            <Route path="/addequip" element={<Addequip />} />
            <Route path="/addfood" element={<Addfood />} />
            <Route path="/addlights" element={<Addlightning />} />
            <Route path="/addflowers" element={<Addflowers />} />
          </Routes>
        </div>
      </div>
    </Router>
    {/* <Login/> */}
    </>
  );
}

export default App;
