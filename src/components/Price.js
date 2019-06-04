const Price = ({ amount, caption }) => {
  if (!amount) return '\u00A0'

  return `${formatPrice(amount)} ${caption}`
}

function formatPrice(n) {
  return (Math.round(n * 100) / 100)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export default Price
