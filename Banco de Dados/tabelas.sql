create table Estado
(
	codEstado int primary key,
	nome varchar(15) not null,
	area varchar(10) not null,
	populacao int not null,
	pib varchar(10) not null,
	pibPerCapita varchar(10) not null,
	outros ntext not null,
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

insert into Perguntas values(1,'Qual foi o presidente que governou por menos tempo?','Carlos Luz',10)
insert into Perguntas values(2,'Qual foi o presidente que governou por mais tempo?','Getúlio Vargas',5)
insert into Perguntas values(3,'Quanto durou o menor mandato presidencial brasileiro?','3 dias',10)
insert into Perguntas values(4,'Quanto durou o maior mandato presidencial brasileiro?','15 anos',5)
insert into Perguntas values(5,'Quanto tempo durou a Era Vargas?','15 anos e 3 meses',5)
insert into Perguntas values(6,'Quantos anos Dom Pedro II governou o Brasil?','58 anos',10)
insert into Perguntas values(7,'Qual o estado brasileiro com menor número de menos habitantes?','Roraima',15)
insert into Perguntas values(8,'Qual o estado brasileiro com maior número de menos habitantes?','São Paulo',5)
insert into Perguntas values(9,'Qual o estado brasileiro com com menor densidade demografica?','Roraima',15)
insert into Perguntas values(10,'Qual unidade federativa brasileira com com maior densidade demografica?','Distrito Federal',10)
insert into Perguntas values(11,'Qual o estado brasileiro com com maior PIB?','São Paulo',5)
insert into Perguntas values(12,'Qual é o estado brasileiro com menor PIB?','Roraima',10)
insert into Perguntas values(13,'Qual é o estado com maior número de presidentes nascidos?','Minas Gerais',10)
insert into Perguntas values(14,'Qual é o unico presidente do Brasil que não nasceu em solo brasileiro?','Itamar Franco',10)
insert into Perguntas values(15,'Qual presidente nasceu em 1882 mas na juventude, alterou alguns documentos, para fazer alterar o ano de nascimento para 1883?','Getúlio Vargas',10)
insert into Perguntas values(16,'Qual foi o ano em que mais governantes nasceram?','1905',20)
insert into Perguntas values(17,'Qual é o estado brasileiro com maior número de municípios?','Minas Gerais',10)
insert into Perguntas values(18,'Qual é o estado brasileiro com menor número de municípios?','Roraima',10)
insert into Perguntas values(19,'Qual é o menor estado brasileiro?','Sergipe',10)
insert into Perguntas values(20,'Qual é o maior estado brasileiro?','Amazonas',5)
insert into Perguntas values(21,'Qual o estado brasileiro com maior expectativa de vida?','Santa Catarina',10)
insert into Perguntas values(22,'Qual o estado brasileiro com menor expectativa de vida?','Maranhão',10)
insert into Perguntas values(23,'Como o Brasil foi chamado inicialmente quando "descoberto"?','Terra de Vera Cruz',10)
insert into Perguntas values(24,'Qual é a unidade federativa brasileira que tem maior IDH?','Distrito Federal',10)
insert into Perguntas values(25,'Qual é a unidade federativa brasileira que tem menor IDH?','Alagoas',10)
insert into Perguntas values(26,'Qual é a unidade federativa brasileira que tem menor mortalidade infantil?','São Paulo',5)
insert into Perguntas values(27,'Qual é a unidade federativa brasileira que tem maior mortalidade infantil?','Distrito Federal',10)
insert into Perguntas values(28,'Qual foi o primeiro presidente a sofrer um processo de impeachment?','Getúlio Vargas',5)
insert into Perguntas values(29,'Qual foi o presidente do brasil que entregou uma carta de renúncia, na esperança de que fosse negada, mas foi aceita?','Jânio Quadros',5)
insert into Perguntas values(30,'Qual foi o nome dado ao Brasil após o Golpe da República?','Estados Unidos do Brasil',5)

create table UsuarioPergunta
(
	codigo int primary key,
	codPergunta int not null,
	codUsuario int not null,

	constraint fkUsuario foreign key(codUsuario) references Usuario(codUsuario),
	constraint fkPergunta foreign key(codPergunta) references Pergunta(codPergunta)
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