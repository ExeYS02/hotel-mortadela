// App.jsx
import { useState, useEffect } from 'react';
import './App.css'; // Importing the CSS file
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PaginaInicio from './Paginas/Pagina_Inicio';
import Login from './Paginas/Login';

// Estos imports los dejo como guía, no son todos, pero es una vista general de lo que ocuparemos
//import RegisterFormPage from './Pages/RegisterFormPage';
//import ReservePage from './Pages/ReservePage';
//import OperatorViewRooms from './Pages/OpViewRooms';
//import OperatorViewPays from './Pages/OpViewPays';
//import OperatorViewEmails from './Pages/OpViewEmails';
//import AdminDashboardPage from './Pages/AdminDashboardPage';
//import AdminReservesRecordsPage from './Pages/AdminDashboardPage';


function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    // Fetching data from the Node.js API
    fetch('http://localhost:5000/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.text))
      .catch((err) => setMessage('Error connecting to backend'));
  }, []);

  return (
    <BrowserRouter>

    

    <div className="container">
      <h1>Full-Stack App</h1>
      <div className="api-box">
        <p>{message}</p>
      </div>
    </div>

    <Routes>
      <Route path="/" element={<PaginaInicio />} />
      <Route path="/Login" element={<Login />} />

      {/* Enrutamientos a ajustar para poder usarlos*/}
{/*      <Route path="/RegisterForm" element={<RegisterFormPage />} />
      <Route path="/Reserve" element={<ReservePage />} />
      <Route path="/OpViewRooms" element={<OperatorViewRooms />} />
      <Route path="/OpViewPays" element={<OperatorViewPays />} />
      <Route path="/OpViewEmails" element={<OperatorViewEmails />} />
      <Route path="/AdminDashboard" element={<AdminDashboardPage />} />
      <Route path="/AdminReservesRecordsPage" element={<AdminReservesRecordsPage />} />*/}
    </Routes>
    </BrowserRouter>

    

  );
}
export default App;
// test