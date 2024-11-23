// Importa a função para conectar ao banco de dados, definida em dbconfig.js
import { ObjectId } from "mongodb";
import 'dotenv/config';
import conectarAoBanco from "../config/dbconfig.js"; 

// Conecta ao banco de dados usando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os dados de uma coleção específica do banco de dados
export async function getAlldados() {
    // Seleciona o banco de dados 'imersao2024'
    const db = conexao.db('imersao2024');
    // Seleciona a coleção 'seriados' dentro do banco de dados
    const colecao = db.collection('posts');
    // Executa uma consulta para encontrar todos os documentos da coleção e retorna um array com os resultados
    return colecao.find().toArray();
}

export async function criaPost(novoPost) {
    // Seleciona o banco de dados 'imersao2024'
    const db = conexao.db('imersao2024');
    // Seleciona a coleção 'seriados' dentro do banco de dados
    const colecao = db.collection('posts');
    
    // Insere um novo documento (post) na coleção
    return colecao.insertOne(novoPost)
}

export async function updatePost(id, newPost) {
    // Seleciona o banco de dados 'imersao2024'
    const db = conex.db('imersao2024');
    // Seleciona a coleção 'seriados' dentro do banco de dados
    const colecao = db.collection('posts');
    
    // Converte o ID de string para um objeto ObjectId do MongoDB
    const objectID = ObjectId.createFromHexString(id);

    // Atualiza um documento na coleção com o ID especificado
    return colecao.updateOne({_id: new ObjectId(objectID)}, {$set: newPost}) 
}