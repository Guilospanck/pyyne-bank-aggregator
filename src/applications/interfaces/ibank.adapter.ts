import { BalancesDTO } from "@business/dtos/balances.dto"
import { TransactionsDTO } from "@business/dtos/transactions.dto"
import { BaseError } from "@business/errors/base_error"
import { Either } from "@shared/utils/either"

export interface IBankAdapter {
  getTransactions(): Either<BaseError, TransactionsDTO[]>
  getBalances(): Either<BaseError, BalancesDTO[]>
}