import { Link } from 'react-router-dom';

function Admin_Inicio() {
  return (
    <div>
      <header>
            <h1>Esta es la pag de inicio del admin</h1>
            <p>Recordar que este un es un header temporal, por que teniamos planeado </p>


            <Link to="/">
            <button>Cerrar Sesión</button>
            </Link>


        </header>

        <main>
            <h1>Bienvenido Administrador ---</h1>

            <div>
                <h3>Que tarea desea hacer?</h3>

                <Link to="/Admin_Mapa_Hab"><h3>Ver Habitaciones</h3></Link>
                <Link to="/Admin_Reservas"><h3>Gestionar Reservas</h3></Link>
                <Link to="/Admin_Pagos"><h3>Gestionar Pagos</h3></Link>
                <Link to="/Admin_Mails"><h3>Gestionar Mails</h3></Link>
                <Link to="/Admin_CRUD_Hab_inicio"><h3>CRUD Habitaciones</h3></Link>
                <Link to="/Admin_CRUD_Op_inicio"><h3>CRUD Operadores</h3></Link>
                <Link to="/Admin_Dashboards"><h3>Dashboards</h3></Link>


            </div>

        </main>
    </div>
    );
}

export default Admin_Inicio;



// Está será la primera pantalla que verá el admin cuando inicie sesión.