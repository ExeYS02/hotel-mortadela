import { Link } from 'react-router-dom';


function Login() {
  return (
    <div>

      <Link to="/">
      <button>Volver</button>
      </Link>

      <h1>Login Page</h1>

      <p>Hola soy el login</p>

    <section className="FormularioLogin">

    <form>

      <div>
        <label>Usuario:</label>
        <input/>
      </div>
    
      <div>
        <label>Contraseña:</label>
        <input type="password"/>
      </div>
    
      <button>Acceder</button>

      <Link to="/Op_Inicio">
        <button>Entrar Como Operador</button>
      </Link>

      <Link to="/Admin_Inicio">
        <button>Entrar Como Admin</button>
      </Link>
      
    </form>
    
    </section>

      <h3>Te estas logeando</h3>

    </div>
  );
}

export default Login;