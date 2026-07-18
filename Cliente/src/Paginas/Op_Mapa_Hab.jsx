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

            <Link to="/Op_Inicio">
            <button>Volver</button>
            </Link>

            <h1>Hola estas en mapas de habitaciones</h1>

        </main>

        <p>Habitacion 1:</p><p> Tamaño: 1 --- Estado: X --- </p>
            <p>Habitacion 2:</p><p> Tamaño: 1 --- Estado: X --- </p>
            <p>Habitacion 3:</p><p> Tamaño: 2 --- Estado: X --- </p>
            <p>Habitacion 4:</p><p> Tamaño: 2 --- Estado: X --- </p>
            <p>Habitacion 5:</p><p> Tamaño: 3 --- Estado: X --- </p>
            <p>Habitacion 6:</p><p> Tamaño: 3 --- Estado: X --- </p>
            <p>Habitacion 7:</p><p> Tamaño: 4 --- Estado: X --- </p>
            <p>Habitacion 8:</p><p> Tamaño: 4 --- Estado: X --- </p>
            

    </div>
      
  );
}

export default Op_Mapa_Hab;