var genero = prompt('ingrese su genero')
var edad = prompt('ingrese su edad')

if (genero === 'female') {
  console.log('Sra. ')

} else {
  if (genero === 'male') {
    message = 'Sr.')
  }
}
if (edad >= 18) {
  console.log('usted es mayor de edad')

} else {
  if (edad <= 18) {
    console.log('usted es menor de edad.')
  }
}
