const currency = (price) =>
    (price || 0).toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        style: 'currency',
        currency: 'BRL',
    })

export default currency
