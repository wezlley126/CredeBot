import Aniversariantes from './crud.js';

const test = new Aniversariantes('aniversariantes');
const a = async () => {
    const dado = await test.readAniversariantes();
    console.log(dado[1])
}

a();