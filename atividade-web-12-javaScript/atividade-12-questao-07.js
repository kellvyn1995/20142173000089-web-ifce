

function compara() {
    var campo = Number(document.getElementById("campo").value);
   if(campo <= 10){
       document.getElementById("formulario").innerHTML = 'insuficiente';
   }else
       if(campo >10 && campo <=14){
           document.getElementById("formulario").innerHTML = 'bom';
       }else
           if(campo > 14){
               document.getElementById("formulario").innerHTML = 'muito bom';
           }
}