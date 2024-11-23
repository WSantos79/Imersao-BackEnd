import { MongoClient } from 'mongodb';

// Função assíncrona para conectar ao banco de dados MongoDB
export default async function conectarAoBanco(stringConexao) {
  // Declara uma variável para armazenar o cliente MongoDB
  let mongoClient;

  // Bloco try-catch para tratar possíveis erros durante a conexão
  try {
    // Cria uma nova instância do cliente MongoDB, passando a string de conexão
    mongoClient = new MongoClient(stringConexao);
    // Exibe uma mensagem no console indicando que a conexão está sendo estabelecida
    console.log('Conectando ao cluster do banco de dados...');
    // Tenta conectar ao banco de dados. A palavra-chave 'await' pausa a execução até que a conexão seja estabelecida ou ocorra um erro.
    await mongoClient.connect();
    // Exibe uma mensagem de sucesso caso a conexão seja estabelecida
    console.log('Conectado ao MongoDB Atlas com sucesso!');

    // Retorna o cliente MongoDB para que possa ser utilizado em outras partes do código
    return mongoClient;
  } catch (erro) {
    // Captura qualquer erro que possa ocorrer durante a conexão
    console.error('Falha na conexão com o banco!', erro);
    // Encerra a aplicação em caso de erro
    process.exit();
  }
}