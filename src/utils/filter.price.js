export default function currencyFilter(value) {
  return new Intl.NumberFormat('en-UA', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol'
  }).format(value)
}
