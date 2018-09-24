var acertos, erros, respostas, o, p, r, t;

function quizInicio()
{
    document.getElementById("resp").style.visibility = "hidden";
    acertos=0; //quantidade de acertos e erros
    erros=0;
    respostas = new Array(); //repostas do usuário
    o = new Array();
    p = new Array(); //perguntas
    r = new Array(); //respostas certas
    t = 30; //quantidade de perguntas
    
    //perguntas e respostas:
    p[1] =  "1. Qual é o melhor presidente em altura de idade?";
    r[1] =  "1. Qual é o melhor presidente em altura de idade?";
    p[2] =  "1. Qual é o melhor presidente em altura de idade?";
    r[2] =  "1. Qual é o melhor presidente em altura de idade?";
    p[3] =  "1. Qual é o melhor presidente em altura de idade?";
    r[3] =  "1. Qual é o melhor presidente em altura de idade?";
    p[4] =  "1. Qual é o melhor presidente em altura de idade?";
    r[4] =  "1. Qual é o melhor presidente em altura de idade?";
    p[5] =  "1. Qual é o melhor presidente em altura de idade?";
    r[5] =  "1. Qual é o melhor presidente em altura de idade?";
    p[6] =  "1. Qual é o melhor presidente em altura de idade?";
    r[6] =  "1. Qual é o melhor presidente em altura de idade?";
    p[7] =  "1. Qual é o melhor presidente em altura de idade?";
    r[7] =  "1. Qual é o melhor presidente em altura de idade?";
    p[8] =  "1. Qual é o melhor presidente em altura de idade?";
    r[8] =  "1. Qual é o melhor presidente em altura de idade?";
    p[9] =  "1. Qual é o melhor presidente em altura de idade?";
    r[9] =  "1. Qual é o melhor presidente em altura de idade?";
    p[10] = "1. Qual é o melhor presidente em altura de idade?";
    r[10] = "1. Qual é o melhor presidente em altura de idade?";
    p[11] = "1. Qual é o melhor presidente em altura de idade?";
    r[11] = "1. Qual é o melhor presidente em altura de idade?";
    p[12] = "1. Qual é o melhor presidente em altura de idade?";
    r[12] = "1. Qual é o melhor presidente em altura de idade?";
    p[13] = "1. Qual é o melhor presidente em altura de idade?";
    r[13] = "1. Qual é o melhor presidente em altura de idade?";
    p[14] = "1. Qual é o melhor presidente em altura de idade?";
    r[14] = "1. Qual é o melhor presidente em altura de idade?";
    p[15] = "1. Qual é o melhor presidente em altura de idade?";
    r[15] = "1. Qual é o melhor presidente em altura de idade?";
    p[16] = "1. Qual é o melhor presidente em altura de idade?";
    r[16] = "1. Qual é o melhor presidente em altura de idade?";
    p[17] = "1. Qual é o melhor presidente em altura de idade?";
    r[17] = "1. Qual é o melhor presidente em altura de idade?";
    p[18] = "1. Qual é o melhor presidente em altura de idade?";
    r[18] = "1. Qual é o melhor presidente em altura de idade?";
    p[19] = "1. Qual é o melhor presidente em altura de idade?";
    r[19] = "1. Qual é o melhor presidente em altura de idade?";
    p[20] = "1. Qual é o melhor presidente em altura de idade?";
    r[20] = "1. Qual é o melhor presidente em altura de idade?";
    p[21] = "1. Qual é o melhor presidente em altura de idade?";
    r[21] = "1. Qual é o melhor presidente em altura de idade?";
    p[22] = "1. Qual é o melhor presidente em altura de idade?";
    r[22] = "1. Qual é o melhor presidente em altura de idade?";
    p[23] = "1. Qual é o melhor presidente em altura de idade?";
    r[23] = "1. Qual é o melhor presidente em altura de idade?";
    p[24] = "1. Qual é o melhor presidente em altura de idade?";
    r[24] = "1. Qual é o melhor presidente em altura de idade?";
    p[25] = "1. Qual é o melhor presidente em altura de idade?";
    r[25] = "1. Qual é o melhor presidente em altura de idade?";
    p[26] = "1. Qual é o melhor presidente em altura de idade?";
    r[26] = "1. Qual é o melhor presidente em altura de idade?";
    p[27] = "1. Qual é o melhor presidente em altura de idade?";
    r[27] = "1. Qual é o melhor presidente em altura de idade?";
    p[28] = "1. Qual é o melhor presidente em altura de idade?";
    r[28] = "1. Qual é o melhor presidente em altura de idade?";
    p[29] = "1. Qual é o melhor presidente em altura de idade?";
    r[29] = "1. Qual é o melhor presidente em altura de idade?";
    p[30] = "1. Qual é o melhor presidente em altura de idade?";
    r[30] = "1. Qual é o melhor presidente em altura de idade?";
     
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
  document.getElementById("resp").style.visibility = "visible";

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
  texto += '<ul>P: '+p[o[i]]+'<br>R: '+r[o[i]]+'</ul><br>';
  texto += '</ol>';
  var janela = window.open("", "_blank", 'height=800,width=1000');
  janela.document.write(texto);
  janela.focus();
}