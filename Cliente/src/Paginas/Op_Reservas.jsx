//Esta será la pagina donde el operador podrá consultar y liberar las reservas.

import { Link } from 'react-router-dom';


function Op_Reservas() {
  return (
    
    <div>

        <header>
            <h1>Esta es la pag de gestión de reservas</h1>
            <p>Recordar que este un es un header temporal, por que teniamos planeado </p>


            <Link to="/">
            <button>Cerrar Sesión</button>
            </Link>


        </header>

        <main>

            <Link to="/Op_Inicio">
            <button>Volver</button>
            </Link>

            <h1>Hola estas en gestión de reservas</h1>

        </main>

    </div>
      
  );
}

export default Op_Reservas;