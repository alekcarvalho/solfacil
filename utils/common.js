import moment from 'moment'

export const formatCurrency = (val) => {
  const number = Number(val)
  const numberFormated = number.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  })
  if (numberFormated === 'NaN') {
    return '-'
  }
  return numberFormated
}

export const formatDate = (date) => {
  return moment.utc(date).format('DD/MM/YYYY - H:mm:ss')
}

export const formatFixado = (string) => {
  const splitted = string.replace('_', ' ').toLowerCase()
  return splitted
}
