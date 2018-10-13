create table Estado
(
	codEstado int primary key,
	nome varchar(20) not null,
	area varchar(20) not null,
	populacao varchar(10) not null,
	pib varchar(30) not null,
	esperancaDeVida varchar(10) not null,
	mortalidadeInfantil varchar(10) not null,
	alfabetizacao varchar(10) not null,
	idh varchar(10) not null,
	regiao varchar(15) not null
)

insert into Estado values(1,'Acre','164.123,040km2','829.619','R$13.459.000.000','73,6','17,6�','84,8%','0,663','Norte')
insert into Estado values(2,'Alagoas','27.848,140km2','3.375.823','R$40.975.000.000','76,2','14,4�','78,9%','0,631','Nordeste')
insert into Estado values(3,'Amap�','142.828.521km2','807.810','R$16.968.000.000','73,8','23,5�','92,1%','0,747','Norte')
insert into Estado values(4,'Amazonas','1.559.146,876km2','4.063.614','R$86.560.000.000','71,7','18,8�','90,4%','0,674','Norte')
insert into Estado values(5,'Bahia','564.733,177km2','15.344.447','R$245.024.862.000','73,2','18,1�','84,6%','0,660','Nordeste')
insert into Estado values(6,'Cear�','148.920km2','9.020.460','R$126.054.000.000','73,6','15,1�','82,8%','0,682','Nordeste')
insert into Estado values(7,'Distrito Federal','5.779,999km2','3.039.444','R$149.906.000.000','77,8','10,8�','96,7%','0,824','Centro-Oeste')
insert into Estado values(8,'Esp�rito Santo','46.095,583km2','3.973.697','R$128.784.000.000','77,9','9,2�','92,5%','0,740','Sudeste')
insert into Estado values(9,'Goi�s','340.111,783km2','6.730.848','R$75.015.000.000','71,0','19,3�','82,7%','0,735','Centro-Oeste')
insert into Estado values(10,'Maranh�o','331.937,450km2','7.000.229','R$76.842.000.000','70,3','22,4�','80,7%','0,678','Nordeste')
insert into Estado values(11,'Mato Grosso','903.378,292km2','3.344.544','R$10.418.000.000','74,0','17,3�','92,2%','0,725','Centro-Oeste')
insert into Estado values(12,'Mato Grosso do Sul','357.145,532km2','2.713.147','R$78.950.000.000','75,3','14,5�','93,0%','0,729','Centro-Oeste')
insert into Estado values(13,'Minas Gerais','586.522,122km2','21.119.536','R$516.083.000.000','77,0','11,4�','92,3%','0,731','Sudeste')
insert into Estado values(14,'Par�','1.247.954,666km2','8.366.628','R$130.883.000.000','71,9','17,1�','88,8%','0,646','Norte')
insert into Estado values(15,'Para�ba','56.469,778km2','4.025.558','R$38.731.000.000','72,9','17,0�','79,8%','0,658','Nordeste')
insert into Estado values(16,'Paran�','199.307,922km2','11.320.892','R$348.100.000.000','76,8','9,7�','94,2%','0,749','Sul')
insert into Estado values(17,'Pernambuco','98.149,119km2','9.473.266','R$155.143.000.000','73,5','13,3�','83,3%','0,673','Nordeste')
insert into Estado values(18,'Piau�','251.577,738km2','3.204.028','R$37.723.000.000','70,9','19,7�','78,9%','0,646','Nordeste')
insert into Estado values(19,'Rio de Janeiro','43.780,172km2','16.718.956','R$626.320.000.000','75,9','11,9�','95,9%','0,761','Sudeste')
insert into Estado values(20,'Rio Grande do Norte','52.811,126km2','3.507.003','R$36.103.000.000','75,5','15,3�','82,6%','0,684','Nordeste')
insert into Estado values(21,'Rio Grande do Sul','281.730,223km2','11.286.500','R$357.816.000.000','77,5','9,9�','95,8%','0,746','Sul')
insert into Estado values(22,'Rond�nia','237.590,543km2','1.787.279','R$34.031.000.000','71,1','20,4�','92,1%','0,690','Norte')
insert into Estado values(23,'Roraima','224.300,506km2','522.636','R$9.744.000.000','71,2','17,4�','90,3%','0,707','Norte')
insert into Estado values(24,'Santa Catarina','95.736,165km2','6.910.553','R$197.470.000.000','78,7','9,5�','96,1%','0,774','Sul')
insert into Estado values(25,'S�o Paulo','248.222,362km2','45.094.866','R$1.858.000.000.000','77,8','10,2�','95,9%','0,783','Sudeste')
insert into Estado values(26,'Sergipe','21.915,116km2','2.265.779','R$37.472.000.000','72,4','17,0�','83,0%','0,665','Nordeste')
insert into Estado values(27,'Tocantins','277.620,914km2','1.550.194','R$28.930.000.000','73,4','15,8�','89,6%','0,699','Norte')

create table Usuario
(
	codUsuario int primary key,
	nomeUsuario varchar(30) not null,
	email varchar(100) not null,
	senha varchar(30) not null,
	pontuacao int not null
)

insert into Usuario values(1,'pedro','pedro@gmail.com','taok',0)

create table Pergunta
(
	codPergunta int primary key,
	texto ntext not null,
	resposta ntext not null,
	pontos int not null
)

insert into Pergunta values(1,'Qual foi o presidente que governou por menos tempo?','Carlos Luz',10)
insert into Pergunta values(2,'Qual foi o presidente que governou por mais tempo?','Get�lio Vargas',5)
insert into Pergunta values(3,'Quanto durou o menor mandato presidencial brasileiro?','3 dias',10)
insert into Pergunta values(4,'Quanto durou o maior mandato presidencial brasileiro?','15 anos',5)
insert into Pergunta values(5,'Quanto tempo durou a Era Vargas?','15 anos e 3 meses',5)
insert into Pergunta values(6,'Quantos anos Dom Pedro II governou o Brasil?','58 anos',10)
insert into Pergunta values(7,'Qual o estado brasileiro com menor n�mero de habitantes?','Roraima',15)
insert into Pergunta values(8,'Qual o estado brasileiro com maior n�mero de habitantes?','S�o Paulo',5)
insert into Pergunta values(9,'Qual o estado brasileiro com com menor densidade demografica?','Roraima',15)
insert into Pergunta values(10,'Qual unidade federativa brasileira com com maior densidade demografica?','Distrito Federal',10)
insert into Pergunta values(11,'Qual o estado brasileiro com com maior PIB?','S�o Paulo',5)
insert into Pergunta values(12,'Qual � o estado brasileiro com menor PIB?','Roraima',10)
insert into Pergunta values(13,'Qual � o estado com maior n�mero de presidentes nascidos?','Minas Gerais',10)
insert into Pergunta values(14,'Qual � o unico presidente do Brasil que n�o nasceu em solo brasileiro?','Itamar Franco',10)
insert into Pergunta values(15,'Qual presidente nasceu em 1882 mas na juventude, alterou alguns documentos, para fazer alterar o ano de nascimento para 1883?','Get�lio Vargas',10)
insert into Pergunta values(16,'Qual foi o ano em que mais governantes nasceram?','1905',20)
insert into Pergunta values(17,'Qual � o estado brasileiro com maior n�mero de munic�pios?','Minas Gerais',10)
insert into Pergunta values(18,'Qual � o estado brasileiro com menor n�mero de munic�pios?','Roraima',10)
insert into Pergunta values(19,'Qual � o menor estado brasileiro?','Sergipe',10)
insert into Pergunta values(20,'Qual � o maior estado brasileiro?','Amazonas',5)
insert into Pergunta values(21,'Qual o estado brasileiro com maior expectativa de vida?','Santa Catarina',10)
insert into Pergunta values(22,'Qual o estado brasileiro com menor expectativa de vida?','Maranh�o',10)
insert into Pergunta values(23,'Como o Brasil foi chamado inicialmente quando "descoberto"?','Terra de Vera Cruz',10)
insert into Pergunta values(24,'Qual � a unidade federativa brasileira que tem maior IDH?','Distrito Federal',10)
insert into Pergunta values(25,'Qual � a unidade federativa brasileira que tem menor IDH?','Alagoas',10)
insert into Pergunta values(26,'Qual � a unidade federativa brasileira que tem menor mortalidade infantil?','S�o Paulo',5)
insert into Pergunta values(27,'Qual � a unidade federativa brasileira que tem maior mortalidade infantil?','Distrito Federal',10)
insert into Pergunta values(28,'Qual foi o primeiro presidente a sofrer um processo de impeachment?','Get�lio Vargas',5)
insert into Pergunta values(29,'Qual foi o presidente do brasil que entregou uma carta de ren�ncia, na esperan�a de que fosse negada, mas foi aceita?','J�nio Quadros',5)
insert into Pergunta values(30,'Qual foi o nome dado ao Brasil ap�s o Golpe da Rep�blica?','Estados Unidos do Brasil',5)

create table UsuarioPergunta
(
	codigo int primary key,
	codPergunta int not null,
	codUsuario int not null,

	constraint fkCodUsuario foreign key(codUsuario) references Usuario(codUsuario),
	constraint fkCodPergunta foreign key(codPergunta) references Pergunta(codPergunta),
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