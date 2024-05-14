import React from "react";
import {
  BrowserRouter as Router,
 Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import User from './pages/user';





export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route path='/home' element={<Home/>} />
           
        
          <Route path='/login' element={<Login/>} />
            
          
          <Route path='/user' element={<User/>} />
          
        
        </Routes>
      </div>
    </Router>
  );
}


