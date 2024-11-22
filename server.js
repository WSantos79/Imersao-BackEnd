import express from "express";
import routes from "./src/routes/routes.js";
// Cria uma instância do Express, que será o servidor web
const app = express();
routes(app)


// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando estiver ouvindo
app.listen(3000, () => {
    console.log("servidor escutando");
});

