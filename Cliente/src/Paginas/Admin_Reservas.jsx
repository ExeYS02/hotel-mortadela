import { Link } from 'react-router-dom';

function Admin_Reservas() {
    return (
        <div>
            <header>
                <h1>Esta es la pag de inicio de las reservas</h1>
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
            
            <p><button>Ver reservas</button></p>
            <p>Hay X reservas pendientes</p>
            <p>DATOS RESERVA</p>
            <p><button>Aprobar reserva</button></p>
            <p><button>Rechazar reserva</button></p>

        </div>
    )
}

export default Admin_Reservas;