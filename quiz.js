function quizInicio()
{
  var texto = "";
  setTimeout(function(){
  var confirmacao = confirm("Bem-vindo ao quiz do Brasil. Você deseja começar?");
  if (!confirmacao)
    texto += '<h2>Que pena, você não "quiz" participar...</h2>';
  else
  {	
    var certo = "<b>Correto!</b>"; 
    var errado = "<b style='color:red;'>Errado!</b>";
 
    var acertos=0;
    var erros=0;
    var respostas = new Array();
    var o = new Array();
    var p = new Array();
    var r = new Array();
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
     
    for(var i=1;i<=t;i++)
      o[i] = i;
    
    for(var i=1;i<=10;i++)          
    {
      var n=Math.round(t*(Math.random())); 
      var m=Math.round(t*(Math.random()));
      if(m==0)
        m++;
      if(n==0)
        n++;     	
      var aux = o[n];
      o[n]=o[m];
      o[m]=aux;
    } 
    for(var i=1;i<=t;i++)
    {
      respostas[o[i]] = prompt(p[o[i]],"");
      if(respostas[o[i]]==r[o[i]])
      {
        respostas[o[i]]=certo;
        acertos++;
      }        
      else
      {
        respostas[o[i]]=errado;
        erros++;
      }
    }
    
    //fim do quiz
    texto = "<h1>Resultado do quiz</h1>";
    texto = "<br><aside id = 'respondido'><ol>";
    for(var i=1;i<=t;i++)    	
      texto += "<li>"+respostas[o[i]] + "</li>";      
    texto += "</ol>";
    texto += "<br><p>Total de acertos: "+acertos + "</p>";
    texto += "<br><p>Total de erros: "+erros + "</p>";
    texto += "<br><br><input class = 're' type = button value='Respostas' onclick = javascript:if(document.getElementById('certo').style.display=='none'){document.getElementById('certo').style.display='block';}else{document.getElementById('certo').style.display='none';}>";
    texto += "</aside><br><article id='certo' style='display: none;'><ol class = 'certinho'>";
    for(var i=1;i<=t;i++)    	
      texto += "<li>"+p[o[i]]+"<br>R:"+r[o[i]] + "</li>";
    texto += "</ol></article>";
    }
    document.write('' + 
    '<body onload = "quizInicio();">' +
    '<link href="brasil.css" rel="stylesheet" type="text/css"/>' +
    '<script src="curiosidades.js"></script>' +
    '<script src="quiz.js"></script>' +
    '<nav id = "menuPrincipal">'+
    '<ul>'+
    '<li onclick = "bandeira();"><span class = "logo"></span></li>' +
    '<li><a href = "./inicio.html">Início</a></li>' +
    '<li><a href = "./mapa.html">Mapa</a></li>' +
    '<li><a href = "./historia.html">História</a></li>' +
    '<li><a href = "./governantes.html">Governantes</a></li>' +
    '<li><a href = "./noticias.html">Notícias</a></li>' +
    '<li><a href = "./quiz.html">Quiz</a></li>' +
    '<li onclick = "curiosidade();"><a>Curiosidades</a></li>' +
    '</ul>'+
    '</nav>'+
    '<br><br><br>'+
    '<section id = principal> <br>'+ texto +
    '</section>'+
    '</body>');    
    }, 200);
}