const isValidEmail = str => !str.match(/^\w+([.-]?\w+)+@\w+([.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/)

const isValidName = (str) => {
  if (str.length > 0) {
    return str.match(/^\d+$/)
  }
  return true
}

const validateEmail = (rule, value, callback) => {
  if (!value) {
    callback('Field empty')
    return
  }
  const err = []
  if (isValidEmail(value)) {
    err.push('Please, tell me your e-mail.')
  }
  callback(err)
}

const validateName = (rule, value, callback) => {
  if (!value) {
    callback('Field empty')
    return
  }
  const err = []
  if (isValidName(value)) {
    err.push('Please, you need to fill your name here.')
  }
  callback(err)
}

export { validateEmail, validateName }
