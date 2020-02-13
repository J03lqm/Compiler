"use strict"
/////////////////
///  FUNCTIONS
/////////////////

/**
 * Generar
 * Receives code as parameter and converts it into binary 
 * @param {String} intrucciones - Code that is going to be converted into binary instructions
 * @return {String} Binary code
 */
function generar(intrucciones) {
  if (intrucciones != "") {
    // Array that contains the instructions
    let arrInstrucciones = [];
    // String where binary code is going to be written
    let maquina = "";
    arrInstrucciones = intrucciones.split(/ |\n/);
    for (let x = 0; x < arrInstrucciones.length; x++) {
      // Calculates value in binary
      if (isNaN(arrInstrucciones[x]) === false) {
        let valor = calcularBinario(arrInstrucciones[x]);
        maquina += valor;
      }

      // Instructions
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
      // Registeries
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
      // Write "00000000" as value in instructions that doesnt request it
      if ((arrInstrucciones[x] == "R0" || arrInstrucciones[x] == "R1" || arrInstrucciones[x] == "R2" || arrInstrucciones[x] == "R3" || arrInstrucciones[x] == "R4" || arrInstrucciones[x] == "R5" || arrInstrucciones[x] == "R6" || arrInstrucciones[x] == "R7") && isNaN(arrInstrucciones[x + 1]) === true) {
        maquina += "00000000";
      }
    }
    txtResultado.innerHTML = maquina;
  return maquina;
  }
}

/**
 * Converts a decimal number into binary number
 * @param {num} num - Decimal number which is going to be converted
 * @return {num} num converted into binary
 */
function calcularBinario(num) {
  // Calculated binary number (reverse)
  let cadena = "";
  // Final binary number
  let cadenaInvertida = "";
  while (num != 0 && num != 1) {
    cadena += num % 2;
    num = Math.floor(num / 2);
  }
  if (num == 1) {
    cadena += "1";
  }
// Ensure binary number length is 8
  for (let i = cadena.length; i < 8; i++) {
    cadena += "0";
  }
// Reverts the string
  for (let x = cadena.length; x >= 0; x--) {
    cadenaInvertida += cadena.charAt(x);
  }
  return cadenaInvertida;
}

/**
 * Excutes the binary code and write its result in txtEjecucion
 * @param {String} maquina - Binary code that is going to be executed
 * registroDec {String} - Contains the decimal registry
 * valorDec {String} - Contains the decimal value
 */
function ejecutar(maquina) {
  let arrFunciones = maquina.match(/.{1,16}/g);
  let arrRegistro = [0, 0, 0, 0, 0, 0, 0, 0];
  txtEjecucion.innerHTML="";
  for (let x = 0; x < arrFunciones.length; x++) {
    // String that contain JUST the instruction
    let instruccion = arrFunciones[x].slice(0, 5);
    // String that contains JUST the registry
    let registroBin = arrFunciones[x].slice(5, 8);
    // String that contains JUST the value
    let valorBin = arrFunciones[x].slice(8, 16);

    // Instrucciones
    // imprime
    if (instruccion == "00000") {
      let registroDec = calcularDecimal(registroBin);
      txtEjecucion.innerHTML+=arrRegistro[registroDec];
    }
    // imprimec
    else if(instruccion == "00001"){
      let registroDec = calcularDecimal(registroBin);
      // Receives the character in Unicode
      let caracter=String.fromCharCode(arrRegistro[registroDec]);
      txtEjecucion.innerHTML+=caracter;
    }
    // valor
    else if(instruccion=="00010"){
      let registroDec = calcularDecimal(registroBin);
      let valorDec = calcularDecimal(valorBin);
      arrRegistro[registroDec]=valorDec;
    }
    // borra
    else if(instruccion=="00011"){
      let registroDec = calcularDecimal(registroBin);
      arrRegistro[registroDec]=0;
    }
    // suma
    else if(instruccion=="00100"){
      let registroDec = calcularDecimal(registroBin);
      let valorDec = calcularDecimal(valorBin);
      arrRegistro[registroDec]+=valorDec;
    }
    // resta
    else if(instruccion=="00101"){
      let registroDec = calcularDecimal(registroBin);
      let valorDec = calcularDecimal(valorBin);
      arrRegistro[registroDec]-=valorDec;
      if(arrRegistro[registroDec]<0){
        arrRegistro[registroDec]=0;
      }
    }
    // salta
    else if(instruccion=="00110"){
      let valorDec = calcularDecimal(valorBin);
      x=valorDec-1;
    }
    // saltasi0
    else if(instruccion=="00111"){ 
      let registroDec = calcularDecimal(registroBin);
      if(arrRegistro[registroDec]==0){ 
      let valorDec = calcularDecimal(valorBin);
      x=valorDec-1;
      }
    }
  }
}
/**
 * Converts a binary number into decimal
 * @param {String} bin - Binary number which is going to be converted
 * @returns {number} bin in decimal
 */
function calcularDecimal(bin) {
  let decimal=0;
  // Array that contains every digit in bin
  let arrBin=bin.split("");
  let binReverse = arrBin.reverse().join("");
  for(let x=0;x<binReverse.length;x++){
    if((x==0)&&(binReverse.charAt(x)==1)){
    decimal+=1;
    }
    else if(binReverse.charAt(x)==1){
      decimal+=Math.pow(2,x);
    }
  }
  return decimal;
}

/////////////////
///  Main
/////////////////

let txtIntrucciones = document.querySelector("#txtIntrucciones");
let txtResultado = document.querySelector("#txtResultado");
let txtEjecucion = document.querySelector("#txtEjecucion");
document.querySelector("#btnGenerar").addEventListener("click", function () { generar(txtIntrucciones.value) });
document.querySelector("#btnEjecutar").addEventListener("click", function () { ejecutar(txtResultado.value) });
