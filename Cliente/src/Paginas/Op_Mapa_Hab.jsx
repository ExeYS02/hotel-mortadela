// Esta será la página donde el operador podrá ver las habitaciones

import { Link } from 'react-router-dom';


function Op_Mapa_Hab() {
  return (
    
    <div>

        <header>
            <h1>Esta es la pag de mapa de hab op</h1>
            <p>Recordar que este un es un header temporal, por que teniamos planeado </p>


            <Link to="/">
            <button>Cerrar Sesión</button>
            </Link>


        </header>

        <main>
            <h1>Hola estas en mapas de habitaciones</h1>

        </main>

    </div>
      
  );
}

export default Op_Mapa_Hab;