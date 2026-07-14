import { Link } from 'react-router-dom';
function Admin_Inicio() {
  return (
    <div>
      <header>
            <h1>Esta es la pag de inicio del op</h1>
            <p>Recordar que este un es un header temporal, por que teniamos planeado </p>


            <Link to="/">
            <button>Cerrar Sesión</button>
            </Link>


        </header>

        <main>
            <h1>Bienvenido Operador ---</h1>

            <div>
                <h3>Que tarea desea hacer?</h3>

                
                <h3>Ver Habitaciones</h3>


                <h3>Gestionar Reservas</h3>


                <h3>Gestionar Pagos</h3>


                <h3>Gestionar Mails</h3>


            </div>

        </main>
    </div>
    );
}

export default Admin_Inicio;



// Está será la primera pantalla que verá el admin cuando inicie sesión.