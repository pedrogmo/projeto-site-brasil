var modal = document.getElementById('simpleModal');
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
		alert ('Email e/ou Senha incorreto(a)');	
	else
	{
		usuario = arr[i];
		sessionStorage.setItem("usuario", JSON.stringify(usuario));
		sessionStorage.setItem("logou", "sim");
		logou = true;
		alert ('Logado com sucesso');
		modal.style.display = 'none';
		location.reload();
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

document.getElementById("bandeira").onclick = function(){ alert(band); }

var band = 'A bandeira atual da República Federativa do Brasil foi feita em 1889, durante a República Velha. A frase "Ordem e Progresso"'+
' representa o positivismo, ideia segundo a qual a sociedade deve ser científica e autoritária, para que haja desenvolvimento. Acredita-se ' +
'que as cores verde e amarelo tenham surgido da riqueza presente nas matas e dos metais preciosos (o outro). Contudo, historiadores afirmam que ' +
 'a escolha dessas cores provém da união entre as famílias reais Bragança (Brasil) e Habsburgo (Áustria).';