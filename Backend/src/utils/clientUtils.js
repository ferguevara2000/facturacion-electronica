import validator from 'ec-docs-validator'

const patterns = {
  cedula: /^[0-9]{10}$/, // Ejemplo: cédula de Ecuador (10 dígitos)
  ruc: /^[0-9]{13}$/, // Ejemplo: RUC de Ecuador (13 dígitos)
  pasaporte: /^[A-Z0-9]{5,15}$/, // Ejemplo: Pasaporte (5 a 15 caracteres alfanuméricos)
  identificacionExterior: /^[A-Z0-9]{6,20}$/, // Ejemplo: Documento de identidad para extranjeros (6 a 20 caracteres alfanuméricos)
  consumidorFinal: /^9999999999999$/ // Ejemplo: Consumidor final en Ecuador (13 veces el dígito 9)
}

export function validatorIdentification (document) {
  if (patterns.cedula.test(document)) {
    return validator.ci(document)
  } else if (patterns.ruc.test(document)) {
    return validator.ruc(document)
  } else if (patterns.pasaporte.test(document)) {
    return true
  } else if (patterns.identificacionExterior.test(document)) {
    return true
  } else if (patterns.consumidorFinal.test(document)) {
    return true
  } else {
    return false
  }
}

export function identifyDocument (document) {
  if (patterns.cedula.test(document)) {
    return 'Cedula'
  } else if (patterns.ruc.test(document)) {
    return 'RUC'
  } else if (patterns.pasaporte.test(document)) {
    return 'Pasaporte'
  } else if (patterns.identificacionExterior.test(document)) {
    return 'Identificación del Exterior'
  } else if (patterns.consumidorFinal.test(document)) {
    return 'Consumidor Final'
  } else {
    return null
  }
}
