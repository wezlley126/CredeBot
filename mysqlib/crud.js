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

    createAniversariantes(nome, dia, mes, filename) {
        let comando = `INSERT INTO ${this.tableName} VALUES (default, '${nome}', '${dia}', '${mes}', '${filename}')`;

        con.query(comando, (err, result) => {
            if(err){
                console.log('Erro ao inserir dados:', err);
            }else{
                console.log('Dados  innseridos com sucesso: ', result);
            };
        });
    }

    readAniversariantes() {
        const comando = `SELECT * FROM ${this.tableName}`;

        con.query(comando, (err, result) => {
            if(err){
                console.log('Erro ao requisitar os dados da tabela: ', err);
            }else{
                //console.log('Dados recebidos com sucesso: ', result);
                return result;
            };
        });
    };

    updateAniversariantes(column, newData, id) {
        if(column === 'id'){
            console.log('O campo id não pode ser alterado, por favor entre em contato com o administrador do banco de dados ;)');
        }else{
            let comando = `UPDATE ${this.tableName} SET ${column} = '${newData}' WHERE id = '${id}'`;

            con.query(comando, (err, result) => {
                if(err){
                    console.log(`Erro ao alterar a coluna ${column} da tabela ${this.tableName}: `, err);
                }else{
                    console.log(`Coluna ${column} da tabela ${this.tableName} alterada com sucesso: `, result);
                };
            });
        }
    };

    deleteAniversariantes(id) {
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