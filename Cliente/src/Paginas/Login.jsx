import { Link } from 'react-router-dom';


function Login() {
  return (
    <div>
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
      
    </form>
    
    </section>

      <h3>Te estas logeando</h3>
      {/* Aquí puedes agregar tu formulario de inicio de sesión */}
    </div>
  );
}

export default Login;