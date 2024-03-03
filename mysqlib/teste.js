import Aniversariantes from './crud.js';

const test = new Aniversariantes('aniversariantes');

const data = async () => {
    const dados = await test.readAniversariantes();
    console.log(dados);
}

data()