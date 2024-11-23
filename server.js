import express from "express";
import routes from "./src/routes/routes.js";

// Cria uma instância do Express, que será o servidor web
const app = express();

// Define a pasta "uploads" como um diretório público, permitindo acesso direto a arquivos nessa pasta
app.use(express.static("uploads"))

// Chama a função 'routes' para configurar as rotas da aplicação
routes(app)

// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando estiver ouvindo
app.listen(3000, () => {
    console.log("servidor escutando");
});