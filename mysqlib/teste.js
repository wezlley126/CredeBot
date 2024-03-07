import Aniversariantes from './crud.js';

const test = new Aniversariantes('aniversariantes');
const a = async () => {
    const dado = await test.readAniversariantes(5);
    console.log(dado)
}

a();