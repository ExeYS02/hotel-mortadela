// server.js
const express = require('express');
const cors = require('cors');
const { Client } = require("pg");

const app = express();
const PORT = 5000;
const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "12345",
  database: "HotelMortadela",
});




app.use(cors());
app.use(express.json());

// A simple API route that returns a message



client.connect();

client.query(`SELECT * FROM Pagos WHERE pcod = 1`, (error, result) => {
  if(!error) {
    console.log(result.rows);
  } else {
    console.log(error.message);
  }

var message1 = JSON.stringify(result.rows[0].text);

  app.get('/api/message', (req, res) => {
    res.json({  text: JSON.stringify(result.rows[0].monto)});
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  client.end();
});





//Primera instancia de prueba para que el backend 
// se comunique con la base de datos y pueda verificar 
// con la respuesta recibia. Y posteriormente devolver al front una 
// respuesta definitiva
// El problema que posee hasta ahora, es que el cliente se cierra
// y no es posible hacer consultas a la base de datos
// cito textualmente el error: Client was closed and is not queryable

app.post('/api/login', async (req, res) => {
  
  // req.body contiene los datos que empaquetaste en el frontend con JSON.stringify
  const nombreDelUsuario = req.body.usuario;
  const contrasenaDelUsuario = req.body.contrasena;

  console.log("¡El servidor recibió un intento de login de:", nombreDelUsuario," con la contraseña:",contrasenaDelUsuario);
  
  
  // Esta es la lógica con la Base de Datos para verificarsi el usuario y la contraseña son correctos.
  try {
    // No borrar el $1, ahora mismo no implica nada por ser localhost 
    // y un proyecto aislado pero asienta una la costumbre de seguridad 
    // (En otras palabras el $1 es una medida de seguridad)
    const consulta = `SELECT * FROM usuarios WHERE username = $1`;
    
    // El AWAIT sirve para que Node.js se detenga hasta que la bdd responda
    const result = await client.query(consulta, [nombreDelUsuario]);

    // Comienzan los IFs
    // Primero: ¿La base de datos encontró a alguien con ese usuario?
    if (result.rows.length > 0) {
      
      // Extraemos los datos del usuario que nos devolvió Postgres
      const usuarioEncontrado = result.rows[0]; 

      // Segundo: ¿La contraseña coincide?
      if (usuarioEncontrado.pass === contrasenaDelUsuario) {
        res.status(200).send({ mensaje: "Login exitoso", nombre: usuarioEncontrado.username });
      } else {
        res.status(401).send({ mensaje: "Contraseña incorrecta" });
      }

    } else {
      // Si rows.length es 0, significa que el correo no existe en la base de datos
      res.status(401).send({ mensaje: "Usuario no encontrado" });
    }

  } catch (error) {
    console.error("Error en la base de datos:", error.message);
    res.status(500).send({ mensaje: "Error interno del servidor" });
  }


});