const types = type => {
  const tag = {
    info: '',
    BadgeColor: ''
  }

  if (type === 'si') {
    tag.info = 'SISTEM INFORMASI'
    tag.BadgeColor = 'green'
  } else if (type === 'ti') {
    tag.info = 'TEKNIK INFORMATIKA'
    tag.BadgeColor = 'red'
  } else {
    tag.info = 'BEM'
    tag.BadgeColor = 'purple'
  }

  return tag
}

export default types
