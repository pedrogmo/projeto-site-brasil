function quizInicio()
{
	var confirmacao = confirm("Bem-vindo ao quiz do Brasil. Você deseja começar?");
	if (!confirmacao)
		alert('Que pena, você não quiz participar...');
	else
	{	
		/*var quiz = window.open("", "_blank", 'height=800,width=1000');
		window.focus(); */  	
    	var certo = "<b>Correto!</b>"; var errado = "<b style='color:red;'>Errado!</b>";var o = new Array();
    	var acertos=0; var erros=0; var respostas = new Array(); var p = new Array();var r = new Array();
    	var t=10;
    	
    	//perguntas:
    	p[1] = "Quantos animais de cada especie Moisés levou para a arca?";
    	r[1] = '0';
    	p[2] = "Se um triângulo retângulo tem lados 6 e 8, qual é o valor da sua hipotenusa?";
    	r[2] = 10;
    	p[3] = "Em que ano foi iniciada a 1º Guerra Mundial?";
    	r[3] = 1914;
    	p[4] = "Em que ano terminou a 1º Guerra Mundial?";
    	r[4] = 1918;
    	p[5] = "Em que ano foi iniciada a 2º Guerra Mundial?";
    	r[5] = 1939;
    	p[6] = "Em que ano terminou a 2º Guerra Mundial?";
    	r[6] = 1945;
    	p[7] = "Qual e o único numero primo que é par?";
    	r[7] = 2;
    	p[8] = "Qual deve ser a medida do ângulo de um triangulo equilátero?";
    	r[8] = 60;
    	p[9] = "Quantos nomes tinha D. Pedro I?";
    	r[9] = 18;
    	p[10] = "Quantos nomes tinha D. Pedro II?";
    	r[10] = 15;
    
     	for(var i=1;i<=t;i++){o[i] = i;} 
     	for(var i=1;i<=10;i++)          
     	{
     		n=Math.round(t*(Math.random())); 
      		m=Math.round(t*(Math.random()));
      		if(m==0){m++;}
      		if(n==0){n++;}
      		var temp = o[n];
      		o[n]=o[m];
      		o[m]=temp;
     	} 
    	for(var i=1;i<=t;i++)
    	{
    	  respostas[o[i]] = prompt(p[o[i]],"");
    	   if(respostas[o[i]]==r[o[i]]){respostas[o[i]]=certo;acertos++;}else{respostas[o[i]]=errado;erros++;}
    	}
    	//fim do quiz
    	document.write("Javascript Quiz:<br><br>Suas respostas:<br><br>");
    	document.write("<ol>");
    	for(var i=1;i<=t;i++)
    	{
    		document.write("<li>"+respostas[o[i]]);}
    		document.write("</ol>");
    		document.write("<br>Total de acertos: "+acertos);
    		document.write("<br>Total de erros: "+erros);
    		document.write("<br><br><input type=button value='Respostas' Onclick=javascript:if(document.getElementById('rp').style.display=='none'){document.getElementById('rp').style.display='block';}else{document.getElementById('rp').style.display='none';}>");
    		document.write("<br><div id='rp' class='rp' style='display:none;'><ol>");
    	for(var i=1;i<=t;i++)
    	{
    		document.write("<li>"+p[o[i]]+"<br>R:"+r[o[i]]);}
    		document.write("</ol></div>");
   		}
	}