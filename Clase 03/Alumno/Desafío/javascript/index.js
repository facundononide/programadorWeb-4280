var calculo = prompt('ingrese operacion: div , mult, sum o res ')

var numero1 = prompt('Ingerese el primer número')
var parsedNumero1 = parseFloat(numero1, 10)

var numero2 = prompt('ingrese el segundo numero')
var parsedNumero2 = parseFloat(numero2, 10)

do {
  numero2 = prompt('ingrese el segundo numero')
  parsedNumero2 = parseFloat(numero2, 10)
} while (operacion === 'div' && parsedNumero2 === 0)

var = resultado

switch (calculo) {
  case 'div':
    resultado = parsedNumero1 / parsedNumero2
    break
  case 'mult':
    resultado = parsedNumero1 * parsedNumero2
    break
  case 'sum':
    resultado = parsedNumero1 + parsedNumero2
    break
  case 'res':
    resultado = parsedNumero1 / parsedNumero2
    break
  default:
    resultado = 'Operación incorrecta'
    break
}
var mensaje = 'resultado del ' + calculo + 'es' + resultado

console.log(mensaje)
