import express from "express"

const posts = [
    {
        id: 0,
        titulo: "Suits",
        descricao: "A história de um advogado brilhante que, apesar de não ter diploma, consegue um emprego em um dos mais prestigiados escritórios de advocacia de Nova York.",
        imagem: "https://image.tmdb.org/t/p/w500/sua_imagem_favorita_da_serie_suits.jpg",
        genero: "Drama, Jurídico",
        lancamento: 2011,
        elenco: "Gabriel Macht, Patrick J. Adams, Meghan Markle",
        avaliacao: 8.5,
    },
    {
        id: 1,
        titulo: "The Boys",
        descricao: "Um grupo de vigilantes decide expor os super-heróis corruptos que abusam de seus poderes.",
        imagem: "https://image.tmdb.org/t/p/w500/sua_imagem_favorita_da_serie_the_boys.jpg",
        genero: "Ação, Ficção Científica",
        lancamento: 2019,
        elenco: "Karl Urban, Jack Quaid, Antony Starr",
        avaliacao: 8.7,
    },
    {
        id: 2,
        titulo: "Twin Peaks",
        descricao: "Um detetive do FBI investiga o misterioso assassinato de Laura Palmer em uma pequena cidade do noroeste dos Estados Unidos.",
        imagem: "https://image.tmdb.org/t/p/w500/sua_imagem_favorita_da_serie_twin_peaks.jpg",
        genero: "Mistério, Drama",
        lancamento: 1990,
        elenco: "Kyle MacLachlan, Sheryl Lee, Ray Wise",
        avaliacao: 8.9,
    },
    // Adicione mais posts aqui...
    {
        id: 3,
        titulo: "Stranger Things",
        descricao: "Um grupo de amigos descobre uma misteriosa força sobrenatural em sua pequena cidade e se envolvem em eventos extraordinários.",
        imagem: "https://image.tmdb.org/t/p/w500/sua_imagem_favorita_da_serie_stranger_things.jpg",
        genero: "Ficção Científica, Terror",
        lancamento: 2016,
        elenco: "Millie Bobby Brown, Finn Wolfhard, Winona Ryder",
        avaliacao: 8.7,
    },
    {
        id: 4,
        titulo: "Breaking Bad",
        descricao: "Um professor de química com câncer diagnosticado começa a produzir e vender metanfetamina para garantir o futuro de sua família.",
        imagem: "https://image.tmdb.org/t/p/w500/sua_imagem_favorita_da_serie_breaking_bad.jpg",
        genero: "Drama, Crime",
        lancamento: 2008,
        elenco: "Bryan Cranston, Aaron Paul, Anna Gunn",
        avaliacao: 9.5,
    },
    {
        id: 5,
        titulo: "Game of Thrones",
        descricao: "Numa terra inspirada na Idade Média, famílias nobres lutam pelo controle do Trono de Ferro, enquanto forças sobrenaturais ameaçam o reino.",
        imagem: "https://image.tmdb.org/t/p/w500/sua_imagem_favorita_da_serie_game_of_thrones.jpg",
        genero: "Fantasia, Aventura",
        lancamento: 2011,
        elenco: "Peter Dinklage, Emilia Clarke, Kit Harington",
        avaliacao: 9.2,
    },
    // ... adicione mais séries populares como The Mandalorian, The Witcher, Black Mirror, etc.
];

const app = express()
app.use(express.json())

app.listen(3000, () => {
    console.log("servidor escutando")
})

app.get("/abelha", (req, res) => {
    res.status(200).send("abelha ferrao")
})

app.get("/series", (req, res) => {
    res.status(200).json(posts)
})

function searchSerieID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/series/:id", (req, res) => {
    const index = searchSerieID(req.params.id)
    res.status(200).json(posts[index])
})

