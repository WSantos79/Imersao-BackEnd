import express from 'express';
import multer from 'multer';
import cors from "cors";
import { abeia, buscar, newpost, allPosts, uploadImg, updateNewPost } from '../controllers/controller.js';

// Configurações para o CORS (Cross-Origin Resource Sharing)
const corsOptions = {
    origin: "http://localhost:8000", // Permite requisições somente do endereço especificado
    optionsSuccessStatus: 200 // Define o status de sucesso para as opções de pré-voo
}

// Configurações para o armazenamento de arquivos utilizando o multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Define o diretório de destino para os arquivos
    },
    filename: function (req, 1  file, cb) {
        cb(null, file.originalname); // Define o nome do arquivo
    }
});

// Inicializa o middleware multer com as configurações de armazenamento
const upload = multer({ dest: "./uploads" , storage });

const routes = (app) => {
    // Permite que o Express entenda requisições com formato JSON
    app.use(express.json());
    // Configura o middleware CORS com as opções definidas
    app.use(cors(corsOptions));

    // Define as rotas da aplicação

    // Rota GET para a URL '/abelha'
    app.get("/abelha", abeia);

    // Rota GET para a URL '/posts' Rota para pegar todos os posts
    app.get("/posts", allPosts);

    // Rota GET para buscar um post por ID
    app.get("/posts/:id", buscar);

    // Rota POST para criar um novo post
    app.post('/posts', newpost);

    // Rota PUT para atualizar um post
    app.put('/upload/:id', updateNewPost);

    // Rota POST para fazer upload de uma imagem
    app.post('/upload', upload.single("imagem"), uploadImg);
};

export default routes;