const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const porta = 3000; //prãrpotoada 
const sql = require('mssql');
const conexaoStr = "Server=regulus.cotuca.unicamp.br;Database=PR118174;User Id=PR118174;Password=PR118174;";

//conexao com BD
sql.connect(conexaoStr)
   .then(conexao => global.conexao = conexao)
   .catch(erro => console.log(erro));

// configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//definindo as rotas
const rota = express.Router();
rota.get('/', (requisicao, resposta) => resposta.json({ mensagem: 'Funcionando!'}));
app.use('/', rota);

//inicia servidor
app.listen(porta);
console.log('API Funcionando!');

function execSQL(sql, resposta) {
	global.conexao.request()
		.query(sql)
		.then(resultado => resposta.json(resultado.recordset))
		.catch(erro => resposta.json(erro));
}

rota.get('/usuario', (requisicao, resposta) =>{
execSQL('SELECT * FROM USUARIO', resposta);
})

//o simbolo ? indica que id na rota abaixo é opcional
rota.get('/usuario/:id?', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.id)
	filtro = ' WHERE CODUSUARIO =' + parseInt(requisicao.params.id);
execSQL('SELECT * from USUARIO' + filtro, resposta);
})

rota.post('/usuario', (requisicao, resposta) =>{
const codigo = parseInt(requisicao.body.codigo);
const nome = requisicao.body.nome;
const email = requisicao.body.email;
const senha = requisicao.body.senha;
const pontos = 0;
execSQL(`INSERT INTO USUARIO(codUsario, nomeUsuario, email, senha, pontuacao) VALUES(${codigo}, '${nome}', ${email}','${senha}', '${pontos}')`, resposta);
})