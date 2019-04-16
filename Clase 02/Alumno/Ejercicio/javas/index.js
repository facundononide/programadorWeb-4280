var dia = prompt('ingrese dia de la semana')

switch (dia) {
  case 'lunes':
  case 'martes':
  case 'miercoles':
  case 'jueves':
  case 'viernes':
    console.log('dia habil de la semana')
    break
  case 'sabado':
  case 'domingo':
    console.log('fin de semana')
    break
  default:
    console.log('dia no valido')
    break

}