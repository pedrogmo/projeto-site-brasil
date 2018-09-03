create table Estado
(
	codEstado int primary key,
	nome varchar(15) not null,
	informacao ntext not null,
	regiao varchar(15) not null
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

create table Curiosidade
(
	codCuriosidade int primary key,
	texto ntext not null,
	tipo varchar(15) not null
)

create table EraPolitica
(
	codEra int primary key,
	nome varchar(30) not null,
	inicio dateTime not null,
	fim dateTime not null,
	textoHistoria ntext not null,
)

create table Governante
(
	codGovernante int primary key,
	nome varchar(30) null,
	inicio dateTime not null,
	fim dateTime not null,
	partido varchar(30) not null
)

create table EraGovernante
(
	codigo int primary key,
	codGovernante int not null,
	codEra int not null

	constraint fkGovernante foreign key(codGovernante) references Governante(codGovernante),
	constraint fkEra foreign key(codEra) references EraPolitica(codEra)
)