// client/src/App.js

/*
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink // Using NavLink for active link detection
} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Homepage from './components/Homepage';


import Appointments from './components/Appointments';
import Doctors from './components/Doctors';
import Patients from './components/Patients';
import Inventory from './components/Inventory';
import './App.css';




const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    setLoggedInUser(null); // Set logged-in user to null
  };

  return (
    <Router> {/* Wrap the app in Router for routing context *//*}
      <div className="App">
      {loggedInUser ? (
          <div>
            <p>Welcome {loggedInUser}</p>
            <nav>
                    <ul>
                        <li ><NavLink to="/appointments" activeClassName="active">
                Appointments
              </NavLink>
                        </li>
                        <li ><NavLink to="/doctors" activeClassName="active">
                Doctors
              </NavLink>
                        </li>
                        <li ><NavLink to="/patients" activeClassName="active">
                Patients
              </NavLink>
                        </li>
                        <li ><NavLink to="/inventory" activeClassName="active">
                Pharmacy Inventory
              </NavLink>
                        </li>
                    </ul>
                </nav>

            <Homepage />
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            
            {//<Login setLoggedInUser={setLoggedInUser} />
            }
            

            <Routes>
            <Route path="/" element={<Login setLoggedInUser={setLoggedInUser} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/appointments" element={<Appointments />} />
                    <Route path="/doctors" element={<Doctors />} />
                    <Route path="/patients" element={<Patients />} />
                    <Route path="/inventory" element={<Inventory />} />
            </Routes>

            <p>
              If you don't have an account, click here 
              {/* Use NavLink to manage active state automatically *//*}
              <NavLink to="/register" activeClassName="active">
                Register
              </NavLink>
            </p>
          </div>
        )}
      </div>
    </Router> 
  );
};

export default App;
*/


import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Homepage from './components/Homepage';
import Appointments from './components/Appointments';
import Doctors from './components/Doctors';
import Patients from './components/Patients';
import Inventory from './components/Inventory';
import './App.css';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    setLoggedInUser(null); // Set logged-in user to null
  };

  return (
    <Router>
      <div className="App">
        {loggedInUser ? (
          <div>
            <p>Welcome {loggedInUser}</p>
            {/* Homepage route */}
            
            <nav>
              <ul>
              <li>
                  <NavLink to="/" activeClassName="active">
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/appointments" activeClassName="active">
                    Appointments
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/doctors" activeClassName="active">
                    Doctors
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/patients" activeClassName="active">
                    Patients
                  </NavLink>
                </li>
                {/*<li>
                  <NavLink to="/inventory" activeClassName="active">
                    Pharmacy Inventory
                  </NavLink>
                </li>*/}
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/inventory" element={<Inventory />} />
            </Routes>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <Routes>
              <Route path="/" element={<Login setLoggedInUser={setLoggedInUser} />} />
              <Route path="/register" element={<Register />} />
            </Routes>

            {/*<p>
              If you have an account, click here
              <NavLink to="/register" activeClassName="active">
                Login
              </NavLink>}
            </p>*/}
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
