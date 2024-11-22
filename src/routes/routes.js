import express from 'express'
import multer from 'multer';
import { abeia, buscar, newpost, allPosts, uploadImg } from '../controllers/controller.js';

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

    // Rota GET para a URL '/abelha'
app.get("/abelha", abeia);

// Rota GET para a URL '/series' Rota para pegar todos os posts
app.get("/posts", allPosts);

app.get("/posts/:id", buscar)

// Rota para criar um post
app.post('/posts', newpost)

app.post('/upload', upload.single("imagem"), uploadImg)
}

export default routes
