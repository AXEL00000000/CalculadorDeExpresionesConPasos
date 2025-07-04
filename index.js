class PilaDeCaracteres {
    constructor(capacidad) {
        this.capacidad = capacidad;
        this.pila = new Array(capacidad);
        this.tope = -1;
    }

    push(caracter, nivel) {
        if (this.tope >= this.capacidad - 1) {
            throw new Error("Desbordamiento de pila");
        }
        this.pila[++this.tope] = { valor: caracter, nivel: nivel };
    }

    pop() {
        if (this.estaVacia()) {
            throw new Error("Subdesbordamiento de pila");
        }
        return this.pila[this.tope--];
    }

    verTope() {
        if (this.estaVacia()) {
            throw new Error("Pila vacía");
        }
        return this.pila[this.tope];
    }

    estaVacia() {
        return this.tope === -1;
    }
}

class PilaDeEnteros {
    constructor(capacidad) {
        this.capacidad = capacidad;
        this.pila = new Array(capacidad);
        this.tope = -1;
    }

    push(valor) {
        if (this.tope >= this.capacidad - 1) {
            throw new Error("Desbordamiento de pila");
        }
        this.pila[++this.tope] = valor;
    }

    pop() {
        if (this.estaVacia()) {
            throw new Error("Subdesbordamiento de pila");
        }
        return this.pila[this.tope--];
    }

    tamano() {
        return this.tope + 1;
    }

    estaVacia() {
        return this.tope === -1;
    }
}

function prioridad(cad) {
    if (cad === '+' || cad === '-') {
        return 1;
    } else if (cad === '*' || cad === '/') {
        return 2;
    } else if (cad === '^') {
        return 3;
    } else {
        return -1;
    }
}

function esOperador(caracter) {
    return caracter === '+' || caracter === '-' || caracter === '*' || caracter === '/' || caracter === '^';
}

function obtenerNombreOperador(operador) {
    switch (operador) {
        case '+': return 'Sumó';
        case '-': return 'Restó';
        case '*': return 'Multiplicó';
        case '/': return 'Dividió';
        case '^': return 'Elevó a la potencia';
        default: return 'Operó';
    }
}

function convertirInfijaAPosfija(expresion) {
    let pila = new PilaDeCaracteres(expresion.length);
    let expresionPosFija = [];
    let nivelActual = 0;

    for (let i = 0; i < expresion.length; i++) {
        let caracter = expresion[i];

        if (caracter === ' ') {
            continue;
        } else if (caracter === '(') {
            pila.push(caracter, nivelActual);
            nivelActual++;
        } else if (caracter === ')') {
            nivelActual--;
            if (nivelActual < 0) {
                throw new Error("Paréntesis desbalanceados");
            }
            while (!pila.estaVacia() && pila.verTope().valor !== '(') {
                let op = pila.pop();
                expresionPosFija.push({ tipo: 'operador', valor: op.valor, nivel: op.nivel });
            }
            if (!pila.estaVacia() && pila.verTope().valor === '(') {
                pila.pop();
            } else {
                throw new Error("Paréntesis desbalanceados: '(' no encontrado");
            }
        } else if (esOperador(caracter)) {
            while (!pila.estaVacia() && pila.verTope().valor !== '(' && prioridad(pila.verTope().valor) >= prioridad(caracter)) {
                let op = pila.pop();
                expresionPosFija.push({ tipo: 'operador', valor: op.valor, nivel: op.nivel });
            }
            pila.push(caracter, nivelActual);
        } else if (caracter >= '0' && caracter <= '9') {
            let num = caracter;
            while (i + 1 < expresion.length &&
                (expresion[i + 1] >= '0' && expresion[i + 1] <= '9')) {
                num += expresion[++i];
            }
            expresionPosFija.push({ tipo: 'numero', valor: num, nivel: nivelActual });
        } else {
            throw new Error(`Carácter inválido: ${caracter}`);
        }
    }

    while (!pila.estaVacia()) {
        let op = pila.pop();
        if (op.valor === '(') {
            throw new Error("Paréntesis desbalanceados");
        }
        expresionPosFija.push({ tipo: 'operador', valor: op.valor, nivel: op.nivel });
    }

    return expresionPosFija;
}

function aplicarOperacion(operador, a, b) {
    switch (operador) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/':
            if (b === 0) throw new Error("División por cero");
            return a / b;
        case '^': return Math.pow(a, b);
        default: throw new Error("Operador no válido");
    }
}

function evaluarPosfijaConPasos(tokens) {
    let pila = new PilaDeEnteros(tokens.length);
    let pasosDetallados = [];
    let contadorPasos = 0;

    for (let token of tokens) {
        if (token.tipo === 'numero') {
            pila.push(parseInt(token.valor));
        } else if (token.tipo === 'operador') {
            if (pila.tamano() < 2) {
                throw new Error("Pila vacía o incompleta durante la evaluación");
            }
            let operando2 = pila.pop();
            let operando1 = pila.pop();

            let resultado = aplicarOperacion(token.valor, operando1, operando2);
            let operacionDesc = `${operando1} ${token.valor} ${operando2}`;
            let pasoTexto;

            if (token.nivel > 0) {
                pasoTexto = `Se realizó la operación dentro del paréntesis (${operacionDesc}) = ${resultado}`;
            } else {
                pasoTexto = `${obtenerNombreOperador(token.valor)}: ${operacionDesc} = ${resultado}`;
            }

            pasosDetallados.push({
                nivel: token.nivel,
                texto: pasoTexto,
                orden: contadorPasos++
            });

            pila.push(resultado);
        }
    }

    if (pila.tamano() !== 1) {
        throw new Error("Expresión mal formada");
    }

    pasosDetallados.sort((a, b) => {
        if (a.nivel !== b.nivel) {
            return b.nivel - a.nivel;
        }
        return a.orden - b.orden;
    });

    let pasos = [];
    for (let i = 0; i < pasosDetallados.length; i++) {
        pasos.push(`Paso ${i + 1}: ${pasosDetallados[i].texto}`);
    }

    let resultadoFinal = pila.pop();
    pasos.push(`Paso ${pasosDetallados.length + 1}: Resultado final: ${resultadoFinal}`);

    return { resultado: resultadoFinal, pasos };
}

function EvaluarPosFijaDirectamente(expresionInfija) {
    try {
        let expresionPosfija = convertirInfijaAPosfija(expresionInfija);
        return evaluarPosfijaConPasos(expresionPosfija);
    } catch (error) {
        return {
            exito: false,
            error: error.message,
            pasos: [`Error: ${error.message}`]
        };
    }
}
