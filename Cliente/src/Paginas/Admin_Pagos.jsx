import { Link } from 'react-router-dom';

function Admin_Pagos() {
    return (
        <div>
            <header>
                <h1>Esta es la pag de inicio de los pagos</h1>
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
            
            <p><button>Ver pagos</button></p>
            <p>Hay X pagos pendientes</p>
            <p>DATOS PAGO</p>
            <p><button>Aprobar pago</button></p>
            <p><button>Rechazar pago</button></p>



        </div>
    )
}

export default Admin_Pagos;