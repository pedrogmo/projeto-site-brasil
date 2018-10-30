var patternNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

document.getElementById("criarConta").onclick = function(){
	var senha = document.getElementById("senha").value.trim();
	var senha2 = document.getElementById("confirmarSenha").value.trim();
	var nome = document.getElementById("nome").value.trim();
	var pais = document.getElementById("nacionalidade").value.trim();
	var email = document.getElementById("email").value.trim();
	var data = document.getElementById("data").value;
	var dia = parseInt(data.substring(0,2));
	var mes = parseInt(data.substring(3,5));
	var ano = parseInt(data.substring(6,10));	
	if (senha == "" || senha2 == "")
	{
		alert("Senha inválida!");
		document.getElementById("senha").value = document.getElementById("confirmarSenha").value = "";	
	}
	else if (nome == "" || patternNome.test(nome) == false)
	{
		alert("Nome inválido!");
		document.getElementById("nome").value = "";
	}	
	else if (pais == "")
	{
		alert("País inválido!");
		document.getElementById("nacionalidade").value = "";
	}
	else if (isNaN(dia) || isNaN(mes) || isNaN(ano) || dia > 31 || mes > 12 || ano > 2018 || ano < 1890 || dia < 1 || mes < 1)
	{
		alert('Data inválida!');
		document.getElementById("data").value = "";
	}
	else if (email.indexOf("@") == -1 || email.indexOf(".com") == -1){
		alert('Email inválido!');
		document.getElementById("email").value = "";
	}
	else if (senha != senha2)
	{
		alert("As senhas não estão iguais!");
		document.getElementById("senha").value = document.getElementById("confirmarSenha").value = "";
	}
	else{
		var emailJaExiste = false;
		var usuarios = JSON.parse(localStorage.getItem("usuarioGeral"));
		for(var i=0; i<usuarios.length; i++)
			if(email == usuarios[i].email)
			{
				alert('Email já existente no site!');
				emailJaExiste = true;
				document.getElementById("email").value = "";
				break;
			}
		if(!emailJaExiste)
		{			
			var user = new Object();
			user.nome = nome;
			user.senha = senha;
			user.email = email;
			user.aniversario = data;
			user.pais = pais;
			$.post('http://localhost:3000/usuario', user);
			alert('Conta criada!');
			setTimeout(  function(){ location.href = "inicio.html";}  , 100);
		}
	}
}