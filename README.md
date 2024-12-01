# Imersão BackEnd InstaBytes

Este repositório contém o projeto desenvolvido durante a **Imersão BackEnd Alura**, com foco no aprendizado de conceitos fundamentais de desenvolvimento back-end utilizando Node.js, Express. MongoDB e outras tecnologias.

## 🚀 Funcionalidades

- Criação de APIs RESTful.
- Estruturação de projetos back-end.
- Manipulação de dados com um banco de dados NoSQL (MongoDB).
- Implementação de rotas, controladores e middlewares.
- Tratamento de erros e validações.

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com)
- [Postman](https://www.postman.com/) (para testar APIs)
- Outras dependências detalhadas no arquivo `package.json`.

---

## ⚙️ Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

---

## 📝 Como Configurar o Projeto

1. Clone este repositório em sua máquina:
   ```bash
   git clone https://github.com/WSantos79/Imersao-BackEnd.git

2. Acesse a pasta do projeto:
   ```bash
   cd Imersao-BackEnd

3. Instale as dependências necessárias:
   ```bash
   npm install
4. Configure as variáveis de ambiente:

   Crie um arquivo .env na raiz do projeto

   Configure as seguintes variáveis no arquivo:
   ```bash
   DB_NAME = "Nome_do_banco_de_dados"
   DB_COLECAO = "Nome_da_coleçao_de_banco_de_dados"
   STRING_CONEXAO = "mongodb+srv://<seu_usuario>:<sua_senha>.av6pl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
   GEMINI_API_KEY = "sua_api_key"

## ▶️ Como Executar o Projeto

1. Inicie o servidor:
   ```bash
   npm run dev
2. Acesse a API no navegador ou em ferramentas como o Postman:

   URL padrão: http://localhost:3000.

## 📂 Estrutura do Projeto
 
           Imersao-BackEnd/
    ├── src/
    │   ├── controllers/  # Controladores responsáveis pelas rotas.
    │   ├── models/       # Modelos para dados do banco.
    │   ├── routes/       # Arquivos de rotas da aplicação.
    │   ├── services/     # Serviços para lógica ou APIs externas.
    │   │   └── gerarDescricaoComGemini.js # Gera descrições de imagens com a API Gemini.
    │   ├── config/       # Configurações gerais do projeto.
    ├── server.js         # Arquivo principal do servidor.
    ├── services.sh       # Script para configurar serviços no Google Cloud.
    ├── .env              # Variáveis de ambiente, como chaves de API.
    ├── package.json      # Dependências e configurações do projeto.
    └── README.md         # Documentação com instruções do projeto.


## 🔧 Rotas da API
Exemplos de rotas disponíveis:

    GET /posts - Retorna a lista de posts.
    POST /posts - Cria um novo post.
    PUT /posts/:id - Atualiza um post específico.    

Para mais detalhes sobre as rotas, consulte o código em src/routes.

## 🛡️ Segurança

Certifique-se de proteger seu arquivo .env e nunca publique credenciais sensíveis em repositórios públicos.

## 🖋️ Autor

Projeto desenvolvido por <a href="https://github.com/WSantos79">Wellington Santos 🚀</a> como parte da Imersão BackEnd.

Se tiver dúvidas ou sugestões, entre em contato ou contribua com melhorias para este repositório!

[![Linkedin Badge](https://img.shields.io/badge/-WellingtonSantos79-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/wellingtonsantos79/)](https://www.linkedin.com/in/wellingtonsantos79/) 
[![Gmail Badge](https://img.shields.io/badge/-WellingtonSantos7799@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:wellingtonsantos7799@gmail.com)](mailto:wellingtonsantos7799@gmail.com)



