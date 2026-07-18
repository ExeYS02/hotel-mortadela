//En esta pagina, el operador podrá procesar los pagos, como a su vez tambien contará con un registro de todos los pagos.

import { Link } from 'react-router-dom';


function Op_Pagos() {
  return (
    
    <div>

        <header>
            <h1>Esta es la pag de gestión de pagos</h1>
            <p>Recordar que este un es un header temporal, por que teniamos planeado </p>


            <Link to="/">
            <button>Cerrar Sesión</button>
            </Link>


        </header>

        <main>

            <Link to="/Op_Inicio">
            <button>Volver</button>
            </Link>

            <h1>Hola estas en gestión de pagos</h1>

        </main>

        <p><button>Ver pagos</button></p>
            <p>Hay X pagos pendientes</p>
            <p>DATOS PAGO</p>
            <p><button>Aprobar pago</button></p>
            <p><button>Rechazar pago</button></p>

    </div>
      
  );
}

export default Op_Pagos;