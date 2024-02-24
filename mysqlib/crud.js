/*import mysql from 'mysql';

const conect = mysql.createConnection({
    user: "rooto",
    password: "",
    host: "127.0.0.1",
});

conect.connect((error) => {
    if(error){
        console.log('Erro no banco:', error)
    }else{
        console.log('Conectado!');
    }
})*/

import mysql from 'mysql';

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "supbot",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

class Aniversariantes{
    constructor(nomeTabela) {
        this.tableName = nomeTabela;
        this.comandoExec = '';
    };

    insertAniversariantes(nome, dia, mes, filename) {
        let comando = `INSERT INTO aniversariantes VALUES (default, '${nome}', '${dia}', '${mes}', '${filename}')`;

        con.query(comando, (err, result) => {
            if(err){
                console.log('Erro ao inserir dados:', err);
            }else{
                console.log('Dados  innseridos com sucesso: ', result);
            };
        });
    }

    removeAniversariantes(id) {
        let comando = `DELETE FROM ${this.tableName} WHERE id = ${id}`;

        con.query(comando, (err, result) => {
            if(err){
                console.log('Erro ao remover aniversariantes');
            }else{
                console.log('Aniversariante(s) apagados com sucesso');
            };
        });
    };

}

export default Aniversariantes;