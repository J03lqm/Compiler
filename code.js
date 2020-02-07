"use strict"
/////////////////
///  FUNCTIONS
/////////////////

/**
 * 
 * @param {*} intrucciones 
 */
function Generar(intrucciones) {
  if (intrucciones != "") {
    let arrInstrucciones = [];
    let maquina = "";
    arrInstrucciones = intrucciones.split(/ |\n/);
    for (let x = 0; x < arrInstrucciones.length; x++) {
      //Calcula el valor
      if (isNaN(arrInstrucciones[x]) === false) {
        let valor = calcularBinario(arrInstrucciones[x]);
        maquina += valor;
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
      if ((arrInstrucciones[x] == "R0" || arrInstrucciones[x] == "R1" || arrInstrucciones[x] == "R2" || arrInstrucciones[x] == "R3" || arrInstrucciones[x] == "R4" || arrInstrucciones[x] == "R5" || arrInstrucciones[x] == "R6" || arrInstrucciones[x] == "R7") && isNaN(arrInstrucciones[x + 1]) === true) {
        maquina += "00000000";
      }
    }
    txtResultado.innerHTML = maquina;
  }
  else
    return maquina;
}

/**
 * 
 * @param {*} num 
 */
function calcularBinario(num) {
  let cadena = "";
  let cadenaInvertida = "";
  while (num != 0 && num != 1) {
    cadena += num % 2;
    num = Math.floor(num / 2);
  }
  if (num == 1) {
    cadena += "1";
  }
  for (let i = cadena.length; i < 8; i++) {
    cadena += "0";
  }

  for (let x = cadena.length; x >= 0; x--) {
    cadenaInvertida += cadena.charAt(x);
  }
  return cadenaInvertida;
}

function ejecutar(maquina) {
  let arrFunciones = maquina.match(/.{1,16}/g);
  let arrRegistro = [0, 0, 0, 0, 0, 0, 0, 0];
  txtEjecucion.innerHTML = "<p>";
  for (let x = 0; x < arrFunciones.length; x++) {
    console.log(arrFunciones[x]);
    let instruccion = arrFunciones[x].slice(0, 5);
    let registroBin = arrFunciones[x].slice(5, 8);
    let registroDec = calcularDecimal(registroBin);
    let valorBin = arrFunciones[x].slice(8, 16);
    let valorDec = calcularDecimal(valorBin);

    // Instrucciones
    if (instruccion == "00000") {
      txtEjecucion.innerHTML+=arrRegistro[registroDec];
    }
    else if(instruccion == "00001"){
      let caracter="";
      caracter.fromCharCode();
      txtEjecucion.innerHTML+=
    }
  }
  txtEjecucion.innerHTML += "</p>";
}

function calcularDecimal(bin) {
  let decimal=0;
  let arrBin=bin.split("");
  console.log(arrBin);
  let binReverse = arrBin.reverse().join("");
  console.log(binReverse);
  for(let x=0;x<binReverse.length;x++){
    if((x==0)&&(binReverse.charAt(x)==1)){
    decimal+=1;
    }
    else if(binReverse.charAt(x)==1){
      decimal+=Math.pow(2,x);
    }
  }
  console.log(decimal);
  return decimal;
}

/////////////////
///  Main
/////////////////

let txtIntrucciones = document.querySelector("#txtIntrucciones");
let txtResultado = document.querySelector("#txtResultado");
let txtEjecucion = document.querySelector("#txtEjecucion");
document.querySelector("#btnGenerar").addEventListener("click", function () { Generar(txtIntrucciones.value) });
document.querySelector("#btnEjecutar").addEventListener("click", function () { ejecutar(txtResultado.value) });
