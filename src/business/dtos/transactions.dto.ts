export interface Transactions {
  amount: number
  type: number,
  text: string
}

export interface TransactionsDTO {
  bank: string,
  accountId: number,
  transactions: Transactions[]
}