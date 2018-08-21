function quizInicio(){
	var confirmacao = confirm("Bem-vindo ao quiz do Brasil. Você deseja começar?");
	if (!confirmacao)
		alert('Que pena, você não quiz participar...');
	else
	{
		var p = new Array();
		var r = new Array();
		var qtd = 30;
		p[1] = "Em que ano o Brasil se tornou independente?";
		r[1] = "1822";		
		p[2] = "Qual foi o décimo terceiro presidente do Brasil, conforme a lista do site?"
		r[2] = "Washington Luís";

		var quiz = window.open("", "_blank", 'height=800,width=1000');
		var texto;
		
		for(var i = 0; i <= qtd; i++)
		{
			texto = '<html><body bgcolor = "blue">' + '<h1>' + p[random] + '</h1>';
			quiz.write(texto);
			quiz.focus();
		}
	}
}