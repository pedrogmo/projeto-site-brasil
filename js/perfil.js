var usuarioPerfil;
var urlMudanca;

window.onload = function(){
	// if (sessionStorage.getItem("logou") != "sim")
	// 	location.href = "inicio.html";
	usuarioPerfil = JSON.parse(sessionStorage.getItem("usuario"));
	urlMudanca = "http://localhost:3000/usuario/" + usuarioPerfil.codUsuario;
	document.getElementById("nomeUsuario").innerHTML = usuarioPerfil.nomeUsuario;
	document.getElementById("emailUsuario").innerHTML = usuarioPerfil.email;
	document.getElementById("aniversarioUsuario").innerHTML = usuarioPerfil.dataAniversario;
	document.getElementById("paisUsuario").innerHTML = usuarioPerfil.nacionalidade;
	document.getElementById("pontuacaoUsuario").innerHTML = usuarioPerfil.pontuacao;
}

document.getElementById("trocarSenha").onclick = function(){
	/*
	var updateSenha = new XMLHttpRequest();
    updateSenha.open("PATCH", urlMudanca, true);
    updateSenha.send();
    */
}

document.getElementById("excluirConta").onclick = function(){
	var confirmacao = confirm("Você deseja excluir sua conta?");
	if (confirmacao){
		var excluirConta = new XMLHttpRequest();
	    excluirConta.open("DELETE", urlMudanca, true);
	    excluirConta.send();
	    sessionStorage.removeItem("usuario");
	    sessionStorage.removeItem("logou");
	    alert('Sua conta foi excluída do Brasilee');
	    location.href = "inicio.html";
	}
}

//Configura o botão mudar foto para abrir os documentos do usuário
document.getElementById("btn-choose").onclick = function(){
	document.getElementById("choose-photo").click();
}

function readURL(input)
{
	if(input.files && input.files[0])
	{
		var reader = new FileReader();
		reader.onload = function(e)
		{
			$('#user-photo')
			.attr('src', e.target.result)
			.height('100%')
			.width('100%');
		};
		reader.readAsDataURL(input.files[0]);
	}
}