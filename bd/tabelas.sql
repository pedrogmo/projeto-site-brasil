create table Estado
(
	codEstado int primary key,
	nome varchar(15) not null,
	area varchar(20) not null,
	populacao varchar(10) not null,
	pib varchar(15) not null,
	esperancaDeVida varchar(3) not null;
	mortalidadeInfantil varchar(4) not null;
	alfabetizacao varchar(4) not null,
	idh varchar(4) not null,
	regiao varchar(15) not null
)

insert into Estado values(1,'Acre','164.123,040km2','829.619','R$13.459.000.000','73,6','17,6‰','84,8%','0,663','Norte')
insert into Estado values(2,'Alagoas','27.848,140km2','3.375.823','R$40.975.000.000','','','','','Nordeste')
insert into Estado values(3,'Amapá','142.828.521km2','807.810','R$ 16.968.000.000','','','','','Norte')
insert into Estado values(4,'Amazonas','1.559.146,876km2','4.063.614','R$ 86.560.000.000','','','','','Norte')
insert into Estado values(5,'Bahia','564.733,177km2','15.344.447','R$ 245.024.862.000','','','','','Nordeste')
insert into Estado values(6,'Ceará','148.920km2','9.020.460','R$ 126.054.000.000','','','','','Nordeste')
insert into Estado values(7,'Distrito Federal','5.779,999km2','3.039.444','R$ 149.906.000.000','','','','','Centro-Oeste')
insert into Estado values(8,'Espírito Santo','46.095,583km2','3.973.697','R$ 128.784.000.000','','','','','Sudeste')
insert into Estado values(9,'Goiás','340.111,783km2','6.730.848','R$ 75.015.000.000','','','','','Centro-Oeste')
insert into Estado values(10,'Maranhão','331.937,450km2','7.000.229','R$ 76.842.000.000','','','','','Nordeste')
insert into Estado values(11,'Mato Grosso','903.378,292km2','3.344.544','R$ 10.418.000.000','','','','','Centro-Oeste')
insert into Estado values(12,'Mato Grosso do Sul','357.145,532km2','2.713.147','R$ 78.950.000.000','','','','','Centro-Oeste')
insert into Estado values(13,'Minas Gerais','586.522,122km2','21.119.536','R$ 516.083.000.000','','','','','Sudeste')
insert into Estado values(14,'Pará','1.247.954,666km2','8.366.628','R$ 130.883.000.000','','','','','Norte')
insert into Estado values(15,'Paraíba','56.469,778km2','4.025.558','R$ 38.731.000.000','','','','','Nordeste')
insert into Estado values(16,'Paraná','199.307,922km2','11.320.892','R$ 348.100.000.000','','','','','Sul')
insert into Estado values(17,'Pernambuco','98.149,119km2','9.473.266','R$ 155.143.000.000','','','','','Nordeste')
insert into Estado values(18,'Piauí','251.577,738km2','3.204.028','R$ 37.723.000.000','','','','','Nordeste')
insert into Estado values(19,'Rio de Janeiro','43.780,172km2','16.718.956','R$ 626.320.000.000','','','','','Sudeste')
insert into Estado values(20,'Rio Grande do Norte','52.811,126km2','3.507.003','R$ 36.103.000.000','','','','','Nordeste')
insert into Estado values(21,'Rio Grande do Sul','281.730,223km2','11.286.500','R$ 357.816.000.000','','','','','Sul')
insert into Estado values(22,'Rondônia','237.590,543km2','1.787.279','R$ 34.031.000.000','','','','','Norte')
insert into Estado values(23,'Roraima','224.300,506km2','522.636','R$ 9.744.000.000','','','','','Norte')
insert into Estado values(24,'Santa Catarina','95.736,165km2','6.910.553','R$ 197.470.000.000','','','','','Sul')
insert into Estado values(25,'São Paulo','248.222,362km2','45.094.866','R$ 1.858.000.000.000','','','','','Sudeste')
insert into Estado values(26,'Sergipe','21.915,116km2','2.265.779','R$ 37.472.000.000','','','','','Nordeste')
insert into Estado values(27,'Tocantins','277.620,914km2','1.550.194','R$ 28.930.000.000','','','','','Norte')

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

create table Candidato
(
	codCandidato int primary key,
	nome varchar(30) not null,
	partido varchar(50) not null,
	votos int not null,
)