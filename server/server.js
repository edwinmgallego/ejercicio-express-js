const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta para recibir el formulario
app.post("/form", (req, res) => {
  const { name, age, email } = req.body;
  console.log("Datos recibidos:", { name, age, email });
  // res.status(200).send("Datos recibidos correctamente");
  res.status(200).json({ name, age, email });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
