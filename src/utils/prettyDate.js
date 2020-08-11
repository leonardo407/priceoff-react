const moths = [
  'Янв',
  'Фев',
  'Мар',
  'Апр',
  'Май',
  'Июн',
  'Июл',
  'Авг',
  'Сен',
  'Ноя',
  'Дек',
]

export default function() {
  const today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth())
  const HH = String(today.getHours()).padStart(2, '0')
  const MM = String(today.getMinutes()).padStart(2, '0')

  return `${dd} ${moths[mm]} ${HH}:${MM}`
}