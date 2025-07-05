# CalculadorDeExpresionesConPasos
Librería de funciones java script para el calculo de expresiones infijas y los pasos para su resolución.

# ExpressionCalculator - Librería JavaScript

**ExpressionCalculator** es una librería JavaScript que permite evaluar expresiones matemáticas complejas y mostrar **paso a paso** cómo se resuelven.

## Características principales
Resuelve expresiones con operadores: `+`, `-`, `*`, `/`, `^` (potencia)  
Maneja paréntesis anidados: `5 + (3 * (2 - 1))`  
Genera explicaciones de cada paso  
Solo soporta números enteros
Manejo de errores integrado  

## Instalación y uso
1. Copia el código de la librería en tu proyecto 
  ```html
    javascript <script src="miLibreria.js"></script>
```
3. Importa las funciones necesarias
4. Usa la función principal `EvaluarPosFijaDirectamente()`


## Ejemplo de uso
```javascript
const expresion = "(150 + 25) * 40 - 100";
const evaluacion = EvaluarPosFijaDirectamente(expresion);
console.log(evaluacion.pasos.join('\n'));;
```

## Salida generada
```
Paso 1: Se realizó la operación dentro del paréntesis (150 + 25) = 175
Paso 2: Se multiplicó 175 * 40 = 7000
Paso 3: Se restó 7000 - 100 = 6900
Resultado final: 6900
```

## ¿Cómo funciona internamente?
La librería sigue estos pasos:
1. **Conversión a notación posfija**: Transforma la expresión matemática normal (infija) a una forma que es más fácil de evaluar para la computadora
2. **Evaluación paso a paso**: Resuelve la expresión mientras registra cada operación
3. **Generación de pasos**: Crea explicaciones detalladas para cada cálculo


## Ejemplos de expresiones válidas
```javascript
"10 + 5 * 2"
"(4 + 2) * (3 - 1)"
"2 ^ 3 + 5 / 2"
"100 / (5 * (3 + 2))"
```

## Capturas funcionamiento
![image](https://github.com/user-attachments/assets/b183b3ad-87cb-47e6-91a8-b2f8287ae83b)
![image](https://github.com/user-attachments/assets/5535e276-3ef3-4743-b808-3788a2eca2bc)
![image](https://github.com/user-attachments/assets/39bb30bb-89a3-4256-9720-bc458e1be451)
![image](https://github.com/user-attachments/assets/20c30b5e-b8c2-4f5a-84f8-d60d3025f834)
![image](https://github.com/user-attachments/assets/fad631c5-5e36-405c-89e8-1a2ed7be39a4)

## Video explicacion

## Manejo de errores
La librería detecta automáticamente:
- Paréntesis desbalanceados
- División por cero
- Operadores inválidos
- Expresiones mal formadas

## Limitaciones actuales
- Solo soporta operadores básicos (no funciones trigonométricas)
- Maneja solo números (no variables)
- No soporta notación científica

