import {getAlldados, criaPost, updatePost} from "../models/models.js";
import fs from "fs";
import gerarDescricaoComGemini from "../services/geminiService.js";

// Função auxiliar para encontrar o índice de um post pelo ID
function searchPostID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

// Rota para obter todos os posts
export async function allPosts(req, res) {
    // Chama a função getAlldados() para buscar todos os posts no banco de dados
    const resultado = await getAlldados();
    // Envia uma resposta HTTP com status 200 e os dados dos posts no formato JSON
    res.status(200).json(resultado);
}

// Rota para criar um novo post
export async function newpost(req, res) {
    // Obtém os dados do novo post a partir do corpo da requisição
    const novoPost = req.body;
    try {
        // Chama a função criaPost() para inserir o novo post no banco de dados
        const postCriado = await criaPost(novoPost);
        // Envia uma resposta HTTP com status 200 e os dados do post criado
        res.status(200).json(postCriado);
    } catch (error) {
        // Caso ocorra um erro, registra o erro no console e envia uma resposta com status 500
        console.error(error.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}

// Rota para atualizar um post existente
export async function updateNewPost(req, res) {
    // Obtém o ID do post a ser atualizado a partir dos parâmetros da URL
    const id = req.params.id;
    // Constrói a URL da imagem
    const urlImg = `http://localhost:3000/${id}.png`;
    try {
        // Lê o arquivo de imagem do sistema de arquivos
        const imageBuffer = fs.readFileSync(`uploads/${id}.png`);
        // Gera uma descrição para a imagem usando o serviço Gemini
        const descricao = await gerarDescricaoComGemini(imageBuffer);
        // Cria um objeto com os dados do post atualizado
        const post = {
            descricao: descricao,
            img: urlImg,
            alt: req.body.alt
        };
        // Chama a função updatePost() para atualizar o post no banco de dados
        const postCriado = await updatePost(id, post);
        // Envia uma resposta HTTP com status 200 e os dados do post atualizado
        res.status(200).json(postCriado);
    } catch (error) {
        // Caso ocorra um erro, registra o erro no console e envia uma resposta com status 500
        console.error(error.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}

// Rota para fazer upload de uma imagem
export async function uploadImg(req, res) {
    // Cria um objeto com os dados do novo post
    const novoPost = {
        descricao: "",
        img: req.file.originalname,
        alt: ""
    };
    try {
        // Insere o novo post no banco de dados
        const postCriado = await criaPost(novoPost);
        // Renomeia o arquivo de imagem para incluir o ID do post
        const imgAtualizada = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(req.file.path, imgAtualizada);
        // Envia uma resposta HTTP com status 200 e os dados do post criado
        res.status(200).json(postCriado);
    } catch (error) {
        // Caso ocorra um erro, registra o erro no console e envia uma resposta com status 500
        console.error(error.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}

// Rota de exemplo para retornar a string "abelha ferrao"
export async function abeia(req, res) {
    res.status(200).send("abelha ferrao");
}

// Rota para buscar um post por ID
export async function buscar(req, res) {
    // Obtém o índice do post a partir do ID
    const index = searchPostID(req.params.id);
    // Envia uma resposta HTTP com status 200 e os dados do post encontrado
    res.status(200).json(posts[index]);
}