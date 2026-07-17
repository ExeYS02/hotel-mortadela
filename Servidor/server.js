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
  




var message1 = JSON.stringify(result.rows[0].text); // Assuming the first row has a 'text' column


  app.get('/api/message', (req, res) => {
    res.json({  text: JSON.stringify(result.rows[0].monto)});
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });


  client.end();
});





//Primera instancia de prueba para que el backend 
// reciba los datos que le manda el frontend

app.post('/api/login', (req, res) => {
  
  // req.body contiene los datos que empaquetaste en el frontend con JSON.stringify
  const correoDelUsuario = req.body.correo;
  const contrasenaDelUsuario = req.body.contrasena;

  console.log("¡El servidor recibió un intento de login de:", correoDelUsuario);

  // Aquí iría la lógica/Conexión con la Base de Datos para verificar...
  if (correoDelUsuario === 'admin@hotel.com') {
    // res.send es la respuesta que vuelve al 'fetch' del Frontend
    res.status(200).send({ mensaje: "Login exitoso", nombre: "Admin" });
  } else {
    res.status(401).send({ mensaje: "Credenciales inválidas" });
  }
});