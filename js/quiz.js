var acertos, erros, respostas, o, p, r, t;

window.onload = function() //vai dar ruim
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
    p[1] =  "";
    r[1] =  "";
    p[2] =  "";
    r[2] =  "";
    p[3] =  "";
    r[3] =  "";
    p[4] =  "";
    r[4] =  "";
    p[5] =  "";
    r[5] =  "";
    p[6] =  "";
    r[6] =  "";
    p[7] =  "";
    r[7] =  "";
    p[8] =  "";
    r[8] =  "";
    p[9] =  "";
    r[9] =  "";
    p[10] = "";
    r[10] = "";
    p[11] = "";
    r[11] = "";
    p[12] = "";
    r[12] = "";
    p[13] = "";
    r[13] = "";
    p[14] = "";
    r[14] = "";
    p[15] = "";
    r[15] = "";
    p[16] = "";
    r[16] = "";
    p[17] = "";
    r[17] = "";
    p[18] = "";
    r[18] = "";
    p[19] = "";
    r[19] = "";
    p[20] = "";
    r[20] = "";
    p[21] = "";
    r[21] = "";
    p[22] = "";
    r[22] = "";
    p[23] = "";
    r[23] = "";
    p[24] = "";
    r[24] = "";
    p[25] = "";
    r[25] = "";
    p[26] = "";
    r[26] = "";
    p[27] = "";
    r[27] = "";
    p[28] = "";
    r[28] = "";
    p[29] = "";
    r[29] = "";
    p[30] = "";
    r[30] = "";
     
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

document.getElementById('resp').onclick = function()
{
  var texto = '<ol>';
  for(var i = 1; i <= t; i++)
  texto += '<ul>P: '+p[o[i]]+'<br>R: '+r[o[i]]+'</ul><br>';
  texto += '</ol>';
  var janela = window.open("", "_blank", 'height=800,width=1000');
  janela.document.write(texto);
  janela.focus();
}