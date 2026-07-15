import { Link } from 'react-router-dom';
import { useState } from 'react';


function Login() {

  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  // Función que se ejecuta cuando el usuario hace clic en "Acceder"
  const manejarEnvio = (evento) => {
    evento.preventDefault(); // Evita que la página se recargue al enviar el formulario
    console.log("Intentando iniciar sesión con:", correo, contrasena);
    // Aquí luego conectarás con tu Servidor/Backend
  };

  return (
    <div>

      <Link to="/">
      <button>Volver</button>
      </Link>

      <h1>Login Page</h1>

      <p>Hola soy el login</p>

    <section className="Formulario_Login">

    <form onSubmit={manejarEnvio}>

      <div>
        <label>Usuario:</label>
        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
      </div>
    
      <div>
        <label>Contraseña:</label>
        <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)}/>
      </div>
    
      <button type="submit">Acceder</button>
      
    </form>

    <div>

    <Link to="/Op_Inicio">
        <button>Entrar Como Operador</button>
      </Link>

      <Link to="/Admin_Inicio">
        <button>Entrar Como Admin</button>
      </Link>

    </div>
    
    </section>

      <h3>Te estas logeando</h3>

    </div>
  );
}

export default Login;