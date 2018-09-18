var acertos, erros, respostas, o, p, r, t, html;


function quizInicio()
{
  var texto = '';
  setTimeout(function(){
  var confirmacao = confirm("Bem-vindo ao quiz do Brasil. Você deseja começar?");
  if (!confirmacao)
    alert('<h2>Que pena, você não "quiz" participar...</h2>');
  else
  {     
    acertos=0; //quantidade de acertos e erros
    erros=0;
    respostas = new Array(); //repostas do usuário
    o = new Array();
    p = new Array(); //perguntas
    r = new Array(); //respostas certas
    t = 10; //quantidade de perguntas
    
    //perguntas e respostas:
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
      var pergunta = '<p>' + p[o[i]] + '</p>';
      texto += pergunta;
      var id = i + '';
      texto += '<input type = "text" id = "' + id + '"></input>';
    }    
    html = window.open("", "_blank", 'height=800,width=1000');    
    html.document.write('' +
      '<html>' +
      '<head>' +
      '  <meta charset="utf-8">' +
      '  <title>Quiz do Brasil</title>' +
      '  <link href="brasil.css" rel="stylesheet" type="text/css"/>' +
      '  <script src="curiosidades.js"></script>' +
      '  <script src="quiz.js"></script>' +
      '</head>' +
      '<body>' +
      '<br><br><br>' +
      '<section id = "principal" class = "quiz"> <br>' + texto +
      '<br><br><input type = "button" class = "fimquiz" value = "Enviar" onclick = "fim();"' +
      '</section>'
      );  
    html.focus();
  }
    }, 200);
} 

function fim()
{
  html.document.close();
  var certo = "Certo!"; 
  var errado = "Errado!";
  var acertou = new Array();
  for(var i=1;i<=t;i++)
  {
    var id = i + "";
    respostas[o[i]] = document.getElementById(id).value;
    if(respostas[o[i]]==r[o[i]])
    {
      acertou[o[i]] = certo;
      acertos++;
    }        
    else
    {
      acertou[o[i]] = errado;
      erros++;
    }
  }
  var texto2 = '<div id = "respondido"><ol>'
  for(var i = 0; i < t; i++)
    texto2 += '<ul>' + acertou[o[i]] + '</ul>';
  texto2 += '</ol></div><br><br>'
  texto2 += '<p>Acertos: ' + acertos + '</p><br>';
  texto2 += '<p>Erros: ' + erros + '</p><br>';
  texto2 += '<div id = "certo"><ol>';
  for(var i = 0; i < t; i++)
    texto2 += '<ul>P: '+p[o[i]]+'<br>R: '+r[o[i]]+'</ul>';
  texto2 += '</ol></div><br><br>';
  texto2 += '<input type = "button" class = "re" onclick = "botao();"></input>'

  document.write('' +
      '<html>' +
      '<head>' +
      '  <meta charset="utf-8">' +
      '  <title>Quiz do Brasil</title>' +
      '  <link href="brasil.css" rel="stylesheet" type="text/css"/>' +
      '  <script src="curiosidades.js"></script>' +
      '  <script src="quiz.js"></script>' +
      '</head>' +
      '<body>' +
      '<nav id = "menuPrincipal">' +
      '  <ul>' +
      '    <li onclick = "bandeira();"><span class = "logo"></span></li>' +
      '    <li><a href = "./inicio.html">Início</a></li>' +
      '    <li><a href = "./mapa.html">Mapa</a></li>' +
      '    <li><a href = "./historia.html">História</a></li>' +
      '    <li><a href = "./governantes.html">Governantes</a></li>' +
      '    <li><a href = "./noticias.html">Notícias</a></li>' +
      '    <li><a href = "./quiz.html">Quiz</a></li>' +
      '    <li onclick = "curiosidade();"><a>Curiosidades</a></li>' +
      '  </ul>' +
      '</nav>' +
      '<br><br><br>' +
      '<section id = "principal" class = "quiz"> <br>' + texto2 +
      '<br><br><input type = "button" class = "fimquiz" value = "Enviar" onclick = "fim();"' +
      '</section>'
      ); 
}

function  botao()
{
  if (document.getElementById("certo").style.display == "none")
    document.getElementById("certo").style.display == "block";
  else
  if (document.getElementById("certo").style.display == "block")
    document.getElementById("certo").style.display == "none";
}