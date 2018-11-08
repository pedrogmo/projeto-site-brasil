//Desabilita mudança de zoom da página:

$(window).on('scroll', function(){
	if($(window).scrollTop()){
		$('#menu').addClass('active');
	}
	else{
		$('#menu').removeClass('active');
		$('.menu-container').css('display', 'none');
		mostrarMenu = true;
	}
});

var mostrarMenu = true;
document.getElementById("menu-icon").onclick = function(){
	if(mostrarMenu)
	{
		$('.menu-container').css('animation', 'slideInLeft 1s');
		$('.menu-container').css('display', 'block');
		mostrarMenu = false;
	}
	else
	{		
		$('.menu-container').css('animation', 'slideOutLeft 1s');
		setTimeout(function(){
			$('.menu-container').css('display', 'none');
		}, 1000)
		mostrarMenu = true;
	}
}

$(document).keydown(function(event) {
if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
        event.preventDefault();
     }
});

$(window).bind('mousewheel DOMMouseScroll', function (event) {
       if (event.ctrlKey == true) {
       event.preventDefault();
       }
});

//Ir para topo da página no clique do logo:

document.getElementById("topo").onclick = function(){
	window.scrollTo(0, 0);
}

//Variáveis a serem usadas:

var modal = document.getElementById('simpleModal');
var modalBtn  = document.getElementById('btnLogin');
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var sideBar = document.getElementById('login');
var logou;
var usuario;
var arr;
var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:3000/usuario";
var exibirSenha = true;
var fundoSB = document.getElementById("fundoSideBar");
var modalAlert = document.getElementById("modalAlert");

//Banco de dados e usuário

if (sessionStorage.getItem("logou") == "sim"){
	logou = true;
	usuario = JSON.parse(sessionStorage.getItem("usuario"));
	document.getElementById("btnLogin").innerHTML = "CONTA";
	document.getElementById("nomeUser").innerHTML = usuario.nomeUsuario;
	document.getElementById("emailUser").innerHTML = usuario.email;
	document.getElementById('highScore').innerHTML += usuario.pontuacao;
	if (usuarioPerfil.temFoto == 1)
		document.getElementById("imgUser").src = $.get("http://localhost:3000/foto/" + usuario.codUsuario);
	/*$('#imgUser')
		.attr('src', usuario.foto)		
		.height('100%')
		.width('100%');*/
} else logou = false;

xmlhttp.onreadystatechange=function(){
  if (this.readyState == 4 && this.status == 200)    
    localStorage.setItem("usuarioGeral", this.responseText);
}

xmlhttp.open("GET", url, true);
xmlhttp.send();
arr = JSON.parse(localStorage.getItem("usuarioGeral"));

//Modal de login:

document.getElementById('btnLogin').onclick = function(){
	if(logou){				
		fundoSB.style.display = 'block';
		login.style.left = '0%';		
	}
	else
 	 	modal.style.display = 'block'; 
}

document.onkeydown = function(event){
	if(modal.style.display == 'block')
    	if (event.keyCode === 13)
        		$("#btnEntrar").click();    
}

window.onclick = function(event){
  if(event.target == modal){
    modal.style.display = 'none';
  }else
  if(event.target == fundoSB){
  	fundoSB.style.display = 'none';
    login.style.left = '-35%';
  }else
  if(event.target == modalAlert){
    modalAlert.style.display = 'none';
  }
}

document.getElementById('btnCadastrar').onclick = function(){
	location.href = "cadastro.html";
}

document.getElementById('fechaModal').onclick = function(){
 	 modal.style.display = 'none';
}

document.getElementById("btnExibirSenha").onclick = function(){
	exibirSenha	= !exibirSenha;
	if (exibirSenha)
	{
		$('#txtSenha').attr('type', 'password');
		document.getElementById("btnExibirSenha").className = "exibirSenha fas fa-eye";
	}
	else
	{
		$('#txtSenha').attr('type', 'text');
		document.getElementById("btnExibirSenha").className = "exibirSenha fas fa-eye-slash";
	}
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
		alert('Email e/ou Senha incorreto(a)!');	
	else
	{
		usuario = arr[i];
		sessionStorage.setItem("usuario", JSON.stringify(usuario));
		sessionStorage.setItem("logou", "sim");
		logou = true;
		modal.style.display = 'none';
		alert('Logado com sucesso!');
		location.reload();		
	}
		document.getElementById("txtEmail").value = "";
		document.getElementById("txtSenha").value = "";
}

//Modal de Conta:

document.getElementById("sair").onclick = function(){
	sessionStorage.removeItem("logou");
	sessionStorage.removeItem("usuario");
	alert('Você foi deslogado!');
	location.reload();
}

document.getElementById("perfil").onclick = function(){location.href = "perfil.html";}
document.getElementById("imgUser").onclick = function(){location.href = "perfil.html";}
document.getElementById("nomeUser").onclick = function(){location.href = "perfil.html";}
document.getElementById("emailUser").onclick = function(){location.href = "perfil.html";}

//Alert da Bandeira:

document.getElementById("bandeira").onclick = function(){ alertModal(band); }

var band = 'A bandeira atual da República Federativa do Brasil foi feita em 1889, durante a República Velha. A frase "Ordem e Progresso"'+
' representa o positivismo, ideia segundo a qual a sociedade deve ser científica e autoritária, para que haja desenvolvimento. Acredita-se ' +
'que as cores verde e amarelo tenham surgido da riqueza presente nas matas e dos metais preciosos (o outro). Contudo, historiadores afirmam que ' +
'a escolha dessas cores provém da união entre as famílias reais Bragança (Brasil) e Habsburgo (Áustria).';

function alertModal(msg){
	modalAlert.style.display = "block";
	document.getElementById("mensagem").innerHTML = msg;
}

document.getElementById("ok").onclick = function(){modalAlert.style.display = "none";}