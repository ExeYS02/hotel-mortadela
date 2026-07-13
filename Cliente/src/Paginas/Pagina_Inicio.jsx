import { Link } from 'react-router-dom';


function PaginaInicio() {
  
  // Aquí puedes poner lógica de JavaScript si la necesitas antes del return

  return (
    <div className="contenedor-pagina">
      
      {/* 1. Esta será la parte del ancabezado, donde estará el boton de inicio de sesión, y los botones de navegacion */}
      <header className="header-inicio">
        <h1>Hotel Paraíso</h1>
        <p>Tu descanso ideal comienza aquí</p>
        
      </header>

      {/* 2. En esta parte estará el CONTENIDO PRINCIPAL. Lo que incluirá el carrusel del inicio,
       la muestra de las habitaciones, el boton de reserva ya, la sección de preguntas y una extra como 
       la ubicación del hotel */}
      <main className="cuerpo-inicio">
        <section className="bienvenida">
          <h2>Nuestras ofertas de temporada</h2>
          <p>Reserva ahora y obtén un 20% de descuento en habitaciones dobles.</p>
          
        </section>

        <section className="servicios-destacados">
          {/* Aquí podrías poner íconos de Wifi, Piscina, Desayuno, etc. */}
        </section>
      </main>

      {/* 3. EL PIE DE PÁGINA, donde lo destinaremos al contacto */}
      <footer className="footer-inicio">
        <p>Contáctanos: info@hotelmortadela.com</p>
        <p>Teléfono: +54 387 553-8076</p>
      </footer>

    </div>
  );
}


export default PaginaInicio;