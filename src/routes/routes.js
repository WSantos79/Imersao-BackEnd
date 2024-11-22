import express from 'express'
import multer from 'multer';
import cors from "cors"
import { abeia, buscar, newpost, allPosts, uploadImg, updateNewPost } from '../controllers/controller.js';

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    // Permite que o Express entenda requisições com formato JSON
    app.use(express.json());
    app.use(cors(corsOptions))
    // Rota GET para a URL '/abelha'
app.get("/abelha", abeia);

// Rota GET para a URL '/series' Rota para pegar todos os posts
app.get("/posts", allPosts);

app.get("/posts/:id", buscar)

// Rota para criar um post
app.post('/posts', newpost)

app.put('/upload/:id', updateNewPost)

app.post('/upload', upload.single("imagem"), uploadImg)
}

export default routes
