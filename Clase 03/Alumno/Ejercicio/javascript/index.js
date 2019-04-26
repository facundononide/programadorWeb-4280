var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

for (var i = 0; i < daysOfTheWeek.length; i++) {
  var days = daysOfTheWeek[i]

  switch (days) {
    case 'Lunes':
    case 'Martes':
    case 'miercoles':
    case 'Miercoles':
    case 'Jueves':
    case 'Viernes':
      console.log(days + ' dia habil de la semana')
      break
    case 'Sabado':
    case 'Domingo':
      console.log(days + ' fin de semana')
      break
    default:
      console.log(days + ' dia no valido')
      break

  }
}

