import { Link } from 'react-router-dom';
import { useState } from 'react';


function PaginaInicio() {
  
  // Aquí puedes poner lógica de JavaScript si la necesitas antes del return

  const [NomyApe, setNomyApe] = useState('');
  const [correo, setCorreo] = useState('');
  const [contenido, setContenido] = useState('');

  // Función que se ejecuta cuando el usuario hace clic en "Ingresar"
  const consultacliente = (evento) => {
    evento.preventDefault(); // Evita que la página se recargue al enviar el formulario
    console.log("Consulta del cliente:",NomyApe, correo, contenido);
    // Aquí luego conectarás con tu Servidor/Backend
};

  return (
    <div className="contenedor-pagina">
      
      {/* 1. Esta será la parte del ancabezado, donde estará el boton de inicio de sesión, y los botones de navegacion */}
      <header className="header-inicio">
        <h1>Hotel Mortadela</h1>
        
        <div>
            <h3>Home</h3>

            <h3>Habitaciones</h3>

            <h3>Servicios</h3>

            <h3>Reservar</h3>

            <h3>Consultas</h3>

            <h3>Ubicación</h3>

            <Link to="/Login">
            <button>Iniciar Sesión</button>
            </Link>
            


        </div>
                
      </header>

      {/* 2. En esta parte estará el CONTENIDO PRINCIPAL. Lo que incluirá el carrusel del inicio,
       la muestra de las habitaciones, el boton de reserva ya, la sección de preguntas y una extra como 
       la ubicación del hotel */}
      <main className="cuerpo-inicio">

        <section className="Carusel">
          <h2>Aca estará el carusel con las imagenes</h2>
        </section>

        <section className="MuestraHabitaciones">
          <h2>Aca estará una muestra de los diferentes tipos de habitaciones con las imagenes</h2>
        </section>

        <section className="MuestraServicios">
          <h2>Aca habrá un listado de los distintos servicios que brindaremos</h2>
          <h4>-Desayuno a la habitación</h4>
          <h4>-Almuerzo</h4>
          <h4>-Merienda</h4>
          <h4>-Cena</h4>
          <h4>-Pileta</h4>
          <h4>-Sala de Juegos</h4>
          <h4>-Pileta</h4>
          <h4>-GYM</h4>
          <h4>-SPA</h4>
        </section>

        <div className="Reservar_Ya">
          <h2>Aca habrá un espació donde estará un boton llamativo, que tiente a los clientes a reservar</h2>

          <Link to="Cliente_Reserva">
            <button>Reservar</button>
          </Link>

        </div>

        <section className="ConsultasCliente">

          <form onSubmit={consultacliente}>

            <div>
              <label>Nombre y Apellido:</label>
              <input type="text" value={NomyApe}
                onChange={(e) => setNomyApe(e.target.value)} 
              />
            </div>
          
          <div>
            <label>Correo Electrónico:</label>
            <input type="email" value={correo}
              onChange={(e) => setCorreo(e.target.value)} 
            />
          </div>
        
          <div>
            <label>Contenido:</label>
            <input type="text" value={contenido}
            onChange={(e) => setContenido(e.target.value)} 
            />
          </div>

          <button type="submit">Enviar Consulta</button>

          </form>

        </section>

        <section className="UbicacionHotel">
          <h2>Espacio destinado para un maps, donde motará la ubicación del hotel</h2>
        </section>

      </main>

      {/* 3. EL PIE DE PÁGINA, donde lo destinaremos al contacto */}
      <footer className="footer-inicio">
        <p>Siganos en nuestras redes</p>
        <p>Contáctanos: info@hotelmortadela.com</p>
        <p>Teléfono: +54 387 553-8076</p>
      </footer>

    </div>
  );
}


export default PaginaInicio;