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
	regiao varchar(15) not null,
	imagem varchar(30) not null
)

insert into Estado values(1,'Acre','164.123,040km2','829.619','R$13.459.000.000','73,6','17,6‰','84,8%','0,663','Norte', './img/estados/AC.png')
insert into Estado values(2,'Alagoas','27.848,140km2','3.375.823','R$40.975.000.000','76,2','14,4‰','78,9%','0,631','Nordeste', './img/estados/AL.png')
insert into Estado values(3,'Amapá','142.828.521km2','807.810','R$16.968.000.000','73,8','23,5‰','92,1%','0,747','Norte', './img/estados/AP.png')
insert into Estado values(4,'Amazonas','1.559.146,876km2','4.063.614','R$86.560.000.000','71,7','18,8‰','90,4%','0,674','Norte', './img/estados/AM.png')
insert into Estado values(5,'Bahia','564.733,177km2','15.344.447','R$245.024.862.000','73,2','18,1‰','84,6%','0,660','Nordeste', './img/estados/BA.png')
insert into Estado values(6,'Ceará','148.920km2','9.020.460','R$126.054.000.000','73,6','15,1‰','82,8%','0,682','Nordeste', './img/estados/CE.png')
insert into Estado values(7,'Distrito Federal','5.779,999km2','3.039.444','R$149.906.000.000','77,8','10,8‰','96,7%','0,824','Centro-Oeste', './img/estados/DF.png')
insert into Estado values(8,'Espírito Santo','46.095,583km2','3.973.697','R$128.784.000.000','77,9','9,2‰','92,5%','0,740','Sudeste', './img/estados/ES.png')
insert into Estado values(9,'Goiás','340.111,783km2','6.730.848','R$75.015.000.000','71,0','19,3‰','82,7%','0,735','Centro-Oeste', './img/estados/GO.png')
insert into Estado values(10,'Maranhão','331.937,450km2','7.000.229','R$76.842.000.000','70,3','22,4‰','80,7%','0,678','Nordeste', './img/estados/MA.png')
insert into Estado values(11,'Mato Grosso','903.378,292km2','3.344.544','R$10.418.000.000','74,0','17,3‰','92,2%','0,725','Centro-Oeste', './img/estados/MT.png')
insert into Estado values(12,'Mato Grosso do Sul','357.145,532km2','2.713.147','R$78.950.000.000','75,3','14,5‰','93,0%','0,729','Centro-Oeste', './img/estados/MS.png')
insert into Estado values(13,'Minas Gerais','586.522,122km2','21.119.536','R$516.083.000.000','77,0','11,4‰','92,3%','0,731','Sudeste', './img/estados/MG.png')
insert into Estado values(14,'Pará','1.247.954,666km2','8.366.628','R$130.883.000.000','71,9','17,1‰','88,8%','0,646','Norte', './img/estados/PA.png')
insert into Estado values(15,'Paraíba','56.469,778km2','4.025.558','R$38.731.000.000','72,9','17,0‰','79,8%','0,658','Nordeste', './img/estados/PB.png')
insert into Estado values(16,'Paraná','199.307,922km2','11.320.892','R$348.100.000.000','76,8','9,7‰','94,2%','0,749','Sul', './img/estados/PR.png')
insert into Estado values(17,'Pernambuco','98.149,119km2','9.473.266','R$155.143.000.000','73,5','13,3‰','83,3%','0,673','Nordeste', './img/estados/PE.png')
insert into Estado values(18,'Piauí','251.577,738km2','3.204.028','R$37.723.000.000','70,9','19,7‰','78,9%','0,646','Nordeste', './img/estados/PI.png')
insert into Estado values(19,'Rio de Janeiro','43.780,172km2','16.718.956','R$626.320.000.000','75,9','11,9‰','95,9%','0,761','Sudeste', './img/estados/RJ.png')
insert into Estado values(20,'Rio Grande do Norte','52.811,126km2','3.507.003','R$36.103.000.000','75,5','15,3‰','82,6%','0,684','Nordeste', './img/estados/RN.png')
insert into Estado values(21,'Rio Grande do Sul','281.730,223km2','11.286.500','R$357.816.000.000','77,5','9,9‰','95,8%','0,746','Sul', './img/estados/RS.png')
insert into Estado values(22,'Rondônia','237.590,543km2','1.787.279','R$34.031.000.000','71,1','20,4‰','92,1%','0,690','Norte', './img/estados/RN.png')
insert into Estado values(23,'Roraima','224.300,506km2','522.636','R$9.744.000.000','71,2','17,4‰','90,3%','0,707','Norte', './img/estados/RR.png')
insert into Estado values(24,'Santa Catarina','95.736,165km2','6.910.553','R$197.470.000.000','78,7','9,5‰','96,1%','0,774','Sul', './img/estados/SC.png')
insert into Estado values(25,'São Paulo','248.222,362km2','45.094.866','R$1.858.000.000.000','77,8','10,2‰','95,9%','0,783','Sudeste', './img/estados/SP.png')
insert into Estado values(26,'Sergipe','21.915,116km2','2.265.779','R$37.472.000.000','72,4','17,0‰','83,0%','0,665','Nordeste', './img/estados/SE.png')
insert into Estado values(27,'Tocantins','277.620,914km2','1.550.194','R$28.930.000.000','73,4','15,8‰','89,6%','0,699','Norte', './img/estados/TO.png')

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
update usuario set foto = './img/presidentes/22.jpg'

create table Pergunta
(
	codPergunta int primary key,
	texto ntext not null,
	resposta ntext not null,
	pontos int not null
)

insert into Pergunta values(1,'Em qual ano o Brasil se tornou independente de Portugal?','1822',5)
insert into Pergunta values(2,'Qual foi o presidente que governou por mais tempo?','Getúlio Vargas',5)
insert into Pergunta values(3,'Em qual ano os escravos brasileiros foram libertos?','1888',5)
insert into Pergunta values(4,'Quanto durou o maior mandato presidencial brasileiro?','15 anos',5)
insert into Pergunta values(5,'Qual é a unidade federativa brasileira que tem maior IDH?','Distrito Federal',10)
insert into Pergunta values(6,'Por quanto tempo Dom Pedro II governou o Brasil?','59 anos',10)
insert into Pergunta values(7,'Qual foi a sigla dada à Revolução Constitucionalista em São Paulo?','MMDC',15)
insert into Pergunta values(8,'Qual o estado brasileiro com maior número de habitantes?','São Paulo',5)
insert into Pergunta values(9,'Qual o estado brasileiro com com menor densidade demografica?','Roraima',10)
insert into Pergunta values(10,'Qual unidade federativa brasileira com com maior densidade demografica?','Distrito Federal',10)
insert into Pergunta values(11,'Qual o estado brasileiro com com maior PIB?','São Paulo',5)
insert into Pergunta values(12,'Qual é o estado brasileiro com menor PIB?','Roraima',10)
insert into Pergunta values(13,'Quem foi o principal atuante do movimento tenentista?','Luís Carlos Prestes',15)
insert into Pergunta values(14,'Quem foi o jornalista opositor de Getúlio Vargas?','Carlos Lacerda',15)
insert into Pergunta values(15,'Qual presidente se suicidou como estratégia política?','Getúlio Vargas',5)
insert into Pergunta values(16,'Qual foi o primeiro pressidente a assumir após a redemocratização?','José Sarney',5)
insert into Pergunta values(17,'Qual foi o rei português que veio ao Brasil em 1808?','Dom João VI',5)
insert into Pergunta values(18,'Qual foi o nome do movimento do qual Tiradentes fez parte?','Inconfidência Mineira',15)
insert into Pergunta values(19,'Qual é o menor estado brasileiro?','Sergipe',10)
insert into Pergunta values(20,'Qual é o maior estado brasileiro?','Amazonas',5)
insert into Pergunta values(21,'Qual o estado brasileiro com maior expectativa de vida?','Santa Catarina',10)
insert into Pergunta values(22,'Qual o estado brasileiro com menor expectativa de vida?','Maranhão',10)
insert into Pergunta values(23,'Como o Brasil foi chamado inicialmente quando "descoberto"?','Terra de Vera Cruz',10)
insert into Pergunta values(24,'Qual foi o presidente que, acusado de ser comunista, sofreu um golpe?','João Goulart',5)
insert into Pergunta values(25,'Qual é a unidade federativa brasileira que tem menor IDH?','Alagoas',10)
insert into Pergunta values(26,'Qual é a unidade federativa brasileira que tem menor mortalidade infantil?','São Paulo',5)
insert into Pergunta values(27,'Qual é a unidade federativa brasileira que tem maior mortalidade infantil?','Amapá',10)
insert into Pergunta values(28,'Qual foi o primeiro presidente a sofrer um processo de impeachment?','Fernando Collor',5)
insert into Pergunta values(29,'Qual foi o presidente do brasil que entregou uma carta de renúncia, na esperança de que fosse negada, mas foi aceita?','Jânio Quadros',5)
insert into Pergunta values(30,'Qual foi o nome dado ao Brasil após o Golpe da República?','Estados Unidos do Brasil',10)

select * from Pergunta

create table EraHistorica
(
	codEra int primary key,
	nome varchar(30) not null,
	inicio varchar(10) not null,
	fim varchar(10) not null,
	desricao ntext not null
)

insert into EraHistorica values(1, 'Brasil Pré-Colonial', '1500', '1530', 'O Brasil ainda território das muitas tribos nativas indígenas e que se surpreendeu com o que viria a ser o processo de colonização da coroa portuguesa.')
insert into EraHistorica values(2, 'Brasil Colonial', '1530', '1822', 'Um Brasil de primeiras divisões e autoridades engajado no processo catequético de indígenas e na expansão territorial para o corte do Pau Brasil e a busca de metais preciosos.')
insert into EraHistorica values(3, 'Brasil Império', '1822', '1889', 'O Brasil, dessa vez, independente, sob o governo monárquico dos Pedros pai (Dom Pedro I) e filho (Dom Pedro II) até conflito que gerou a república.')
insert into EraHistorica values(4, 'República Velha', '1889', '1930', 'O Brasil dos primeiros (e interesseiros) presidentes coronelistas e adeptos da política do café com leite, que foi barrada pela Era Vargas.')
insert into EraHistorica values(5, 'Era Vargas', '1930', '1945', 'O Brasil em seu maior governo, o conhecido por ser marcado com nacionalismo e notas do que pode ser tido como fascismo.')
insert into EraHistorica values(6, 'República Populista', '1945', '1964', 'Um Brasil de recomposição da Era Vargas, com presidentes reconhecidos pelas atitudes polêmicas e que viriam a ser espantados pelos militares.')
insert into EraHistorica values(7, 'Regime Militar', '1964', '1985', 'O Brasil dos 21 anos nas mãos de patentes do Exército. Um pedaço da História nacional que mostra sequelas políticas até os dias atuais.')
insert into EraHistorica values(8, 'República Nova', '1985', '-', 'Um Brasil da renovação presidencial e com seus governos vidrados em planos de foco econômico. P.S: estamos nele até hoje!')

create table Governante
(
	codGovernante int primary key,
	posicao varchar(20) not null,
	nome varchar(30) null,
	inicio varchar(10) not null,
	fim varchar(10) not null,
	partido varchar(30) not null,
	urlImagem varchar(30) not null
)

insert into Governante values(1,  '1 (Império)', 'Dom Pedro I', '1822', '1831', 'Nenhum (Imperador)', '.\img\presidentes\-1.jpg')
insert into Governante values(2,  '2 (Império)', 'Dom Pedro II', '1840', '1889', 'Nenhum (Imperador)', '.\img\presidentes\0.jpg')
insert into Governante values(3,  '1 (República)', 'Deodoro da Fonseca', '1889', '1891', 'Nenhum (Militar)', '.\img\presidentes\1.jpg')
insert into Governante values(4,  '2 (República)', 'Floriano Peixoto', '1891', '1894', 'Nenhum (Militar)', '.\img\presidentes\2.jpg')
insert into Governante values(5,  '3 (República)', 'Prudente de Morais', '1894', '1898', 'PR Federal', '.\img\presidentes\3.jpg')
insert into Governante values(6,  '4 (República)', 'Campos Sales', '1898', '1902', 'PRP', '.\img\presidentes\4.jpg')
insert into Governante values(7,  '5 (República)', 'Rodrigues Alves', '1902', '1906', 'PRP', '.\img\presidentes\5.jpg')
insert into Governante values(8,  '6 (República)', 'Afonso Pena', '1906', '1909', 'PRM', '.\img\presidentes\6.jpg')
insert into Governante values(9,  '7 (República)', 'Nilo Peçanha', '1909', '1910', 'PRF', '.\img\presidentes\7.jpg')
insert into Governante values(10, '8 (República)',  'Hermes da Fonseca', '1910', '1914', 'PRC', '.\img\presidentes\8.jpg')
insert into Governante values(11, '9 (República)',  'Venceslau Brás', '1914', '1918', 'PRP', '.\img\presidentes\9.jpg')
insert into Governante values(12, '10 (República)',  'Delfim Moreira', '1918', '1919', 'PRM', '.\img\presidentes\10.jpg')
insert into Governante values(13, '11 (República)',  'Epitácio Pessoa', '1919', '1922', 'PRM', '.\img\presidentes\11.jpg')
insert into Governante values(14, '12 (República)',  'Artur Bernardes', '1922', '1926', 'PRM', '.\img\presidentes\12.jpg')
insert into Governante values(15, '13 (República)',  'Washington Luís', '1926', '1930', 'PRP', '.\img\presidentes\13.jpg')
insert into Governante values(16, '14 (República)',  'Getúlio Vargas', '1930', '1945', 'AL', '.\img\presidentes\14.jpg')
insert into Governante values(17, '15 (República)',  'José Linhares', '1945', '1946', 'Nenhum (Civil)', '.\img\presidentes\15.jpg')
insert into Governante values(18, '16 (República)',  'Eurico Gaspar Dutra', '1946', '1951', 'PSD', '.\img\presidentes\16.jpg')
insert into Governante values(19, '17 (República)',  'Getúlio Vargas', '1951', '1954', 'PTB', '.\img\presidentes\17.jpg')
insert into Governante values(20, '18 (República)',  'Café Filho', '1954', '1955', 'PSP', '.\img\presidentes\18.jpg')
insert into Governante values(21, '19 (República)',  'Carlos Luz', '1955', '1955', 'PSD', '.\img\presidentes\19.jpg')
insert into Governante values(22, '20 (República)',  'Nereu Ramos', '1955', '1956', 'PSD', '.\img\presidentes\20.jpg')
insert into Governante values(23, '21 (República)',  'Juscelino Kubitschek', '1956', '1961', 'PSD', '.\img\presidentes\21.jpg')
insert into Governante values(24, '22 (República)',  'Jânio Quadros', '1961', '1961', 'PTN', '.\img\presidentes\22.jpg')
insert into Governante values(25, '23 (República)',  'Rainieri Mazilli', '1961', '1961', 'PSD', '.\img\presidentes\23.jpg')
insert into Governante values(26, '24 (República)',  'João Goulart', '1961', '1964', 'PTB', '.\img\presidentes\24.jpg')
insert into Governante values(27, '25 (República)',  'Rainieri Mazilli', '1964', '1964', 'PSD', '.\img\presidentes\25.jpg')
insert into Governante values(28, '26 (República)',  'Humberto Castelo Branco', '1964', '1967', 'ARENA', '.\img\presidentes\26.jpg')
insert into Governante values(29, '27 (República)',  'Artur da Costa e Silva', '1967', '1969', 'ARENA', '.\img\presidentes\27.jpg')
insert into Governante values(30, '28 (República)', 'Emílio Garrastazu Médici', '1969', '1974', 'ARENA', '.\img\presidentes\28.jpg')
insert into Governante values(31, '29 (República)', 'Ernesto Geisel', '1974', '1979', 'ARENA', '.\img\presidentes\29.jpg')
insert into Governante values(32, '30 (República)', 'João Figueiredo', '1979', '1985', 'ARENA', '.\img\presidentes\30.jpg')
insert into Governante values(33, '31 (República)', 'José Sarney', '1985', '1990', 'PMDB', '.\img\presidentes\31.jpg')
insert into Governante values(34, '32 (República)', 'Fernando Collor', '1990', '1992', 'PRN', '.\img\presidentes\32.jpg')
insert into Governante values(35, '33 (República)', 'Itamar Franco', '1992', '1995', 'PMDB', '.\img\presidentes\33.jpg')
insert into Governante values(36, '34 (República)', 'Fernando Henrique Cardoso', '1995', '2003', 'PSDB', '.\img\presidentes\34.jpg')
insert into Governante values(37, '35 (República)', 'Luiz Inácio Lula da Silva', '2003', '2011', 'PT', '.\img\presidentes\35.jpg')
insert into Governante values(38, '36 (República)', 'Dilma Rousseff', '2011', '2016', 'PT', '.\img\presidentes\36.jpg')
insert into Governante values(39, '37 (República)', 'Michel Temer', '2016', '2019', 'PMDB', '.\img\presidentes\37.jpg')
insert into Governante values(40, '38 (República)', 'Jair Bolsonaro', '2019', '-', 'PSL', '.\img\presidentes\38.jpg')

create table Candidato
(
	codCandidato int primary key,
	nome varchar(50) not null,
	descricao ntext not null,
	urlCand varchar(30) not null,
	urlPart varchar(30) not null,	
	cor varchar(7) not null,
	votos int not null
)

select * from Candidato
update Candidato set votos = 0
select * from Candidato order by votos desc

insert into Candidato values(1 , 'Marina Silva', 'Marina Osmarina da Silva Vaz de Lima, nascida Maria Osmarina da Silva é uma historiadora, professora, psicopedagoga, ambientalista e política brasileira filiada à Rede Sustentabilidade.', './img/eleicoes/marina.jpg', './img/partidos/rede.png', '#4e5152', 0)
insert into Candidato values(2 , 'Jair Bolsonaro', 'Jair Messias Bolsonaro é um militar da reserva e político brasileiro, filiado ao Partido Social Liberal. É deputado federal desde 1991, atualmente em seu sétimo mandato, eleito pelo Partido Progressista.', './img/eleicoes/bolsonaro.jpg', './img/partidos/psl.png', '#1d6434', 0)
insert into Candidato values(3 , 'Fernando Haddad', 'Fernando Haddad é um acadêmico, advogado e político brasileiro, filiado ao Partido dos Trabalhadores. Foi ministro da Educação de 2005 a 2012, nos governos Lula e Dilma Rousseff, e prefeito da cidade de São Paulo de 2013 a 2016.', './img/eleicoes/haddad.jpg', './img/partidos/pt.png', '#c0122d', 0)
insert into Candidato values(4 , 'Ciro Gomes', 'Ciro Ferreira Gomes é um político, advogado e professor universitário brasileiro filiado ao Partido Democrático Trabalhista, do qual é vice-presidente e, neste ano, é candito à presidência.', './img/eleicoes/ciro.jpg', './img/partidos/pdt.png', '#254072', 0)
insert into Candidato values(5 , 'Geraldo Alckmin', 'Geraldo José Rodrigues Alckmin Filho é um médico, e político brasileiro, filiado ao Partido da Social Democracia Brasileira. Foi Governador do Estado de São Paulo, quando renunciou para disputar as eleições de outubro de 2018.', './img/eleicoes/alckimin.jpg', './img/partidos/psdb.png', '#1c69b3', 0)
insert into Candidato values(6 , 'Álvaro Dias', 'Alvaro Fernandes Dias é um historiador, professor e político brasileiro. Filiado ao Podemos, exerce atualmente o cargo de Senador da República Federativa do Brasil, representando o Estado do Paraná.', './img/eleicoes/alvaro.jpg', './img/partidos/podemos.png', '#88a179', 0)
insert into Candidato values(7 , 'Henrique Meirelles', 'Henrique de Campos Meirelles é um executivo da área financeira, político e ex-Ministro da Fazenda do Brasil. Atualmente é filiado ao Partido Movimento Democrático Brasileiro, concorrendo ao cargo de presidente do Brasil em 2018.', './img/eleicoes/henrique.jpg', './img/partidos/pmdb.png', '#00b935', 0)
insert into Candidato values(8 , 'João Amoêdo', 'João Dionisio Filgueira Barreto Amoêdo, é um político, banqueiro, engenheiro e administrador de empresas brasileiras. É um dos fundadores do Partido Novo e, atualmente, candidato à Presidência da República em 2018.', './img/eleicoes/amoedo.jpg', './img/partidos/novo.png', '#f39c12', 0)
insert into Candidato values(9 , 'Guilherme Boulos', 'Guilherme Castro Boulos é um ativista político e escritor brasileiro, filiado ao Partido Socialismo e Liberdade e é membro da Coordenação Nacional do Movimento dos Trabalhadores Sem Teto.', './img/eleicoes/guilherme.jpg', './img/partidos/psol.png', '#f3ce07', 0)
insert into Candidato values(10, 'José Maria Eymael', 'José Maria Eymael é um advogado, empresário, fundador e atual presidente do Partido Democracia Cristã. Foi candidato por quatro vezes, mas devido ao pouco tempo de sua campanha, ele recebeu poucos votos.', './img/eleicoes/jose.jpg', './img/partidos/psdc.png', '#ab7c24', 0)
insert into Candidato values(11, 'Cabo Daciolo', 'Benevenuto Daciolo Fonseca dos Santos é um bombeiro militar e político brasileiro filiado ao partido Patriota. Em 2014, foi eleito deputado federal pelo Rio de Janeiro e, atualmente, está filiado ao Patriota.', './img/eleicoes/daciolo.png', './img/partidos/patriota.png', '#009b05', 0)
insert into Candidato values(12, 'João Goulart Filho', 'João Vicente Fontella Goulart, também chamado de João Goulart Filho, é um filósofo e político brasileiro. Neste ano é candidato à presidência do Brasil, sendo afiliado ao Partido Pátria Livre.', './img/eleicoes/jangoson.jpg', './img/partidos/ppl.png', '#b5d489', 0)
insert into Candidato values(13, 'Vera Lúcia', 'Vera Lúcia Pereira da Silva Salgado é uma política brasileira, filiada ao Partido Socialista dos Trabalhadores Unificado. É candidata à presidência da República na eleição presidencial de 2018. Foi uma das fundadoras do PSTU e é a presidente do partido em Sergipe.', './img/eleicoes/vera.jpg', './img/partidos/pstu.png', '#ca4242', 0)

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
drop table Noticia
select * from Noticia
insert into Noticia values(1,  'Política', 'Eleições 2018: Jair Bolsonaro é eleito presidente do Brasil', 'Capitão da reserva obteve 55,13% dos votos válidos; seu adversário, Fernando Haddad (PT) ficou com 44,87%', './img/noticias/1.jpg', 'https://veja.abril.com.br/politica/eleicoes-2018-segundo-turno-apuracao-resultado-presidente-ao-vivo/', 'Veja', '28/10/2018')--https://veja.abril.com.br/politica/eleicoes-2018-segundo-turno-apuracao-resultado-presidente-ao-vivo/
insert into Noticia values(2,  'Política', 'As promessas de Bolsonaro', 'Segurança, trabalho, educação: o que deve mudar no Brasil em 2019 com uma nova equipe no governo federal.', './img/noticias/2.jpg', 'https://www.uol/eleicoes/especiais/as-propostas-de-governo-de-bolsonaro-e-seus-impactos-a-partir-de-2019.htm#tematico-1', 'Uol', '29/10/2018')--https://www.uol/eleicoes/especiais/as-propostas-de-governo-de-bolsonaro-e-seus-impactos-a-partir-de-2019.htm#tematico-1
insert into Noticia values(3,  'Política', 'Após derrota, Haddad visitará Lula nesta semana', 'Nesta segunda-feira, 29, Haddad deve passar o dia em casa, no Planalto Paulista, sem agenda pública, segundo sua assessoria de imprensa.', './img/noticias/3.jpg', 'https://exame.abril.com.br/brasil/apos-derrota-haddad-visitara-lula-nesta-semana/', 'Abril', '28/10/2018')--https://exame.abril.com.br/brasil/apos-derrota-haddad-visitara-lula-nesta-semana/
insert into Noticia values(4,  'Política', 'Hamilton Mourão e Manuela D Ávila, os aspirantes a vice-presidente', 'Eles nasceram em Porto Alegre, no  Rio Grande do Sul, e são os vices dos finalistas à corrida presidencial: esses são os únicos pontos comuns entre Manuela D Ávila e o general Hamilton Mourão, de perfis diametralmente opostos.', './img/noticias/4.jpg', 'http://atarde.uol.com.br/politica/eleicoes/noticias/2005700-hamilton-mourao-e-manuela-davila-os-aspirantes-a-vicepresidente', 'A Tarde', '26/10/2018')--http://atarde.uol.com.br/politica/eleicoes/noticias/2005700-hamilton-mourao-e-manuela-davila-os-aspirantes-a-vicepresidente
insert into Noticia values(5,  'Política' , 'Veja as propostas de Paulo Guedes, assessor econômico da campanha de Jair Bolsonaro', 'Entre as propostas, economista fala em mudar as regras do orçamento da União, instituir o sistema de capitalização para a Previdência e avançar na agenda de privatizações.', './img/noticias/5.jpg', 'https://g1.globo.com/politica/eleicoes/2018/noticia/2018/10/21/veja-as-propostas-de-paulo-guedes-assessor-economico-da-campanha-de-jair-bolsonaro.ghtml', 'G1', '25/10/2018')
insert into Noticia values(6,  'Política', 'Justiça decreta prisão de eleitor que agrediu mesária ao achar que urna estava fraudada', 'Vídeo mostra eleitor votando o número 17, mas para o cargo de governador do estado. No Pará, as eleições de segundo turno não têm candidato dessa legenda. Mesária tentou impedir o crime de filmagem da urna e foi empurrada.', './img/noticias/6.jpg', 'https://g1.globo.com/pa/para/eleicoes/2018/noticia/2018/10/28/justica-decreta-prisao-de-eleitor-que-agrediu-mesaria-ao-achar-que-urna-estava-fraudada.ghtml', 'G1', '28/10/2018')
insert into Noticia values(7,  'Política', 'Wilson Witzel diz que "esperança renasceu" e agradece ligação de Paes após ser eleito', 'Com 100% dos votos apurados, segundo o Tribunal Superior Eleitoral, Witzel teve 4.675.355 (59,87%) dos votos válidos e Paes, 3.134.400 votos (40,13%).', './img/noticias/7.jpg', 'https://g1.globo.com/rj/rio-de-janeiro/eleicoes/2018/noticia/2018/10/28/governador-eleito-do-rj-wilson-witzel-concede-entrevista-coletiva.ghtml', 'G1', '28/10/2018')
insert into Noticia values(8,  'Política', 'Toffoli diz que Bolsonaro deve "fidelidade" à Constituição e às instituições da República', 'Presidente do STF fez discurso após a definição do resultado do segundo turno para a presidência da República, em que o candidato do PSL, Jair Bolsonaro, foi eleito.', './img/noticias/8.jpg', 'https://g1.globo.com/politica/eleicoes/2018/noticia/2018/10/28/toffoli-diz-que-bolsonaro-deve-fidelidade-a-constituicao-e-as-instituicoes-da-republica.ghtml', 'G1', '28/10/2018')
insert into Noticia values(9,  'Política', '"No meu PSDB, acabou o muro", diz Doria após ser eleito governador', 'Eleito para o governo de São Paulo com 51,75% dos votos, João Doria afirmou, na noite deste domingo (28), que em sua gestão partido terá "lado".', './img/noticias/9.jpg', 'https://g1.globo.com/sp/sao-paulo/eleicoes/2018/noticia/2018/10/28/no-meu-psdb-acabou-o-muro-diz-doria-apos-ser-eleito-governador.ghtml', 'G1', '29/10/2018')
insert into Noticia values(10, 'Economia', 'Equipe econômica de Bolsonaro quer remanejar verba do Orçamento', 'Presidente pretende usar parte da pouca receita disponível para áreas prioritárias, como segurança', './img/noticias/10.jpg', 'https://www1.folha.uol.com.br/mercado/2018/10/equipe-economica-de-bolsonaro-quer-remanejar-verba-do-orcamento.shtml', 'UOL', '28/10/2018')
insert into Noticia values(11, 'Economia', 'Após eleições, dólar cai mais de 1% e opera no patamar de R$ 3,60', 'Na última sessão, na sexta-feira (26), a moeda dos EUA fechou a R$ 3,6518.', './img/noticias/11.jpg', 'https://g1.globo.com/economia/noticia/2018/10/29/cotacao-do-dolar-29102018.ghtml', 'G1', '29/10/2018')
insert into Noticia values(12, 'Política', 'Reestruturação de ministérios será primeira medida da gestão Bolsonaro', 'Lista de privatizações e obra pedida por agronegócio também serão priorizadas', './img/noticias/12.jpg', 'https://www1.folha.uol.com.br/poder/2018/10/reestruturacao-de-ministerios-sera-primeira-medida-da-gestao-bolsonaro.shtml', 'Folha de SP', '29/10/2018')

create table Curiosidade
(
	codCuriosidade int primary key,
	texto ntext not null
)

insert into Curiosidade values(1  , 'O nome oficial do Brasil é “República Federativa do Brasil”.')
insert into Curiosidade values(2  , 'A palavra “Brasil”, que significa “vermelho como uma brasa”, vem de pau brasil, uma árvore que uma vez cresceu abundantemente ao longo da costa brasileira que produzia um corante vermelho.')
insert into Curiosidade values(3  , 'Os portugueses nomearam oficialmente o que hoje conhecemos como Terra do Santa Cruz, mas os comerciantes chamaram-na simplesmente Terra do Brasil.')
insert into Curiosidade values(4  , 'O ponto mais alto do Brasil é o Pico da Neblina, com 2.994 m.')
insert into Curiosidade values(5  , 'O Brasil é o quinto maior país do mundo por população: 201.009.622 pessoas.')
insert into Curiosidade values(6  , 'O Brasil é o quinto maior país por massa terrestre no mundo, com 8,45 milhões de quilômetros quadrados.')
insert into Curiosidade values(7  , 'O prato nacional brasileiro é a feijoada.')
insert into Curiosidade values(8  , 'O Brasil tornou-se o primeiro país da América do Sul a aceitar mulheres em suas forças armadas, nos anos 80.')
insert into Curiosidade values(9  , 'A bebida nacional brasileira é a caipirinha (mistura de cana-de-açúcar, misturada com um copo de açúcar, gelo e fatias de limão esmagada).')
insert into Curiosidade values(10 , 'A canção assinatura da bossa nova brasileira é “A Garota de Ipanema”. A mulher que inspirou a canção é Heloísa Pinheiro.')
insert into Curiosidade values(11 , 'Os primeiros turistas oficiais chegaram ao Brasil em 1º de janeiro de 1502, como parte de uma viagem exploratória portuguesa liderada por André Gonçalves, que nomeou a baía onde desembarcaram no Rio de Janeiro.')
insert into Curiosidade values(12 , 'O Brasil é o maior produtor de café do mundo.')
insert into Curiosidade values(13 , '12 das 30 cidades mais violentas do mundo estão no Brasil.')
insert into Curiosidade values(14 , 'Brasil é o país com o maior índice de desmatamento do mundo.')
insert into Curiosidade values(15 , 'A primeira vitória brasileira em Mundiais foi na Copa de 1930 contra a Bolívia. O Brasil ganhou de 4 x 0.')
insert into Curiosidade values(16 , 'O primeiro título brasileiro só veio em 1958 durante a Copa da Suécia. Foi, aliás, nessa Copa que o mundo conheceu o jovem jogador Edson Arantes do Nascimento, o Pelé.')
insert into Curiosidade values(17 , 'Das 20 frutas mais consumidas no Brasil, apenas 3 são originárias do país. São elas: o abacaxi, a goiaba e o maracujá.')
insert into Curiosidade values(18 , 'A árvore mais velha do Brasil é um jequitibá-rosa com 3.020 anos, que se encontra no Parque Estadual de Vassununga, em Santa Rita do Passa Quatro, em São Paulo.')
insert into Curiosidade values(19 , 'O Rio de Janeiro já foi a capital de Portugal, o que faz da cidade a primeira e única capital européia fora da própria Europa.')
insert into Curiosidade values(20 , 'A maior comunidade japonesa fora do Japão está no Brasil.')
insert into Curiosidade values(21 , 'O Brasil tem o segundo maior número de aeroportos do mundo (2.498), atrás apenas dos Estados Unidos.')
insert into Curiosidade values(22 , 'O Brasil é um dos únicos países do mundo que oferece a cirurgia de mudança de sexo gratuitamente, pelo SUS, desde 2008.')
insert into Curiosidade values(23 , 'Nas prisões federais no Brasil, os presos podem reduzir até 4 dias no tempo de sentença a cada livro que lerem, com um máximo de 12 obras por ano.')
insert into Curiosidade values(24 , 'Na prisão de Santa Rita do Sapucaí, no sul de Minas, os detentos podem pedalar em bicicleta fixas, que geram energia para a cidade. Em troca, a cada 3 dias pedalando, a pena é reduzida em 1 dia.')
insert into Curiosidade values(25 , 'Das 12 cidades-sede da Copa de 2014, 7 figuravam no ranking das 50 cidades mais violentas do mundo.')
insert into Curiosidade values(26 , 'Mais de 90% dos carros novos produzidos no Brasil usam etanol. É o único país do mundo onde o combustível é oferecido em 100% dos postos.')
insert into Curiosidade values(27 , 'Um porta-aviões da Marinha chamado Minas Gerais já foi colocado à venda no eBay, mas o anúncio foi removido por ferir as políticas do site.')
insert into Curiosidade values(28 , 'Com mais de 123 milhões de fiéis, o Brasil ainda é o país com o maior número de católicos do mundo, à frente do México, com 96,4 milhões.')
insert into Curiosidade values(29 , 'O Brasil foi o primeiro país do mundo a banir as câmaras de bronzeamento.')
insert into Curiosidade values(30 , 'Em 2001, cientistas descobriram um rio subterrâneo que corre abaixo do rio Amazonas. Batizado de rio Hamza, ele tem 6 mil Km de comprimento e está a 4 mil metros de profundidade. Sua vazão é de 3 mil m3/s, maior que a do Rio São Francisco, que corta Minas e o Nordeste.')
insert into Curiosidade values(31 , 'O Brasil importou 4,8 milhões de escravos da África, quase metade do total de escravos de todo continente americano. Só na cidade do Rio de Janeiro foram cerca de 2 milhões.')
insert into Curiosidade values(32 , 'O povo indígena Bororo é o único grupo do mundo onde todas as pessoas têm sangue do tipo “O”.')
insert into Curiosidade values(33 , 'A Marinha proibiu o desembarque na Ilha da Queimada Grande, no litoral de São Paulo, por causa do grande número de cobras na região: 5 cobras por metro quadrado.')
insert into Curiosidade values(34 , 'O principal exportador mundial de castanha-do-pará (também conhecida como castanha-do-brasil) é a Bolívia, e não o Brasil.')
insert into Curiosidade values(35 , 'Mais de 1.000 línguas eram faladas no Brasil antes do descobrimento. Hoje, apenas 180 ainda sobrevivem e apenas 11 são faladas por mais de 5.000 pessoas.')
insert into Curiosidade values(36 , 'A viola é um instrumento exclusivamente brasileiro.')
insert into Curiosidade values(37 , 'Segundo uma pesquisa da USP de 2009, 19,3% de todos os homens da cidade do Rio de Janeiro são gays ou bissexuais.')


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