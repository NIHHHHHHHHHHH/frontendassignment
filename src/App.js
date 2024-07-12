// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import IndexPage from './components/IndexPage';
// import LoginPage from './components/LoginPage';
// import CandidateHomePage from './components/CandidateHomePage';

// function App() {
//   const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<IndexPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/candidate/home" element={isLoggedIn ? <CandidateHomePage /> : <Navigate to="/login" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import IndexPage from './components/IndexPage';
import LoginPage from './components/LoginPage';
import CandidateHomePage from './components/CandidateHomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, []);

  return (
    <Router>
      <NavbarComponent isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/candidate/home" element={isLoggedIn ? <CandidateHomePage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
