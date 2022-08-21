export const toRupee = (amount: string | number) => {
  return `₹${Number(amount).toFixed(2)}`
}