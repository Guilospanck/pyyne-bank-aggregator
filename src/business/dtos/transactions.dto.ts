interface Transactions {
  amount: number
  type: string,
  text: string
}

export interface TransactionsDTO {
  bank: string,
  accountId: number,
  transactions: Transactions[]
}