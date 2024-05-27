export const convertreCurrynce = (amount: string | number) => {
    return new Intl.NumberFormat('ru-Ru', {
        style: 'currency',
        currency: 'RUB'
    }).format(+amount)
}