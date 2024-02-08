import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Dashboard from './Pages/Dashboard'
import { useState } from 'react';
function App() {

    const [isLoggedin, setLoggedIn] = useState(null);

    return (
    <div className="App">
      <Navbar isLoggedin={isLoggedin} setLoggedIn={setLoggedIn} />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login isLoggedin={isLoggedin} setLoggedIn={setLoggedIn}/>} />
        <Route path="/signup" element={<Signup  />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
export default App;
