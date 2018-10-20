const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
const porta = 3000; //porta padrão 
const sql = require('mssql'); 
const conexaoStr = "Server=regulus.cotuca.unicamp.br;Database=PR118174;User Id=PR118174;Password=PR118174;";

//conexao com BD 
sql.connect(conexaoStr) 
.then(conexao => global.conexao = conexao) 
.catch(erro => console.log(erro)); 

// configurando o body parser para pegar POSTS mais tarde 
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json()); //acrescentando informacoes de cabecalho para suportar o CORS 
app.use(function(req, res, next) { 
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
	res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PATCH, DELETE"); 
	next(); 
}); 

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
	//.then(resultado => console.log(resultado.recordset)) 
	.catch(erro => resposta.json(erro)); 
}

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


rota.get('/candidato', (requisicao, resposta) =>{
execSQL('SELECT * FROM CANDIDATO', resposta);
})

rota.patch('/candidato/:id', (requisicao, resposta) =>{ 
	const id = parseInt(requisicao.params.id); 
	const votosNovos = parseInt(requisicao.body.votos);
	execSQL(`UPDATE Candidato SET votos = ${votosNovos} WHERE ID=${id}`, resposta); 
	resposta.end(resposta.json({ mensagem: 'Alterado!'})); 
})

/*
rota.get('/candidato/:id?', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.id)
	filtro = ' WHERE CODCANDIDATO =' + parseInt(requisicao.params.id);
execSQL('SELECT * from CANDIDATO' + filtro, resposta);
})*/



/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


rota.get('/usuario', (requisicao, resposta) =>{
execSQL('SELECT * FROM USUARIO', resposta);
})

/*
rota.get('/usuario/:id?', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.id)
	filtro = ' WHERE CODUSUARIO =' + parseInt(requisicao.params.id);
execSQL('SELECT * from USUARIO' + filtro, resposta);
})*/

rota.post('/usuario', (requisicao, resposta) =>{
const nome = requisicao.body.nome;
const email = requisicao.body.email;
const senha = requisicao.body.senha;
const pontos = 0;
const aniversario = requisicao.body.aniversario;
const pais = requisicao.body.pais;
execSQL(`INSERT INTO USUARIO(nomeUsuario, email, senha, pontuacao, dataAniversario, nacionalidade) VALUES('${nome}', '${email}','${senha}', ${pontos}, '${aniversario}', '${pais}')`, resposta);
// resposta.end(resposta.json({ mensagem: 'Incluído!'}));
})

rota.patch('/usuario/:id', (requisicao, resposta) =>{	
	const id = parseInt(requisicao.params.id);
	const highscore = parseInt(requisicao.body.pontosNovos);
	execSQL(`UPDATE Usuario SET pontuacao = ${highscore} WHERE ID=${id}`, resposta); 
	// resposta.end(resposta.json({ mensagem: 'Alterado!'})); 
})

rota.delete('/usuario/:id', (requisicao, resposta) =>{ 
	execSQL('DELETE USUARIO WHERE ID=' + parseInt(requisicao.params.id), resposta); 
	// resposta.end(resposta.json({ mensagem: 'Deletado!'})); 
})

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


rota.get('/estado', (requisicao, resposta) =>{
execSQL('SELECT * FROM ESTADO', resposta);
})

/*
rota.get('/estado/:id?', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.id)
	filtro = ' WHERE CODESTADO =' + parseInt(requisicao.params.id);
execSQL('SELECT * from ESTADO' + filtro, resposta);
})*/


/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


rota.get('/noticia', (requisicao, resposta) =>{
execSQL('SELECT * FROM NOTICIA', resposta);
})

/*
rota.get('/noticia/:id?', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.id)
	filtro = ' WHERE CODNOTICIA =' + parseInt(requisicao.params.id);
execSQL('SELECT * from NOTICIA' + filtro, resposta);
})*/

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

rota.get('/pergunta', (requisicao, resposta) =>{
execSQL('SELECT * FROM PERGUNTA', resposta);
})

/*
rota.get('/pergunta/:id?', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.id)
	filtro = ' WHERE CODPERGUNTA =' + parseInt(requisicao.params.id);
execSQL('SELECT * from PERGUNTA' + filtro, resposta);
})*/