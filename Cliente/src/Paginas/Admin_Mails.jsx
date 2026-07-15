import { Link } from 'react-router-dom';

function Admin_Mails() {
    return (
        <div>
            <header>
                <h1>Esta es la pag de inicio de los correos</h1>
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

export default Admin_Mails;