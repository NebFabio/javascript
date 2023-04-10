function contar (){
    var inicio = window.document.getElementById('numberini').value;
    var final = window.document.getElementById('numberfim').value;
    var passos = window.document.getElementById('numberpass').value;
    
    while (inicio <= final) {
        resu.innerHTML = (inicio) + (passos)
    }
}

/* isso vai somar o incio com os passos
var n1 = Number(inicio) 
var n2 = Number(passos) 
var s = n1 + n2
resu.innerHTML = s
*/
