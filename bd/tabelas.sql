create table Estado
(
	codEstado int primary key,
	nome varchar(15) not null,
	area varchar(20) not null,
	populacao varchar(10) not null,
	pib varchar(15) not null,
	outros ntext not null,
	regiao varchar(15) not null
)

insert into Estado values(1,'Acre','164.123,040km2','829.619','','','Norte')
insert into Estado values(2,'Alagoas','27.848,140km2','3.375.823','','','Nordeste')
insert into Estado values(3,'Amap�','142.828.521km2','807.810','','','Norte')
insert into Estado values(4,'Amazonas','1.559.146,876km2','4.063.614','','','Norte')
insert into Estado values(5,'Bahia','564.733,177km2','15.344.447','','','Nordeste')
insert into Estado values(6,'Cear�','148.920km2','9.020.460','','','Nordeste')
insert into Estado values(7,'Distrito Federal','5.779,999km2','3.039.444','','','Centro-Oeste')
insert into Estado values(8,'Esp�rito Santo','46.095,583km2','3.973.697','','','Sudeste')
insert into Estado values(9,'Goi�s','340.111,783km2','6.730.848','','','Centro-Oeste')
insert into Estado values(10,'Maranh�o','331.937,450km2','7.000.229','','','Nordeste')
insert into Estado values(11,'Mato Grosso','903.378,292km2','3.344.544','','','Centro-Oeste')
insert into Estado values(12,'Mato Grosso do Sul','357.145,532km2','2.713.147','','','Centro-Oeste')
insert into Estado values(13,'Minas Gerais','586.522,122km2','21.119.536','','','Sudeste')
insert into Estado values(14,'Par�','1.247.954,666km2','8.366.628','','','Norte')
insert into Estado values(15,'Para�ba','56.469,778km2','4.025.558','','','Nordeste')
insert into Estado values(16,'Paran�','199.307,922km2','11.320.892','','','Sul')
insert into Estado values(17,'Pernambuco','98.149,119km2','9.473.266','','','Nordeste')
insert into Estado values(18,'Piau�','251.577,738km2','3.204.028','','','Nordeste')
insert into Estado values(19,'Rio de Janeiro','43.780,172km2','16.718.956','','','Sudeste')
insert into Estado values(20,'Rio Grande do Norte','52.811,126km2','3.507.003','','','Nordeste')
insert into Estado values(21,'Rio Grande do Sul','281.730,223km2','11.286.500','','','Sul')
insert into Estado values(22,'Rond�nia','237.590,543km2','1.787.279','','','Norte')
insert into Estado values(23,'Roraima','224.300,506km2','522.636','','','Norte')
insert into Estado values(24,'Santa Catarina','95.736,165km2','6.910.553','','','Sul')
insert into Estado values(25,'S�o Paulo','248.222,362km2','45.094.866','','','Sudeste')
insert into Estado values(26,'Sergipe','21.915,116km2','2.265.779','','','Nordeste')
insert into Estado values(27,'Tocantins','277.620,914km2','1.550.194','','','Norte')

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
insert into Perguntas values(2,'Qual foi o presidente que governou por mais tempo?','Get�lio Vargas',5)
insert into Perguntas values(3,'Quanto durou o menor mandato presidencial brasileiro?','3 dias',10)
insert into Perguntas values(4,'Quanto durou o maior mandato presidencial brasileiro?','15 anos',5)
insert into Perguntas values(5,'Quanto tempo durou a Era Vargas?','15 anos e 3 meses',5)
insert into Perguntas values(6,'Quantos anos Dom Pedro II governou o Brasil?','58 anos',10)
insert into Perguntas values(7,'Qual o estado brasileiro com menor n�mero de menos habitantes?','Roraima',15)
insert into Perguntas values(8,'Qual o estado brasileiro com maior n�mero de menos habitantes?','S�o Paulo',5)
insert into Perguntas values(9,'Qual o estado brasileiro com com menor densidade demografica?','Roraima',15)
insert into Perguntas values(10,'Qual unidade federativa brasileira com com maior densidade demografica?','Distrito Federal',10)
insert into Perguntas values(11,'Qual o estado brasileiro com com maior PIB?','S�o Paulo',5)
insert into Perguntas values(12,'Qual � o estado brasileiro com menor PIB?','Roraima',10)
insert into Perguntas values(13,'Qual � o estado com maior n�mero de presidentes nascidos?','Minas Gerais',10)
insert into Perguntas values(14,'Qual � o unico presidente do Brasil que n�o nasceu em solo brasileiro?','Itamar Franco',10)
insert into Perguntas values(15,'Qual presidente nasceu em 1882 mas na juventude, alterou alguns documentos, para fazer alterar o ano de nascimento para 1883?','Get�lio Vargas',10)
insert into Perguntas values(16,'Qual foi o ano em que mais governantes nasceram?','1905',20)
insert into Perguntas values(17,'Qual � o estado brasileiro com maior n�mero de munic�pios?','Minas Gerais',10)
insert into Perguntas values(18,'Qual � o estado brasileiro com menor n�mero de munic�pios?','Roraima',10)
insert into Perguntas values(19,'Qual � o menor estado brasileiro?','Sergipe',10)
insert into Perguntas values(20,'Qual � o maior estado brasileiro?','Amazonas',5)
insert into Perguntas values(21,'Qual o estado brasileiro com maior expectativa de vida?','Santa Catarina',10)
insert into Perguntas values(22,'Qual o estado brasileiro com menor expectativa de vida?','Maranh�o',10)
insert into Perguntas values(23,'Como o Brasil foi chamado inicialmente quando "descoberto"?','Terra de Vera Cruz',10)
insert into Perguntas values(24,'Qual � a unidade federativa brasileira que tem maior IDH?','Distrito Federal',10)
insert into Perguntas values(25,'Qual � a unidade federativa brasileira que tem menor IDH?','Alagoas',10)
insert into Perguntas values(26,'Qual � a unidade federativa brasileira que tem menor mortalidade infantil?','S�o Paulo',5)
insert into Perguntas values(27,'Qual � a unidade federativa brasileira que tem maior mortalidade infantil?','Distrito Federal',10)
insert into Perguntas values(28,'Qual foi o primeiro presidente a sofrer um processo de impeachment?','Get�lio Vargas',5)
insert into Perguntas values(29,'Qual foi o presidente do brasil que entregou uma carta de ren�ncia, na esperan�a de que fosse negada, mas foi aceita?','J�nio Quadros',5)
insert into Perguntas values(30,'Qual foi o nome dado ao Brasil ap�s o Golpe da Rep�blica?','Estados Unidos do Brasil',5)

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