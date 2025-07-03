# CalculadorDeExpresionesConPasos
Librería de funciones java script para el calculo de expresiones infijas y los pasos para su resolución.

# CalculadorDeExpresionesConPasos - Librería JavaScript

## ¿Qué es?
**CalculadorDeExpresionesConPasos** es una librería JavaScript que permite evaluar expresiones matemáticas complejas y mostrar **paso a paso** cómo se resuelven. Es ideal para aplicaciones educativas donde se necesita explicar el proceso de cálculo.

## Características principales
Resuelve expresiones con operadores: `+`, `-`, `*`, `/`, `^` (potencia)  
Maneja paréntesis anidados: `5 + (3 * (2 - 1))`  
Genera explicaciones detalladas de cada paso  
Soporta números enteros y decimales  
Manejo de errores integrado  

## Ejemplo de uso
```javascript
const expresion = "5 + (3 * 2) - 1";
const resultado = EvaluarPosFijaDirectamente(expresion);

if (resultado.success) {
    console.log("Resultado final:", resultado.resultado);
    console.log("Pasos:");
    resultado.pasos.forEach(paso => console.log(paso));
} else {
    console.error("Error:", resultado.error);
}
```

## Salida generada
```
Paso 1: Se realizó la operación dentro del paréntesis (3 * 2)
Paso 2: Multiplicó: 3 * 2 = 6
Paso 3: Sumó: 5 + 6 = 11
Paso 4: Restó: 11 - 1 = 10
Paso 5: Resultado final: 10
```

## ¿Cómo funciona internamente?
La librería sigue estos pasos:
1. **Conversión a notación posfija**: Transforma la expresión matemática normal (infija) a una forma que es más fácil de evaluar para la computadora
2. **Evaluación paso a paso**: Resuelve la expresión mientras registra cada operación
3. **Generación de pasos**: Crea explicaciones detalladas para cada cálculo

## Instalación y uso
1. Copia el código de la librería en tu proyecto
2. Importa las funciones necesarias
3. Usa la función principal `EvaluarPosFijaDirectamente()`

## Ejemplos de expresiones válidas
```javascript
"10 + 5 * 2"
"(4 + 2) * (3 - 1)"
"2 ^ 3 + 5 / 2"
"100 / (5 * (3 + 2))"
```

## Manejo de errores
La librería detecta automáticamente:
- Paréntesis desbalanceados
- División por cero
- Operadores inválidos
- Expresiones mal formadas

## Beneficios educativos
- Ideal para explicar el orden de operaciones
- Muestra cómo se resuelven los paréntesis primero
- Visualiza la precedencia de operadores
- Enseña el proceso de evaluación de expresiones

## Limitaciones actuales
- Solo soporta operadores básicos (no funciones trigonométricas)
- Maneja solo números (no variables)
- No soporta notación científica

