# Compiller
## Functions

<dl>
<dt><a href="#generar">generar(intrucciones)</a> ⇒ <code>String</code></dt>
<dd><p>
Receives code as parameter and converts it into binary</p>
</dd>
<dt><a href="#calcularBinario">calcularBinario(num)</a> ⇒ <code>num</code></dt>
<dd><p>Converts a decimal number into binary number</p>
</dd>
<dt><a href="#ejecutar">ejecutar(maquina)</a></dt>
<dd><p>Excutes the binary code and write its result in txtEjecucion</p>
</dd>
<dt><a href="#calcularDecimal">calcularDecimal(bin)</a> ⇒ <code>number</code></dt>
<dd><p>Converts a binary number into decimal</p>
</dd>
</dl>

<a name="generar"></a>

## generar(intrucciones) ⇒ <code>String</code>
Generar
Receives code as parameter and converts it into binary

**Kind**: global function  
**Returns**: <code>String</code> - Binary code  

| Param | Type | Description |
| --- | --- | --- |
| intrucciones | <code>String</code> | Code that is going to be converted into binary instructions |

<a name="calcularBinario"></a>

## calcularBinario(num) ⇒ <code>num</code>
Converts a decimal number into binary number

**Kind**: global function  
**Returns**: <code>num</code> - num converted into binary  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>num</code> | Decimal number which is going to be converted |

<a name="ejecutar"></a>

## ejecutar(maquina)
Excutes the binary code and write its result in txtEjecucion

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| maquina | <code>String</code> | Binary code that is going to be executed 
registroDec <code>{String}</code> - Contains the decimal registry <br>valorDec <code>{String}</code> - Contains the decimal value |

<a name="calcularDecimal"></a>

## calcularDecimal(bin) ⇒ <code>number</code>
Converts a binary number into decimal

**Kind**: global function  
**Returns**: <code>number</code> - bin in decimal  

| Param | Type | Description |
| --- | --- | --- |
| bin | <code>String</code> | Binary number which is going to be converted |
