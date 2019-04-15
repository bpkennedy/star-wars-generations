export const validate = (fields) => {
  const errors = []
  for(const field of fields) {
    const rules = field.rule.split('|')
    for (let rule of rules) {
      const error = evaluate(rule, field, fields)
      if (error) {
        errors.push(error)
      }
    }
  }
  return errors
}

export const getErrorMessage = (fieldName, errors) => {
  if (!errors || errors.length === 0) {
    return ''
  }
  return errors.find(error => error.fieldName === fieldName) ? errors.find(error => error.fieldName === fieldName).message : ''
}

export const isValidState = (fieldName, errors) => {
  if (!errors || errors.length === 0) {
    return null
  }
  return errors.some(error => error.fieldName === fieldName) ? false : null
}

function evaluate (rule, field, fields) {
  if (rule === 'required') {
    return field.fieldValue && field.fieldValue.length > 0 ? null : {
      fieldName: field.fieldName,
      message: `The ${field.fieldName} field is required.`
    }
  } else if (rule === 'email') {
    return field.fieldValue && field.fieldValue.length > 0 && validateEmail(field.fieldValue) ? null : {
      fieldName: field.fieldName,
      message: `The ${field.fieldName} field must be a valid email address.`
    }
  } else if (rule === 'match') {
    let fieldToMatch
    if (!field.fieldNameToMatch) {
      throw new Error('Must include fieldNameToMatch for match validation rule')
    } else {
      fieldToMatch = fields.find(f => f.fieldName === field.fieldNameToMatch)
    }
    return field.fieldValue && field.fieldValue.length > 0 && fieldToMatch.fieldValue === field.fieldValue ? null : {
      fieldName: field.fieldName,
      message: `The ${field.fieldName} field does not match the ${field.fieldNameToMatch} field.`
    }
  }
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape
  return re.test(String(email).toLowerCase())
}
