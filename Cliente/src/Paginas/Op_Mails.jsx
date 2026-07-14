//Esta será la página donde el operador podrá responder a todos los mails que sean enviados.

import { Link } from 'react-router-dom';


function Op_Mails() {
  return (
    
    <div>

        <header>
            <h1>Esta es la pag de gestion de consultas por mails</h1>
            <p>Recordar que este un es un header temporal, por que teniamos planeado </p>


            <Link to="/">
            <button>Cerrar Sesión</button>
            </Link>


        </header>

        <main>

            <Link to="/Op_Inicio">
            <button>Volver</button>
            </Link>

            <h1>Hola estas en gestión de consultas por mails</h1>

        </main>

    </div>
      
  );
}

export default Op_Mails;