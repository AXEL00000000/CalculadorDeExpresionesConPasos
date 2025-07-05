# ExpressionCalculator

[![npm version](https://img.shields.io/npm/v/expression-calculator.svg)](https://www.npmjs.com/package/expression-calculator)  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

**ExpressionCalculator** es una librería JavaScript que permite evaluar expresiones matemáticas infijas y mostrar **paso a paso** cómo se resuelven.

## Contenido

* [Características](#características)
* [Instalación](#instalación)
* [Uso / API](#uso--api)
* [Ejemplos](#ejemplos)
* [Manejo de errores](#manejo-de-errores)
* [Capturas](#capturas)
* [Video explicativo](#video-explicativo)
* [Contribuir](#contribuir)
* [Licencia](#licencia)

## Características

* Soporta operadores: `+`, `-`, `*`, `/`, `^` (potencia)
* Paréntesis anidados: `5 + (3 * (2 - 1))`
* Genera explicaciones detalladas de cada paso
* Solo números enteros
* Manejo de errores integrado (paréntesis desbalanceados, división por cero, operadores inválidos, expresiones mal formadas)

## Instalación

### Desde npm

```bash
npm install expression-calculator
```

### Manual

Copia el archivo `expression-calculator.js` en tu proyecto y enlázalo:

```html
<script src="path/to/expression-calculator.js"></script>
```

## Uso / API

### Función principal

```js
/**
 * Evalúa una expresión infija y devuelve pasos y resultado.
 * @param {string} expresion — La expresión matemática (solo enteros).
 * @returns {{ pasos: string[], resultado: number }}
 */
function EvaluarPosFijaDirectamente(expresion)
```

#### Ejemplo básico

```js
import { EvaluarPosFijaDirectamente } from 'expression-calculator';

const expresion = "(150 + 25) * 40 - 100";
const { pasos, resultado } = EvaluarPosFijaDirectamente(expresion);
console.log(pasos.join('\n'));
console.log(`Resultado final: ${resultado}`);
```

## Ejemplos

```js
EvaluarPosFijaDirectamente("10 + 5 * 2");
EvaluarPosFijaDirectamente("(4 + 2) * (3 - 1)");
EvaluarPosFijaDirectamente("2 ^ 3 + 5 / 2");
EvaluarPosFijaDirectamente("100 / (5 * (3 + 2))");
```

## Manejo de errores

La librería lanza excepciones con mensajes claros en los siguientes casos:

* Paréntesis desbalanceados
* División por cero
* Operadores inválidos
* Expresiones mal formadas

```js
try {
  EvaluarPosFijaDirectamente("1 + (2 * 3");
} catch (err) {
  console.error(err.message); // "Paréntesis desbalanceados"
}
```

## Capturas

![Paso a paso 1](https://github.com/user-attachments/assets/b183b3ad-87cb-47e6-91a8-b2f8287ae83b)
![Paso a paso 2](https://github.com/user-attachments/assets/5535e276-3ef3-4743-b808-3788a2eca2bc)
![Paso a paso 3](https://github.com/user-attachments/assets/39bb30bb-89a3-4256-9720-bc458e1be451)
![Paso a paso 4](https://github.com/user-attachments/assets/20c30b5e-b8c2-4f5a-84f8-d60d3025f834)

## Video explicativo

[Ver en YouTube](https://www.youtube.com/watch?v=EZ95ZWEAcHM)


## Limitaciones actuales
- Solo soporta operadores básicos (no funciones trigonométricas)
- Maneja solo números (no variables)
- No soporta notación científica
- Solo recibe enteros

