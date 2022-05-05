var selecioneMetodo = document.querySelector('#selecionar') 
var ocultarIncremento = document.querySelector('#ocultarIncremento') 
var code = document.querySelector('#codificar') 
var decode = document.querySelector('#decodificar') 
var textoUsuario = document.querySelector('#escreva');  
var resultadoTexto = document.getElementById('resultado');
var botao = document.querySelector('#botao') 


selecioneMetodo.addEventListener("change", function (evento) {        
    var metodoSelecionado = evento.target.value;
  
    if (metodoSelecionado == "base64") {
        ocultarIncremento.style.display = "none";
        botao.setAttribute("onclick", "base64()") 
    } else {
        ocultarIncremento.style.display = "block";
        botao.setAttribute("onclick", "cesar()")   
    }
  });


codificar.addEventListener("click", function () {
    botao.innerText = "Codificar";               
  });
  
 decodificar.addEventListener("click", function () {
    botao.innerText = "Decodificar";             
  });

function base64(){
  var input = textoUsuario.value
  var escolher = code.checked
  resultadoTexto.value = base64Logic(input, escolher);
}

function base64Logic(input, escolher){
  return (escolher)? btoa(input) : atob(input);
}

function cesar()  {
  var input = textoUsuario.value.split("");
  var escolher = code.checked
  var numero =  parseInt(ocultarIncremento.value);
  if (escolher){
    resultadoTexto.value = cesarCodificando(input, numero);
  } 
  else {
    resultadoTexto.value = cesarDecodificando(input, numero);
  }
}

function cesarCodificando(arr, chave){
  return arr.map((p)=>{
      let code = p.charCodeAt();
      if(code >= 65 && code <= 90){
          return String.fromCharCode(((code - 65 + chave) % 26) + 65)
      } else if(code >= 97 && code <= 122){
          return String.fromCharCode(((code - 97 + chave) % 26) + 97)
      } else return p
  }).join('')
}

function cesarDecodificando(arr, chave){
  return arr.map((p)=>{
      let code = p.charCodeAt();
      if(code >= 65 && code <= 90){
          return (code-65-chave < 0)?String.fromCharCode(((code - 65 - chave + 26)%26)+65):String.fromCharCode(((code - 65 - chave)%26)+65) 
      } else if(code >= 97 && code <= 122){
          return String.fromCharCode(((code - 97 - chave + 26) % 26) + 97)
      } else return p
  }).join('')
}