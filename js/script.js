
var modo = confirm("¿Quiere cambiar los estilos de la web?")
if(modo){
     var body=document.getElementById("body");
     body.style.backgroundColor="#fcf79f";

     var parr= document.getElementsByTagName("p");

     for(i=0; i<parr.length;i++)
     parr[i].style.color= "#0ca001";

     var destacado= document.getElementById("destacado")
     destacado.style.fontSize="24px"

     var titulos= document.getElementsByTagName("h2")

     for(i=0; i< titulos.length; i++){
        titulos[i].style.fontFamily="Arial"
     }
    
}

var elemento = document.createElement("a");
   var vinculo= document.createTextNode("Vinculo Creado - Hacé Click Aqui")
  var referencia = document.createAttribute("href");
  referencia.value= "https://www.lipsum.com"
  elemento.appendChild(vinculo);
  elemento.setAttributeNode(referencia)
  


  var vinculoCreado = document.getElementById("vinculos");
  vinculoCreado.appendChild(elemento);
