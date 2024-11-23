import { GoogleGenerativeAI } from "@google/generative-ai";

// Cria uma instância do cliente GoogleGenerativeAI, utilizando a chave de API do Gemini armazenada na variável de ambiente GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Obtém o modelo de linguagem Gemini 1.5 Flash
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Função assíncrona para gerar uma descrição para uma imagem usando o modelo Gemini
export default async function gerarDescricaoComGemini(imageBuffer) {
    // Define o prompt padrão para a geração da descrição
    const prompt =
        "Gere uma descrição em português do brasil para a seguinte imagem";

    try {
        // Cria um objeto que representa a imagem, convertendo o buffer da imagem para uma string base64
        const image = {
            inlineData: {
                data: imageBuffer.toString("base64"),
                mimeType: "image/png", // Assumindo que a imagem é um PNG
            },
        };

        // Envia a solicitação para o modelo Gemini com o prompt e a imagem
        const res = await model.generateContent([prompt, image]);

        // Retorna a descrição gerada pelo modelo
        return res.response.text() || "Alt-text não disponível.";
    } catch (erro) {
        // Caso ocorra algum erro durante a geração da descrição, registra o erro no console e lança uma nova exceção
        console.error("Erro ao obter alt-text:", erro.message, erro);
        throw new Error("Erro ao obter o alt-text do Gemini.");
    }
}