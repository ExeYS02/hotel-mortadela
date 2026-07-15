import { Link } from 'react-router-dom';


function Cliente_Reserva() {
  return (
    <div>

      <Link to="/">
      <button>Volver</button>
      </Link>

      <h1>Pagina de Rservas</h1>

      <p>Hola soy la página donde los clientes van a hacer sus reservas</p>

        <section className="Seccion_Reservas">

        <form className="Formulario_Reservas" >

            <button>Agregar Habitación</button>

            <div>
                <label>Tipo de Habitacion:</label>
                <input type="text"/>
            </div>

            <div>
                <label>Cantidad:</label>
                <input type="number" min="1" max="20"/>
            </div>

            <div>
                <label>Fecha de entrada:</label>
                <input type="date"/>
            </div>

            <div>
                <label>Fecha de Salida:</label>
                <input type="date"/>
            </div>

            <button>Consultar</button>

        </form>

        </section>

    </div>
  );
}

export default Cliente_Reserva;