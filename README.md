# Compiler
Joel Quenard Martínez<br>
Compiler proyect made as final practice in the subject HLC 2ºSMR<br>14/02/2020<br>
<a href="https://github.com/J03lqm/Compiler">Github proyect</a>
## How it works
The compiler receives a code¹ that will be translated into binary instrucions which will be executed. It uses 2Bytes instructions, where the first 5 bits will be used fort he instruction, the next 3 bits for the registry and the last byte for its value. If the instruction line is 255 or greater the execution will exit.

¹Ex: valor R1 65
## Posible instructions
<dl>
<dt><b>imprime RZ</b></dt>
<dd>Prints the value stored in the registry Z
<br><b>Example</b>

> R3 == 64
> R7 == 5 <br>
> imprime R3 → 00000011 00000000 → 64 <br>
> imprime R7 → 00000111 00000000 → 5
</dd> 
<dt><b>imprimec RZ</b></dt>
<dd>Prints the Unicode character of the value stored in the registry Z
<br><b>Example</b>

> R2 == 72 <br>
> imprimec R2 → 00001010 00000000 → H</dd>

<dt><b>valor RZ VALUE</b></dt>
<dd>Sets the RZ value to VALUE
<br><b>Example</b>

> R2 == 0 <br>
> valor R2 40→ 00010010 00101000 <br>
> imprime R2 → 00000010 00000000 → 40</dd>

<dt><b>borra RZ</b></dt>
<dd>Delete the value stored in the registry Z
<br><b>Example</b>

> R2 == 72 <br>
> borra R2 → 00011010 00000000 <br>
> imprime R2 → 00000010 00000000 → 0</dd>

<dt><b>suma RZ VALUE</b></dt>
<dd>Sum VALUE to the value stored in the registry Z
<br><b>Example</b>

> R2 == 72 <br>
> suma R2 5 → 00100010 00000101 <br>
> imprime R2 → 00000010 00000000 → 77</dd>

<dt><b>resta RZ VALUE</b></dt>
<dd>Substract VALUE to the value stored in the registry Z
<br><b>Example</b>

> R2 == 72 <br>
> resta R2 4 → 00101010 00000100 <br>
> imprime R2 → 00000010 00000000 → 68</dd>

<dt><b>salta POSITION</b></dt>
<dd>Continues the execution on the line POSITION
<br><b>Example</b>

>salta 15 → 00110000 00001111
</dd>
<dt><b>saltasi0 RZ POSITION</b></dt>
<dd>Continues the execution on the line POSITION if RZ value is 0
<br><b>Example</b>

>saltasi0 R7 15 → 00111111 00001111
</dd>
</dl>

- - -
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

