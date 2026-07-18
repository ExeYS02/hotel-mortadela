import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {

  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');



  // Nuevos estados que servirán para manejar y mejroar
  // la experiencia del usuario. Con esto podremos mostrar
  // que efectivamente algo desencadenó el botón, y que no solamente es un adorno
  //  y además sirve para mantener informado al usuario
  const [cargando, setCargando] = useState(false);
  const [mensajeError, setMensajeError] = useState('');

  // Iniciamos la herramienta de navegación, que es un link 
  // con la diferencia es que este es para programar un cambio de página
  const navegar = useNavigate();


  //Nuevo metodo con el objetivo de poder mandar los datos
  // al backend, y que este a su vez pueda responder. 
  // Aclaración en el backend todavía faltaría la conexón
  //  con la base de datos.
  //  Las respuesta están siendo simuladas.
  const manejarEnvio = async (evento) => {
    evento.preventDefault();
    
    // 1. Preparamos la interfaz antes de enviar
    setCargando(true);
    setMensajeError(''); // Limpiamos errores anteriores

    // 2. Iniciamos el bloque de prueba (try)
    try {
      // 1. EL FETCH REAL REEMPLAZA AL SETTIMEOUT
      // Enviamos los datos al backend y esperamos (await) su respuesta
      const respuesta = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuario, contrasena })
      });
    
      // Le preguntamos al 'fetch' si el servidor 
      // respondió con un código de éxito 
      // (ej. HTTP 200 OK)
      if (respuesta.ok) {

        // Podemos extraer información que el servidor nos mande de vuelta
        // Por ejemplo, el nombre real del usuario o un token de seguridad
        const datosServidor = await respuesta.json();
        console.log("Bienvenido:", datosServidor.nombre);

        if (datosServidor.cargo==='a') {
          navegar('/Admin_Inicio'); 
        } else {
          navegar('/Op_Inicio')
        }
        
      } else {
        // Si el servidor responde con un error (ej. HTTP 401 No Autorizado),
        // forzamos el error para que caiga en el 'catch'
        throw new Error("Credenciales rechazadas por el servidor.");
      }
    } catch (error) {
    // Aquí atrapamos tanto si el servidor rechazó el login, 
    // como si el servidor está apagado y el fetch falló por completo.
      setMensajeError(error.message);
    } finally {
      // 4. Esto se ejecuta SIEMPRE al final, haya error o éxito
      setCargando(false); // Apagamos el estado de carga
    }
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
          <input 
            type="text" 
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)} 
            required
          />
        </div>

        <div>
          <label>Contraseña:</label>
          <input type="password" value={contrasena} 
          onChange={(e) => setContrasena(e.target.value)}/>
        </div>

        {/* Este sera el mensaje si llegara a producirse un error */}
        {mensajeError && (
          <p style={{ color: 'red', fontWeight: 'bold' }}>
            {mensajeError}
          </p>
        )}

        {/* Nuevo botón que irá cambiando */}
        <button type="submit" disabled={cargando}>
        {cargando ? 'Verificando...' : 'Ingresar'}
        </button>

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