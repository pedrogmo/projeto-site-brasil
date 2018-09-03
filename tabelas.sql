create table Estado
(
	codEstado int primary key,
	nome varchar(15) not null,
	informacao ntext not null
)

create table Usuario
(
	codUsuario int primary key,
	logUsuario varchar(30) not null,
	senha varchar(30) not null,
	codEstado int not null

	constraint fkEstado foreign key(codEstado) references Estado(codEstado)
)

create table Pergunta
(
	codPergunta int primary key,
	texto ntext not null,
	resposta ntext not null,
	pontos int not null
)

create table UsuarioPergunta
(
	codigo int primary key,
	codPergunta int not null,
	codUsuario int not null,

	constraint fkUsuario foreign key(codUsuario) references Usuario(codUsuario),
	constraint fkPergunta foreign key(codPergunta) references Pergunta(codPergunta)
)

create table Produto
(
	codProduto int primary key,
	nome varchar(30) not null,
	descricao ntext not null,
	preco money not null
)

create table Compra
(
	codCompra int primary key,
	codUsuario int not null,
	codProduto int not null,
	data dateTime not null
	
	constraint fkCompraUsuario foreign key(codusuario) references Usuario(codUsuario),
	constraint fkCompraProduto foreign key(codProduto) references Produto(codProduto)
)
