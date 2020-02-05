"use strict"
/////////////////
///  FUNCTIONS
/////////////////

/**
 * 
 * @param {*} intrucciones 
 */
function Generar(intrucciones) {
  if (intrucciones!=""){
  let arrInstrucciones = [];
  let maquina = "";
  arrInstrucciones = intrucciones.split(/ |\n/);
  for (let x = 0; x < arrInstrucciones.length; x++) {
    //Calcula el valor
    if (isNaN(arrInstrucciones[x])===false) {
      let valor = calcularBinario(arrInstrucciones[x]);
      maquina+=valor;
    }
    //instrucciones
    else if (arrInstrucciones[x] == "imprime") {
      maquina += "00000";
    }
    else if (arrInstrucciones[x] == "imprimec") {
      maquina += "00001";
    }
    else if (arrInstrucciones[x] == "valor") {
      maquina += "00010";
    }
    else if (arrInstrucciones[x] == "borra") {
      maquina += "00011";
    }
    else if (arrInstrucciones[x] == "suma") {
      maquina += "00100";
    }
    else if (arrInstrucciones[x] == "resta") {
      maquina += "00101";
    }
    else if (arrInstrucciones[x] == "salta") {
      maquina += "00110000";
    }
    else if (arrInstrucciones[x] == "saltasi0") {
      maquina += "00111";
    }
    //Registros
    else if (arrInstrucciones[x] == "R0") {
      maquina += "000";
    }
    else if (arrInstrucciones[x] == "R1") {
      maquina += "001";
    }
    else if (arrInstrucciones[x] == "R2") {
      maquina += "010";
    }
    else if (arrInstrucciones[x] == "R3") {
      maquina += "011";
    }
    else if (arrInstrucciones[x] == "R4") {
      maquina += "100";
    }
    else if (arrInstrucciones[x] == "R5") {
      maquina += "101";
    }
    else if (arrInstrucciones[x] == "R6") {
      maquina += "110";
    }
    else if (arrInstrucciones[x] == "R7") {
      maquina += "111";
    }
    if((arrInstrucciones[x]=="R0"||arrInstrucciones[x]=="R1"||arrInstrucciones[x]=="R2"||arrInstrucciones[x]=="R3"||arrInstrucciones[x]=="R4"||arrInstrucciones[x]=="R5"||arrInstrucciones[x]=="R6"||arrInstrucciones[x]=="R7")&&isNaN(arrInstrucciones[x+1])===true){
      maquina += "00000000";
      console.log(arrInstrucciones[x-1]);
      console.log(arrInstrucciones[x]);
    }
  }
  txtResultado.innerHTML=maquina;
  }
  else
  return
}

/**
 * 
 * @param {*} num 
 */
function calcularBinario(num){
  let cadena="";
  let cadenaInvertida="";
  while(num!=0&&num!=1){
    cadena+=num%2;
    num=Math.floor(num/2);
  }
  if(num==1){
    cadena+="1";
  }
  for(let i=cadena.length;i<8;i++){
cadena+="0";
  }
  
  for(let x=cadena.length;x>=0;x--){
cadenaInvertida+=cadena.charAt(x);
  }
  return cadenaInvertida;
}

/////////////////
///  Main
/////////////////


let txtIntrucciones = document.querySelector("#txtIntrucciones");
let txtResultado = document.querySelector("#txtResultado");
let txtEjecucion = document.querySelector("#txtEjecucion");
document.querySelector("#btnGenerar").addEventListener("click",function(){Generar(txtIntrucciones.value)});
