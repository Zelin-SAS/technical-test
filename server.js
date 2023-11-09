const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json()); // Pour pouvoir parser le JSON dans les requêtes

const routeBook = require("./routes/Book");

mongoose
  .connect("mongodb://127.0.0.1:27017/personal-library-zelin")
  .then(() => {
    console.log("Connexion à MongoDB établie");
  })
  .catch((error) => {
    console.error("Erreur lors de la connexion à MongoDB:", error);
    process.exit(1);
  });

app.use("/books", routeBook);

app.listen(port, () => {
  console.log(`Serveur Express démarré sur le port ${port}`);
});
