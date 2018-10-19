document.getElementById("cadastro").onsubmit = function(){
	var email = document.getElementById("email").value;
	var data = document.getElementById("data").value;
	var dia = parseInt(data.substring(0,2));
	var mes = parseInt(data.substring(3,5));
	var ano = parseInt(data.substring(6,10));
	if (dia > 31 || mes > 12 || ano > 2018 || ano < 1890)
	{
		alert('Data inválida');
		return false;
	}
	else if (email.indexOf("@") == -1 || email.indexOf(".com") == -1){
		alert('Email inválido');
		return false;
	}
	else{
		var emailJaExiste = false;
		arr = JSON.parse(localStorage.getItem("usuarioGeral"));
		for(var i=0; i<arr.length; i++)
			if(email == arr[i].email)
			{
				alert('Email já existente no site');
				emailJaExiste = true;
				return false;
				break;
			}
		if(!emailJaExiste)
		{
			alert('Conta criada');
			return true;
		}
	}
}

/*cadastrar = function(form){
	$.post( "http://localhost:3000/usuario", form.serialize()).done(function(data){
		
		if (!data.erro) {
			alert('Chegou quio');
			form.each(function(data){
			location.href = "inicio.html";
		});
		}
		alert(data.mensagem);
	});
};*/