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

let data = {
    id: "default",
    nome: "weslley pereira borger do nascimento da silva",
    dia: "20",
    mes: "05",
    filename: "weslley pereira borger do nascimento da silva 20-05.png"
};

let comando = `INSERT INTO aniversariantes VALUES (default, '${data['nome']}', '${data['dia']}', '${data['mes']}', '${data['filename']}')`;

con.query(comando, (err, result) => {
    if(err){
        console.log('Erro ao inserir dados:', err);
    }else{
        console.log('Dados  innseridos com sucesso: ', result);
    };
});