import { Link } from 'react-router-dom';

function Admin_Mapa_Hab() {
    return (
        <div>
            <header>
                <h1>Esta es la pag de inicio del mapa de habitaciones</h1>
                <p>Recordar que este un es un header temporal, por que teniamos planeado </p>

                <Link to="/">
                    <button>Cerrar Sesión</button>
                </Link>

            </header>

            <main>

                <Link to="/Admin_Inicio">
                    <button>Volver</button>
                </Link>

            </main>


        </div>
    )
}

export default Admin_Mapa_Hab;