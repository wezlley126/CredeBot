import express from 'express';
import cors from 'cors';

const app = express();

// app use;
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world from backend Server :D');
});

export default app;