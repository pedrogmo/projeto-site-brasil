﻿var modal = document.getElementById('simpleModal');
var modalBtn  = document.getElementById('btnLogin');
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var sideBar = document.getElementById('login');
var logou;

var usuario;
var arr;
var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:3000/usuario";

if (sessionStorage.getItem("logou") == "sim"){
	logou = true;
	usuario = JSON.parse(sessionStorage.getItem("usuario"));
	document.getElementById("nomeUser").innerHTML = usuario.nomeUsuario;
	document.getElementById("emailUser").innerHTML = usuario.email;
	document.getElementById('highScore').innerHTML += usuario.pontuacao;
} else logou = false;

xmlhttp.onreadystatechange=function(){
  if (this.readyState == 4 && this.status == 200)      
    localStorage.setItem("usuarioGeral", this.responseText);
}

xmlhttp.open("GET", url, true);
xmlhttp.send();
arr = JSON.parse(localStorage.getItem("usuarioGeral"));

var nome,email,pontos;
document.getElementById('btnLogin').onclick = function(){
	if(logou){				
		fundoSB.style.display = 'block';
		login.style.left = '0%';		
	}
	else
 	 	modal.style.display = 'block'; 
}

document.getElementById('btnCadastrar').onclick = function(){
	location.href = "cadastro.html";
}

document.getElementById('fechaModal').onclick = function(){
 	 modal.style.display = 'none';
}

document.onkeydown = function(event){
	if(modal.style.display == 'block')
    	if (event.keyCode === 13)
        		$("#btnEntrar").click();    
}

var exibirSenha = true;
document.getElementById("btnExibirSenha").onclick = function(){
	exibirSenha	= !exibirSenha;
	if (exibirSenha)
		$('#txtSenha').attr('type', 'password');
	else
		$('#txtSenha').attr('type', 'text');
}

document.getElementById('btnEntrar').onclick = function(){
	var email = document.getElementById('txtEmail').value;
	var senha = document.getElementById('txtSenha').value;
	var existe = false;
	{
		var i = -1;
		while(!existe && i < arr.length - 1)
		{
			i++;
			if (email == arr[i].email && senha == arr[i].senha)
				existe = true;		
		}
	}
	if (!existe)
		alert ('Email e/ou Senha incorreto(a)');	
	else
	{
		usuario = arr[i];
		sessionStorage.setItem("usuario", JSON.stringify(usuario));		
		sessionStorage.setItem("logou", "sim");
		logou = true;
		alert ('Logado com sucesso');
		modal.style.display = 'none';
		document.getElementById("nomeUser").innerHTML = usuario.nomeUsuario;
		document.getElementById("emailUser").innerHTML = usuario.email;
		document.getElementById('highScore').innerHTML += usuario.pontuacao;
	}
		document.getElementById("txtEmail").value = "";
		document.getElementById("txtSenha").value = "";		
}

var fundoSB = document.getElementById("fundoSideBar");
window.onclick = function(event){
  if(event.target == modal){
    modal.style.display = 'none';
  }else
  if(event.target == fundoSB){
  	fundoSB.style.display = 'none';
    login.style.left = '-35%';
  }
}

document.getElementById("sair").onclick = function(){
	sessionStorage.removeItem("logou");
	sessionStorage.removeItem("usuario");
	alert('Você foi deslogado');
	location.reload();
}

document.getElementById("perfil").onclick = function(){
	location.href = "perfil.html"
}

var cont = 0;

document.getElementById("curiosidade").onclick = function(){
	alert(curiosidades[cont]);
	cont++;
	if (cont >= 36)
		cont = 0;
}

document.getElementById("bandeira").onclick = function(){ alert(band); }

var curiosidades = new Array('1– O nome oficial do Brasil é “República Federativa do Brasil”.',
'2 – A palavra “Brasil”, que significa “vermelho como uma brasa”, vem de pau brasil, uma árvore que uma vez cresceu abundantemente ao longo da costa brasileira que produzia um corante vermelho.',
'3 – Os portugueses nomearam oficialmente o que hoje conhecemos como Terra do Santa Cruz, mas os comerciantes chamaram-na simplesmente Terra do Brasil.',
'4 – O ponto mais alto do Brasil é o Pico da Neblina, com 2.994 m.',
'5 – O Brasil é o quinto maior país do mundo por população: 201.009.622 pessoas.',
'6 – O Brasil é o quinto maior país por massa terrestre no mundo, com 8,45 milhões de quilômetros quadrados.',
'7 – O prato nacional brasileiro é a feijoada.',
'8 – O Brasil tornou-se o primeiro país da América do Sul a aceitar mulheres em suas forças armadas, nos anos 80.',
'9 – A bebida nacional brasileira é a caipirinha (mistura de cana-de-açúcar, misturada com um copo de açúcar, gelo e fatias de limão esmagada).',
'10 – A canção assinatura da bossa nova brasileira é “A Garota de Ipanema”. A mulher que inspirou a canção é Heloísa Pinheiro.',
'11 – Os primeiros turistas oficiais chegaram ao Brasil em 1º de janeiro de 1502, como parte de uma viagem exploratória portuguesa liderada por André Gonçalves, que nomeou a baía onde desembarcaram no Rio de Janeiro.',
'12 – O Brasil é o maior produtor de café do mundo.',
'13 – 12 das 30 cidades mais violentas do mundo estão no Brasil.',
'14 – Brasil é o país com o maior índice de desmatamento do mundo.',
'15 – A primeira vitória brasileira em Mundiais foi na Copa de 1930 contra a Bolívia. O Brasil ganhou de 4 x 0.',
'16 – O primeiro título brasileiro só veio em 1958 durante a Copa da Suécia. Foi, aliás, nessa Copa que o mundo conheceu o jovem jogador Edson Arantes do Nascimento, o Pelé.',
'17 – Das 20 frutas mais consumidas no Brasil, apenas 3 são originárias do país. São elas: o abacaxi, a goiaba e o maracujá.',
'18 – A árvore mais velha do Brasil é um jequitibá-rosa com 3.020 anos, que se encontra no Parque Estadual de Vassununga, em Santa Rita do Passa Quatro, em São Paulo.',
'19 – O Rio de Janeiro já foi a capital de Portugal, o que faz da cidade a primeira e única capital européia fora da própria Europa.',
'20 – A maior comunidade japonesa fora do Japão está no Brasil.',
'21 – O Brasil tem o segundo maior número de aeroportos do mundo (2.498), atrás apenas dos Estados Unidos.',
'22 – O Brasil é um dos únicos países do mundo que oferece a cirurgia de mudança de sexo gratuitamente, pelo SUS, desde 2008.',
'22 – Segundo uma pesquisa da USP de 2009, 19,3% de todos os homens da cidade do Rio de Janeiro são gays ou bissexuais.',
'23 – Nas prisões federais no Brasil, os presos podem reduzir até 4 dias no tempo de sentença a cada livro que lerem, com um máximo de 12 obras por ano.',
'24 – Na prisão de Santa Rita do Sapucaí, no sul de Minas, os detentos podem pedalar em bicicleta fixas, que geram energia para a cidade. Em troca, a cada 3 dias pedalando, a pena é reduzida em 1 dia.',
'25 – Das 12 cidades-sede da Copa de 2014, 7 figuravam no ranking das 50 cidades mais violentas do mundo.',
'26 – Mais de 90% dos carros novos produzidos no Brasil usam etanol. É o único país do mundo onde o combustível é oferecido em 100% dos postos.',
'27 – Um porta-aviões da Marinha chamado Minas Gerais já foi colocado à venda no eBay, mas o anúncio foi removido por ferir as políticas do site.',
'28 – Com mais de 123 milhões de fiéis, o Brasil ainda é o país com o maior número de católicos do mundo, à frente do México, com 96,4 milhões.',
'29 – O Brasil foi o primeiro país do mundo a banir as câmaras de bronzeamento.',
'30 – Em 2001, cientistas descobriram um rio subterrâneo que corre abaixo do rio Amazonas. Batizado de rio Hamza, ele tem 6 mil Km de comprimento e está a 4 mil metros de profundidade. Sua vazão é de 3 mil m3/s, maior que a do Rio São Francisco, que corta Minas e o Nordeste.',
'31 – O Brasil importou 4,8 milhões de escravos da África, quase metade do total de escravos de todo continente americano. Só na cidade do Rio de Janeiro foram cerca de 2 milhões.',
'32 – O povo indígena Bororo é o único grupo do mundo onde todas as pessoas têm sangue do tipo “O”.',
'33 – A Marinha proibiu o desembarque na Ilha da Queimada Grande, no litoral de São Paulo, por causa do grande número de cobras na região: 5 cobras por metro quadrado.',
'34 – O principal exportador mundial de castanha-do-pará (também conhecida como castanha-do-brasil) é a Bolívia, e não o Brasil.',
'35 – Mais de 1.000 línguas eram faladas no Brasil antes do descobrimento. Hoje, apenas 180 ainda sobrevivem e apenas 11 são faladas por mais de 5.000 pessoas.',
'36 - A viola é um instrumento exclusivamente brasileiro.');

var band = 'A bandeira atual da República Federativa do Brasil foi feita em 1889, durante a República Velha. A frase "Ordem e Progresso"'+
' representa o positivismo, ideia segundo a qual a sociedade deve ser científica e autoritária, para que haja desenvolvimento. Acredita-se ' +
'que as cores verde e amarelo tenham surgido da riqueza presente nas matas e dos metais preciosos (o outro). Contudo, historiadores afirmam que ' +
 'a escolha dessas cores provém da união entre as famílias reais Bragança (Brasil) e Habsburgo (Áustria).';