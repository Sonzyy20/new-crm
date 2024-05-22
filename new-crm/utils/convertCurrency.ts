export const convertreCurrynce = (amount: string | number) => {
    return new Intl.NumberFormat('ru-Ru', {
        style: 'currency',
        currency: 'USD'
    }).format(+amount)
}