export function validateEmptyAndLength3(value) {
    if (!value) {
        return '*Este campo é obrigatório'
    }

    if (value.length < 3) {
        return '*A senha precisa de no mínimo 3 caracteres'
    }

    return true
}

export function validateEmptyAndEmail(value) {
    if (!value) {
        return '*Este campo é obrigatório'
    }

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

    if (!isValid) {
        return '*Este campo precisa ser um e-mail'
    }

    return true
}
