// App.jsx
import { useState, useEffect } from 'react';
import './App.css'; // Importing the CSS file
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PaginaInicio from './Paginas/Pagina_Inicio';
import Login from './Paginas/Login';
import Admin_Inicio from './Paginas/Admin_Inicio';
import Op_Inicio from './Paginas/Op_Inicio';
import Op_Mapa_Hab from './Paginas/Op_Mapa_Hab';
import Op_Reservas from './Paginas/Op_Reservas';
import Op_Pagos from './Paginas/Op_Pagos';
import Op_Mails from './Paginas/Op_Mails';
import Admin_Mapa_Hab from './Paginas/Admin_Mapa_Hab';
import Admin_Reservas from './Paginas/Admin_Reservas';
import Admin_Pagos from './Paginas/Admin_Pagos';
import Admin_Mails from './Paginas/Admin_Mails';
import Admin_CRUD_Hab_inicio from './Paginas/Admin_CRUD_Hab_inicio';
import Admin_CRUD_Op_inicio from './Paginas/Admin_CRUD_Op_inicio';
import Admin_Dashboards from './Paginas/Admin_Dashboards';

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
      <Route path="/Admin_Inicio" element={<Admin_Inicio />} />
      <Route path="/Op_Inicio" element={<Op_Inicio />} />
      <Route path="/Op_Mapa_Hab" element={<Op_Mapa_Hab />} />
      <Route path="/Op_Reservas" element={<Op_Reservas />} />
      <Route path="/Op_Pagos" element={<Op_Pagos />} />
      <Route path="/Op_Mails" element={<Op_Mails />} />
      <Route path="/Admin_Mapa_Hab" element={<Admin_Mapa_Hab />} />
      <Route path="/Admin_Reservas" element={<Admin_Reservas />} />
      <Route path="/Admin_Pagos" element={<Admin_Pagos />} />
      <Route path="/Admin_Mails" element={<Admin_Mails />} />
      <Route path="/Admin_CRUD_Hab_inicio" element={<Admin_CRUD_Hab_inicio />} />
      <Route path="/Admin_CRUD_Op_inicio" element={<Admin_CRUD_Op_inicio />} />
      <Route path="/Admin_Dashboards" element={<Admin_Dashboards />} />

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