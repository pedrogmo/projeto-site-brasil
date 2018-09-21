var acertos, erros, respostas, o, p, r, t;

function quizInicio()
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
      var id = i + "";
      document.getElementById(id).innerHTML = p[o[i]];
    }
}

function fim(botao)
{
  botao.style.visibility="hidden";
  document.getElementById("resp").style.visibility="visible";

  var certo = "<font color = 'lime'>Certo!</font>"; 
  var errado = "<font color = 'red'>Errado!</font>";
  var acertou = new Array();
  for(var i=1;i<=t;i++)
  {
    var id = 'r' + i;
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
  for(var i = 1; i <= t; i++)
  {
    var id = i + '';
    document.getElementById(id).innerHTML += '    ' + acertou[o[i]];
  }
  document.getElementById('acertos').innerHTML = "Acertos: " + acertos;
  document.getElementById('erros').innerHTML = "Erros: " + erros;
}

function botaoRespostas()
{
  var texto = '<ol>';
  for(var i = 1; i <= t; i++)
  texto += '<ul>P: '+p[o[i]]+'<br>R: '+r[o[i]]+'</ul>';
  texto += '</ol>';
  var janela = window.open("", "_blank", 'height=800,width=1000');
  janela.document.write(texto);
  janela.focus();
}