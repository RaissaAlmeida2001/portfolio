// Validação de CPF pelos dígitos verificadores (algoritmo oficial da Receita)

export function limparCpf(valor) {
  return valor.replace(/\D/g, '').slice(0, 11)
}

// 12345678909 -> 123.456.789-09 (vai formatando enquanto a pessoa digita)
export function mascararCpf(valor) {
  return limparCpf(valor)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

export function cpfValido(valor) {
  // aceita só dígitos com a pontuação do CPF (. e -), nada de letras ou dígitos a mais
  if (!/^[\d.\-\s]+$/.test(valor)) return false
  const cpf = valor.replace(/\D/g, '')
  if (cpf.length !== 11) return false
  // 000.000.000-00, 111.111.111-11... passam na conta mas são inválidos
  if (/^(\d)\1{10}$/.test(cpf)) return false

  const digitos = cpf.split('').map(Number)
  const calcularDigito = tamanho => {
    let soma = 0
    for (let i = 0; i < tamanho; i++) soma += digitos[i] * (tamanho + 1 - i)
    const resto = (soma * 10) % 11
    return resto === 10 ? 0 : resto
  }

  return calcularDigito(9) === digitos[9] && calcularDigito(10) === digitos[10]
}
