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
	codUsuario int identity(1,1) primary key,
	nomeUsuario varchar(30) not null,
	email varchar(30) not null,
	senha varchar(30) not null,
	pontuacao int not null,
	dataAniversario varchar(10) not null,
	nacionalidade varchar(30) not null,
	jaVotou bit not null,
	foto varchar(max)
)

select * from usuario

create table Pergunta
(
	codPergunta int primary key,
	texto ntext not null,
	resposta ntext not null,
	pontos int not null
)

insert into Pergunta values(1,'Em qual ano o Brasil se tornou independente de Portugal?','1822',5)
insert into Pergunta values(2,'Qual foi o presidente que governou por mais tempo?','Get�lio Vargas',5)
insert into Pergunta values(3,'Em qual ano os escravos brasileiros foram libertos?','1888',5)
insert into Pergunta values(4,'Quanto durou o maior mandato presidencial brasileiro?','15 anos',5)
insert into Pergunta values(5,'Qual � a unidade federativa brasileira que tem maior IDH?','Distrito Federal',10)
insert into Pergunta values(6,'Por quanto tempo Dom Pedro II governou o Brasil?','59 anos',10)
insert into Pergunta values(7,'Qual foi a sigla dada � Revolu��o Constitucionalista em S�o Paulo?','MMDC',15)
insert into Pergunta values(8,'Qual o estado brasileiro com maior n�mero de habitantes?','S�o Paulo',5)
insert into Pergunta values(9,'Qual o estado brasileiro com com menor densidade demografica?','Roraima',10)
insert into Pergunta values(10,'Qual unidade federativa brasileira com com maior densidade demografica?','Distrito Federal',10)
insert into Pergunta values(11,'Qual o estado brasileiro com com maior PIB?','S�o Paulo',5)
insert into Pergunta values(12,'Qual � o estado brasileiro com menor PIB?','Roraima',10)
insert into Pergunta values(13,'Quem foi o principal atuante do movimento tenentista?','Lu�s Carlos Prestes',15)
insert into Pergunta values(14,'Quem foi o jornalista opositor de Get�lio Vargas?','Carlos Lacerda',15)
insert into Pergunta values(15,'Qual presidente se suicidou como estrat�gia pol�tica?','Get�lio Vargas',5)
insert into Pergunta values(16,'Qual foi o primeiro pressidente a assumir ap�s a redemocratiza��o?','Jos� Sarney',5)
insert into Pergunta values(17,'Qual foi o rei portugu�s que veio ao Brasil em 1808?','Dom Jo�o VI',5)
insert into Pergunta values(18,'Qual foi o nome do movimento do qual Tiradentes fez parte?','Inconfid�ncia Mineira',15)
insert into Pergunta values(19,'Qual � o menor estado brasileiro?','Sergipe',10)
insert into Pergunta values(20,'Qual � o maior estado brasileiro?','Amazonas',5)
insert into Pergunta values(21,'Qual o estado brasileiro com maior expectativa de vida?','Santa Catarina',10)
insert into Pergunta values(22,'Qual o estado brasileiro com menor expectativa de vida?','Maranh�o',10)
insert into Pergunta values(23,'Como o Brasil foi chamado inicialmente quando "descoberto"?','Terra de Vera Cruz',10)
insert into Pergunta values(24,'Qual foi o presidente que, acusado de ser comunista, sofreu um golpe?','Jo�o Goulart',5)
insert into Pergunta values(25,'Qual � a unidade federativa brasileira que tem menor IDH?','Alagoas',10)
insert into Pergunta values(26,'Qual � a unidade federativa brasileira que tem menor mortalidade infantil?','S�o Paulo',5)
insert into Pergunta values(27,'Qual � a unidade federativa brasileira que tem maior mortalidade infantil?','Amap�',10)
insert into Pergunta values(28,'Qual foi o primeiro presidente a sofrer um processo de impeachment?','Fernando Collor',5)
insert into Pergunta values(29,'Qual foi o presidente do brasil que entregou uma carta de ren�ncia, na esperan�a de que fosse negada, mas foi aceita?','J�nio Quadros',5)
insert into Pergunta values(30,'Qual foi o nome dado ao Brasil ap�s o Golpe da Rep�blica?','Estados Unidos do Brasil',10)

select * from Pergunta

create table EraHistorica
(
	codEra int primary key,
	nome varchar(30) not null,
	inicio varchar(10) not null,
	fim varchar(10) not null,
	desricao ntext not null
)

insert into EraHistorica values(1, 'Brasil Pr�-Colonial', '1500', '1530', 'O Brasil ainda territ�rio das muitas tribos nativas ind�genas e que se surpreendeu com o que viria a ser o processo de coloniza��o da coroa portuguesa.')
insert into EraHistorica values(2, 'Brasil Colonial', '1530', '1822', 'Um Brasil de primeiras divis�es e autoridades engajado no processo catequ�tico de ind�genas e na expans�o territorial para o corte do Pau Brasil e a busca de metais preciosos.')
insert into EraHistorica values(3, 'Brasil Imp�rio', '1822', '1889', 'O Brasil, dessa vez, independente, sob o governo mon�rquico dos Pedros pai (Dom Pedro I) e filho (Dom Pedro II) at� conflito que gerou a rep�blica.')
insert into EraHistorica values(4, 'Rep�blica Velha', '1889', '1930', 'O Brasil dos primeiros (e interesseiros) presidentes coronelistas e adeptos da pol�tica do caf� com leite, que foi barrada pela Era Vargas.')
insert into EraHistorica values(5, 'Era Vargas', '1930', '1945', 'O Brasil em seu maior governo, o conhecido por ser marcado com nacionalismo e notas do que pode ser tido como fascismo.')
insert into EraHistorica values(6, 'Rep�blica Populista', '1945', '1964', 'Um Brasil de recomposi��o da Era Vargas, com presidentes reconhecidos pelas atitudes pol�micas e que viriam a ser espantados pelos militares.')
insert into EraHistorica values(7, 'Regime Militar', '1964', '1985', 'O Brasil dos 21 anos nas m�os de patentes do Ex�rcito. Um peda�o da Hist�ria nacional que mostra sequelas pol�ticas at� os dias atuais.')
insert into EraHistorica values(8, 'Rep�blica Nova', '1985', '-', 'Um Brasil da renova��o presidencial e com seus governos vidrados em planos de foco econ�mico. P.S: estamos nele at� hoje!')

create table Governante
(
	codGovernante int primary key,
	nome varchar(30) null,
	inicio varchar(10) not null,
	fim varchar(10) not null,
	partido varchar(30) not null
)

insert into Governante values(1, 'Dom Pedro I', '1822', '1831', 'Nenhum')
insert into Governante values(2, 'Dom Pedro II', '1840', '1889', 'Nenhum')
insert into Governante values(3, 'Deodoro da Fonseca', '1889', '1891', 'Nenhum')
insert into Governante values(4, 'Floriano Peixoto', '1891', '1894', 'Nenhum')
insert into Governante values(5, 'Prudente de Morais', '1894', '1898', 'PR Federal')
insert into Governante values(6, 'Campos Sales', '1898', '1902', 'PRP')
insert into Governante values(7, 'Rodrigues Alves', '1902', '1906', 'PRP')
insert into Governante values(8, 'Afonso Pena', '1906', '1909', 'PRM')
insert into Governante values(9, 'Nilo Pe�anha', '1909', '1910', 'PRF')
insert into Governante values(10, 'Hermes da Fonseca', '1910', '1914', 'PRC')
insert into Governante values(11, 'Venceslau Br�s', '1914', '1918', 'PRP')
insert into Governante values(12, 'Delfim Moreira', '1918', '1919', 'PRM')
insert into Governante values(13, 'Epit�cio Pessoa', '1919', '1922', 'PRM')
insert into Governante values(14, 'Artur Bernardes', '1922', '1926', 'PRM')
insert into Governante values(15, 'Washington Lu�s', '1926', '1930', 'PRP')
insert into Governante values(16, 'Get�lio Vargas', '1930', '1945', 'AL')
insert into Governante values(17, 'Jos� Linhares', '1945', '1946', 'Nenhum')
insert into Governante values(18, 'Eurico Gaspar Dutra', '1946', '1951', 'PSD')
insert into Governante values(19, 'Get�lio Vargas', '1951', '1954', 'PTB')
insert into Governante values(20, 'Caf� Filho', '1954', '1955', 'PSP')
insert into Governante values(21, 'Carlos Luz', '1955', '1955', 'PSD')
insert into Governante values(22, 'Nereu Ramos', '1955', '1956', 'PSD')
insert into Governante values(23, 'Juscelino Kubitschek', '1956', '1961', 'PSD')
insert into Governante values(24, 'J�nio Quadros', '1961', '1961', 'PTN')
insert into Governante values(25, 'Rainieri Mazilli', '1961', '1961', 'PSD')
insert into Governante values(26, 'Jo�o Goulart', '1961', '1964', 'PTB')
insert into Governante values(27, 'Rainieri Mazilli', '1964', '1964', 'PSD')
insert into Governante values(28, 'Humberto Castelo Branco', '1964', '1967', 'ARENA')
insert into Governante values(29, 'Artur da Costa e Silva', '1967', '1969', 'ARENA')
insert into Governante values(30, 'Em�lio Garrastazu M�dici', '1969', '1974', 'ARENA')
insert into Governante values(31, 'Ernesto Geisel', '1974', '1979', 'ARENA')
insert into Governante values(32, 'Jo�o Figueiredo', '1979', '1985', 'ARENA')
insert into Governante values(33, 'Jos� Sarney', '1985', '1990', 'PMDB')
insert into Governante values(34, 'Fernando Collor', '1990', '1992', 'PRN')
insert into Governante values(35, 'Itamar Franco', '1992', '1995', 'PMDB')
insert into Governante values(36, 'Fernando Henrique Cardoso', '1995', '2003', 'PSDB')
insert into Governante values(37, 'Luiz In�cio Lula da Silva', '2003', '2011', 'PT')
insert into Governante values(38, 'Dilma Rousseff', '2011', '2016', 'PT')
insert into Governante values(39, 'Michel Temer', '2016', '2019', 'PMDB')

create table Candidato
(
	codCandidato int primary key,
	nome varchar(50) not null,
	descricao ntext not null,
	urlCand varchar(30) not null,
	urlPart varchar(30) not null,
	votos int not null
)

select * from Candidato
update Candidato set votos = 0
select * from Candidato order by votos desc

insert into Candidato values(1 , 'Marina Silva', 'Marina Osmarina da Silva Vaz de Lima, nascida Maria Osmarina da Silva � uma historiadora, professora, psicopedagoga, ambientalista e pol�tica brasileira filiada � Rede Sustentabilidade.', './img/eleicoes/marina.jpg', './img/partidos/rede.png', 0)
insert into Candidato values(2 , 'Jair Bolsonaro', 'Jair Messias Bolsonaro � um militar da reserva e pol�tico brasileiro, filiado ao Partido Social Liberal. � deputado federal desde 1991, atualmente em seu s�timo mandato, eleito pelo Partido Progressista.', './img/eleicoes/bolsonaro.jpg', './img/partidos/psl.png', 0)
insert into Candidato values(3 , 'Fernando Haddad', 'Fernando Haddad � um acad�mico, advogado e pol�tico brasileiro, filiado ao Partido dos Trabalhadores. Foi ministro da Educa��o de 2005 a 2012, nos governos Lula e Dilma Rousseff, e prefeito da cidade de S�o Paulo de 2013 a 2016.', './img/eleicoes/haddad.jpg', './img/partidos/pt.png', 0)
insert into Candidato values(4 , 'Ciro Gomes', 'Ciro Ferreira Gomes � um pol�tico, advogado e professor universit�rio brasileiro filiado ao Partido Democr�tico Trabalhista, do qual � vice-presidente e, neste ano, � candito � presid�ncia.', './img/eleicoes/ciro.jpg', './img/partidos/pdt.png', 0)
insert into Candidato values(5 , 'Geraldo Alckmin', 'Geraldo Jos� Rodrigues Alckmin Filho � um m�dico, e pol�tico brasileiro, filiado ao Partido da Social Democracia Brasileira. Foi Governador do Estado de S�o Paulo, quando renunciou para disputar as elei��es de outubro de 2018.', './img/eleicoes/alckimin.jpg', './img/partidos/psdb.png', 0)
insert into Candidato values(6 , '�lvaro Dias', 'Alvaro Fernandes Dias � um historiador, professor e pol�tico brasileiro. Filiado ao Podemos, exerce atualmente o cargo de Senador da Rep�blica Federativa do Brasil, representando o Estado do Paran�.', './img/eleicoes/alvaro.jpg', './img/partidos/podemos.png', 0)
insert into Candidato values(7 , 'Henrique Meirelles', 'Henrique de Campos Meirelles � um executivo da �rea financeira, pol�tico e ex-Ministro da Fazenda do Brasil. Atualmente � filiado ao Partido Movimento Democr�tico Brasileiro, concorrendo ao cargo de presidente do Brasil em 2018.', './img/eleicoes/henrique.jpg', './img/partidos/pmdb.png', 0)
insert into Candidato values(8 , 'Jo�o Amo�do', 'Jo�o Dionisio Filgueira Barreto Amo�do, � um pol�tico, banqueiro, engenheiro e administrador de empresas brasileiras. � um dos fundadores do Partido Novo e, atualmente, candidato � Presid�ncia da Rep�blica em 2018.', './img/eleicoes/amoedo.jpg', './img/partidos/novo.png', 0)
insert into Candidato values(9 , 'Guilherme Boulos', 'Guilherme Castro Boulos � um ativista pol�tico e escritor brasileiro, filiado ao Partido Socialismo e Liberdade e � membro da Coordena��o Nacional do Movimento dos Trabalhadores Sem Teto.', './img/eleicoes/guilherme.jpg', './img/partidos/psol.png', 0)
insert into Candidato values(10, 'Jos� Maria Eymael', 'Jos� Maria Eymael � um advogado, empres�rio, fundador e atual presidente do Partido Democracia Crist�. Foi candidato por quatro vezes, mas devido ao pouco tempo de sua campanha, ele recebeu poucos votos.', './img/eleicoes/jose.jpg', './img/partidos/psdc.png', 0)
insert into Candidato values(11, 'Cabo Daciolo', 'Benevenuto Daciolo Fonseca dos Santos � um bombeiro militar e pol�tico brasileiro filiado ao partido Patriota. Em 2014, foi eleito deputado federal pelo Rio de Janeiro e, atualmente, est� filiado ao Patriota.', './img/eleicoes/daciolo.png', './img/partidos/patriota.png', 0)
insert into Candidato values(12, 'Jo�o Goulart Filho', 'Jo�o Vicente Fontella Goulart, tamb�m chamado de Jo�o Goulart Filho, � um fil�sofo e pol�tico brasileiro. Neste ano � candidato � presid�ncia do Brasil, sendo afiliado ao Partido P�tria Livre.', './img/eleicoes/jangoson.jpg', './img/partidos/ppl.png', 0)
insert into Candidato values(13, 'Vera L�cia', 'Vera L�cia Pereira da Silva Salgado � uma pol�tica brasileira, filiada ao Partido Socialista dos Trabalhadores Unificado. � candidata � presid�ncia da Rep�blica na elei��o presidencial de 2018. Foi uma das fundadoras do PSTU e � a presidente do partido em Sergipe.', './img/eleicoes/vera.jpg', './img/partidos/pstu.png', 0)

create table Noticia
(
	codNoticia int primary key,
	tema varchar(20) not null,
	titulo ntext not null,
	subtitulo ntext not null,	
	urlImagem varchar(30) not null,
	link  ntext not null,
	siteFonte varchar(20) not null,
	dataPublicacao varchar(10) not null
)
select * from Noticia
insert into Noticia values(1,  '', '', '', '', '', '', '')
insert into Noticia values(2,  '', '', '', '', '', '', '')
insert into Noticia values(3,  '', '', '', '', '', '', '')
insert into Noticia values(4,  '', '', '', '', '', '', '')
insert into Noticia values(5,  'Pol�tica' , 'Veja as propostas de Paulo Guedes, assessor econ�mico da campanha de Jair Bolsonaro', 'Entre as propostas, economista fala em mudar as regras do or�amento da Uni�o, instituir o sistema de capitaliza��o para a Previd�ncia e avan�ar na agenda de privatiza��es.', './img/noticias/01.jpg', 'https://g1.globo.com/politica/eleicoes/2018/noticia/2018/10/21/veja-as-propostas-de-paulo-guedes-assessor-economico-da-campanha-de-jair-bolsonaro.ghtml', 'G1', '25/10/2018')
insert into Noticia values(6,  '', '', '', '', '', '', '')
insert into Noticia values(7,  '', '', '', '', '', '', '')
insert into Noticia values(8,  '', '', '', '', '', '', '')
insert into Noticia values(9,  '', '', '', '', '', '', '')
insert into Noticia values(10, '', '', '', '', '', '', '')
insert into Noticia values(11, '', '', '', '', '', '', '')
insert into Noticia values(12, '', '', '', '', '', '', '')

create table Curiosidade
(
	codCuriosidade int primary key,
	texto ntext not null
)

insert into Curiosidade values(1  , 'O nome oficial do Brasil � �Rep�blica Federativa do Brasil�.')
insert into Curiosidade values(2  , 'A palavra �Brasil�, que significa �vermelho como uma brasa�, vem de pau brasil, uma �rvore que uma vez cresceu abundantemente ao longo da costa brasileira que produzia um corante vermelho.')
insert into Curiosidade values(3  , 'Os portugueses nomearam oficialmente o que hoje conhecemos como Terra do Santa Cruz, mas os comerciantes chamaram-na simplesmente Terra do Brasil.')
insert into Curiosidade values(4  , 'O ponto mais alto do Brasil � o Pico da Neblina, com 2.994 m.')
insert into Curiosidade values(5  , 'O Brasil � o quinto maior pa�s do mundo por popula��o: 201.009.622 pessoas.')
insert into Curiosidade values(6  , 'O Brasil � o quinto maior pa�s por massa terrestre no mundo, com 8,45 milh�es de quil�metros quadrados.')
insert into Curiosidade values(7  , 'O prato nacional brasileiro � a feijoada.')
insert into Curiosidade values(8  , 'O Brasil tornou-se o primeiro pa�s da Am�rica do Sul a aceitar mulheres em suas for�as armadas, nos anos 80.')
insert into Curiosidade values(9  , 'A bebida nacional brasileira � a caipirinha (mistura de cana-de-a��car, misturada com um copo de a��car, gelo e fatias de lim�o esmagada).')
insert into Curiosidade values(10 , 'A can��o assinatura da bossa nova brasileira � �A Garota de Ipanema�. A mulher que inspirou a can��o � Helo�sa Pinheiro.')
insert into Curiosidade values(11 , 'Os primeiros turistas oficiais chegaram ao Brasil em 1� de janeiro de 1502, como parte de uma viagem explorat�ria portuguesa liderada por Andr� Gon�alves, que nomeou a ba�a onde desembarcaram no Rio de Janeiro.')
insert into Curiosidade values(12 , 'O Brasil � o maior produtor de caf� do mundo.')
insert into Curiosidade values(13 , '12 das 30 cidades mais violentas do mundo est�o no Brasil.')
insert into Curiosidade values(14 , 'Brasil � o pa�s com o maior �ndice de desmatamento do mundo.')
insert into Curiosidade values(15 , 'A primeira vit�ria brasileira em Mundiais foi na Copa de 1930 contra a Bol�via. O Brasil ganhou de 4 x 0.')
insert into Curiosidade values(16 , 'O primeiro t�tulo brasileiro s� veio em 1958 durante a Copa da Su�cia. Foi, ali�s, nessa Copa que o mundo conheceu o jovem jogador Edson Arantes do Nascimento, o Pel�.')
insert into Curiosidade values(17 , 'Das 20 frutas mais consumidas no Brasil, apenas 3 s�o origin�rias do pa�s. S�o elas: o abacaxi, a goiaba e o maracuj�.')
insert into Curiosidade values(18 , 'A �rvore mais velha do Brasil � um jequitib�-rosa com 3.020 anos, que se encontra no Parque Estadual de Vassununga, em Santa Rita do Passa Quatro, em S�o Paulo.')
insert into Curiosidade values(19 , 'O Rio de Janeiro j� foi a capital de Portugal, o que faz da cidade a primeira e �nica capital europ�ia fora da pr�pria Europa.')
insert into Curiosidade values(20 , 'A maior comunidade japonesa fora do Jap�o est� no Brasil.')
insert into Curiosidade values(21 , 'O Brasil tem o segundo maior n�mero de aeroportos do mundo (2.498), atr�s apenas dos Estados Unidos.')
insert into Curiosidade values(22 , 'O Brasil � um dos �nicos pa�ses do mundo que oferece a cirurgia de mudan�a de sexo gratuitamente, pelo SUS, desde 2008.')
insert into Curiosidade values(23 , 'Nas pris�es federais no Brasil, os presos podem reduzir at� 4 dias no tempo de senten�a a cada livro que lerem, com um m�ximo de 12 obras por ano.')
insert into Curiosidade values(24 , 'Na pris�o de Santa Rita do Sapuca�, no sul de Minas, os detentos podem pedalar em bicicleta fixas, que geram energia para a cidade. Em troca, a cada 3 dias pedalando, a pena � reduzida em 1 dia.')
insert into Curiosidade values(25 , 'Das 12 cidades-sede da Copa de 2014, 7 figuravam no ranking das 50 cidades mais violentas do mundo.')
insert into Curiosidade values(26 , 'Mais de 90% dos carros novos produzidos no Brasil usam etanol. � o �nico pa�s do mundo onde o combust�vel � oferecido em 100% dos postos.')
insert into Curiosidade values(27 , 'Um porta-avi�es da Marinha chamado Minas Gerais j� foi colocado � venda no eBay, mas o an�ncio foi removido por ferir as pol�ticas do site.')
insert into Curiosidade values(28 , 'Com mais de 123 milh�es de fi�is, o Brasil ainda � o pa�s com o maior n�mero de cat�licos do mundo, � frente do M�xico, com 96,4 milh�es.')
insert into Curiosidade values(29 , 'O Brasil foi o primeiro pa�s do mundo a banir as c�maras de bronzeamento.')
insert into Curiosidade values(30 , 'Em 2001, cientistas descobriram um rio subterr�neo que corre abaixo do rio Amazonas. Batizado de rio Hamza, ele tem 6 mil Km de comprimento e est� a 4 mil metros de profundidade. Sua vaz�o � de 3 mil m3/s, maior que a do Rio S�o Francisco, que corta Minas e o Nordeste.')
insert into Curiosidade values(31 , 'O Brasil importou 4,8 milh�es de escravos da �frica, quase metade do total de escravos de todo continente americano. S� na cidade do Rio de Janeiro foram cerca de 2 milh�es.')
insert into Curiosidade values(32 , 'O povo ind�gena Bororo � o �nico grupo do mundo onde todas as pessoas t�m sangue do tipo �O�.')
insert into Curiosidade values(33 , 'A Marinha proibiu o desembarque na Ilha da Queimada Grande, no litoral de S�o Paulo, por causa do grande n�mero de cobras na regi�o: 5 cobras por metro quadrado.')
insert into Curiosidade values(34 , 'O principal exportador mundial de castanha-do-par� (tamb�m conhecida como castanha-do-brasil) � a Bol�via, e n�o o Brasil.')
insert into Curiosidade values(35 , 'Mais de 1.000 l�nguas eram faladas no Brasil antes do descobrimento. Hoje, apenas 180 ainda sobrevivem e apenas 11 s�o faladas por mais de 5.000 pessoas.')
insert into Curiosidade values(36 , 'A viola � um instrumento exclusivamente brasileiro.')
insert into Curiosidade values(37 , 'Segundo uma pesquisa da USP de 2009, 19,3% de todos os homens da cidade do Rio de Janeiro s�o gays ou bissexuais.')


/*
create table EraGovernante
(
	codigo int primary key,
	codGovernante int not null,
	codEra int not null

	constraint fkGovernante foreign key(codGovernante) references Governante(codGovernante),
	constraint fkEra foreign key(codEra) references EraPolitica(codEra)
)

create table UsuarioPergunta
(
	codigo int primary key,
	codPergunta int not null,
	codUsuario int not null,

	constraint fkCodUsuario foreign key(codUsuario) references Usuario(codUsuario),
	constraint fkCodPergunta foreign key(codPergunta) references Pergunta(codPergunta),
)
*/