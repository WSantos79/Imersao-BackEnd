import {getAlldados, criaPost} from "../models/models.js";

function searchPostID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    }) 
}

export async function allPosts(req, res) {
    // Chama a função getAlldados() para obter todos os dados da coleção 'seriados'
    const resultado = await getAlldados();
    // Envia uma resposta HTTP com status 200 (OK) e os dados da coleção no formato JSON
    res.status(200).json(resultado);
}

export async function newpost(req, res) {
    const novoPost = req.body
    try {
        const postCriado = await criaPost(novoPost)
        res.status(200).json(postCriado)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({"Erro": "Falha na requisição"})
    }
    
}

export async function uploadImg(req, res) {
    const novoPost = req.body
    try {
        const postCriado = await criaPost(novoPost)
        res.status(200).json(postCriado)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({"Erro": "Falha na requisição"})
    }
    
}

export async function abeia(req, res) {
    // Envia uma resposta HTTP com status 200 (OK) e o texto "abelha ferrao"
    res.status(200).send("abelha ferrao");
}

export async function buscar (req, res) { // ao colocar no http o numero ele retorna
    const index = searchPostID(req.params.id)
    res.status(200).json(posts[index])
}