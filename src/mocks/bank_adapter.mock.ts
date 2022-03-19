import { IBankAdapter } from "@app/interfaces/ibank.adapter"
import { BalancesDTO } from "@business/dtos/balances.dto"
import { TransactionsDTO } from "@business/dtos/transactions.dto"
import { BaseError } from "@business/errors/base_error"
import { Either } from "@shared/utils/either"

export const balancesMock: BalancesDTO[] = [
  {
    accountId: 1234890,
    balance: 400,
    bank: "BankTest",
    currency: "USD"
  }
];

export const transactionsMock: TransactionsDTO[] = [
  {
    accountId: 1234890,
    bank: "BankTest",
    transactions: [{
      amount: 400,
      text: "test.com",
      type: 1
    }]
  }
];

export const bankAdapterSpy: IBankAdapter = {
  getBalances: (): Either<BaseError, BalancesDTO[]> => jest.fn as any,
  getTransactions: (): Either<BaseError, TransactionsDTO[]> => jest.fn as any
}