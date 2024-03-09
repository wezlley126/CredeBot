import express from 'express';
import Aniversariantes from './../mysqlib/crud.js';
import cors from 'cors';

const app = express();
const aniversariantes = new Aniversariantes('aniversariantes');

// app use;
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world from backend Server :D');
});

app.get('/addAniversariante', (req, res) => {
    res.send('sdaf')
})

app.post('/addAniversariante', (req, res) => {
    const receive = req.body;
    console.log(`Dados recebidos com sucesso: `, receive);
    res.status(200).send(`Dados recebidos com sucesso`)
    //Inserção no banco de dados;
    aniversariantes.createAniversariantes(receive.name, receive.day, receive.month, 'adada.png')
});

export default app;