create table Noticia
(
	codNoticia int primary key,
	tema varchar(20) not null,
	titulo ntext not null,
	lide ntext not null,	
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
insert into Noticia values(5,  'Política' , 'Veja as propostas de Paulo Guedes, assessor econômico da campanha de Jair Bolsonaro', 'Entre as propostas, economista fala em mudar as regras do orçamento da União, instituir o sistema de capitalização para a Previdência e avançar na agenda de privatizações.', './img/noticias/5.jpg', 'https://g1.globo.com/politica/eleicoes/2018/noticia/2018/10/21/veja-as-propostas-de-paulo-guedes-assessor-economico-da-campanha-de-jair-bolsonaro.ghtml', 'G1', '21/10/2018')
insert into Noticia values(6,  'Política', 'Justiça decreta prisão de eleitor que agrediu mesária ao achar que urna estava fraudada', 'Vídeo mostra eleitor votando o número 17, mas para o cargo de governador do estado. No Pará, as eleições de segundo turno não têm candidato dessa legenda. Mesária tentou impedir o crime de filmagem da urna e foi empurrada.', './img/noticias/6.jpg', 'https://g1.globo.com/pa/para/eleicoes/2018/noticia/2018/10/28/justica-decreta-prisao-de-eleitor-que-agrediu-mesaria-ao-achar-que-urna-estava-fraudada.ghtml', 'G1', '28/10/2018')
insert into Noticia values(7,  'Política', 'Wilson Witzel diz que "esperança renasceu" e agradece ligação de Paes após ser eleito', 'Com 100% dos votos apurados, segundo o Tribunal Superior Eleitoral, Witzel teve 4.675.355 (59,87%) dos votos válidos e Paes, 3.134.400 votos (40,13%).', './img/noticias/7.jpg', 'https://g1.globo.com/rj/rio-de-janeiro/eleicoes/2018/noticia/2018/10/28/governador-eleito-do-rj-wilson-witzel-concede-entrevista-coletiva.ghtml', 'G1', '28/10/2018')
insert into Noticia values(8,  'Política', 'Toffoli diz que Bolsonaro deve "fidelidade" à Constituição e às instituições da República', 'Presidente do STF fez discurso após a definição do resultado do segundo turno para a presidência da República, em que o candidato do PSL, Jair Bolsonaro, foi eleito.', './img/noticias/8.jpg', 'https://g1.globo.com/politica/eleicoes/2018/noticia/2018/10/28/toffoli-diz-que-bolsonaro-deve-fidelidade-a-constituicao-e-as-instituicoes-da-republica.ghtml', 'G1', '28/10/2018')
insert into Noticia values(9,  'Política', '"No meu PSDB, acabou o muro", diz Doria após ser eleito governador', 'Eleito para o governo de São Paulo com 51,75% dos votos, João Doria afirmou, na noite deste domingo (28), que em sua gestão partido terá "lado".', './img/noticias/9.jpg', 'https://g1.globo.com/sp/sao-paulo/eleicoes/2018/noticia/2018/10/28/no-meu-psdb-acabou-o-muro-diz-doria-apos-ser-eleito-governador.ghtml', 'G1', '29/10/2018')
insert into Noticia values(10, 'Economia', 'Equipe econômica de Bolsonaro quer remanejar verba do Orçamento', 'Presidente pretende usar parte da pouca receita disponível para áreas prioritárias, como segurança', './img/noticias/10.jpg', 'https://www1.folha.uol.com.br/mercado/2018/10/equipe-economica-de-bolsonaro-quer-remanejar-verba-do-orcamento.shtml', 'UOL', '28/10/2018')
insert into Noticia values(11, 'Economia', 'Após eleições, dólar cai mais de 1% e opera no patamar de R$ 3,60', 'Na última sessão, na sexta-feira (26), a moeda dos EUA fechou a R$ 3,6518.', './img/noticias/11.jpg', 'https://g1.globo.com/economia/noticia/2018/10/29/cotacao-do-dolar-29102018.ghtml', 'G1', '29/10/2018')
insert into Noticia values(12, 'Política', 'Reestruturação de ministérios será primeira medida da gestão Bolsonaro', 'Lista de privatizações e obra pedida por agronegócio também serão priorizadas', './img/noticias/12.jpg', 'https://www1.folha.uol.com.br/poder/2018/10/reestruturacao-de-ministerios-sera-primeira-medida-da-gestao-bolsonaro.shtml', 'Folha de SP', '29/10/2018')