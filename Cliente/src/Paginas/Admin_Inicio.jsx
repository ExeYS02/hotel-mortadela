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
            <h1>Bienvenido Administrador ---</h1>

            <div>
                <h3>Que tarea desea hacer?</h3>

                <h3><button>Ver Habitaciones</button></h3>
                <h3><button>Gestionar Reservas</button></h3>
                <h3><button>Gestionar Pagos</button></h3>
                <h3><button>Gestionar Mails</button></h3>
                <h3><button>CRUD Habitaciones</button></h3>
                <h3><button>CRUD Operadores</button></h3>


            </div>

        </main>
    </div>
    );
}

export default Admin_Inicio;



// Está será la primera pantalla que verá el admin cuando inicie sesión.