import { Link } from 'react-router-dom';


function PaginaInicio() {
  
  // Aquí puedes poner lógica de JavaScript si la necesitas antes del return

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

        <section className="Reservarya">
          <h2>Aca habrá un espació donde estará un boton llamativo, que tiente a los clientes a reservar</h2>
          <button>Reservar</button>
        </section>

        <section className="Consultas">
          <h2>Espacio destinao al formario para hacer y mandar consultas</h2>
          <h4>Nombrey Apellido</h4>
          <h4>email</h4>
          <h4>Recuadro donde estará el Contenido</h4>
          <button>Enviar Consulta</button>
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