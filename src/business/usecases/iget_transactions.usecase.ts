import { TransactionsDTO } from "@business/dtos/transactions.dto";
import { BaseError } from "@business/errors/base_error";
import { Either } from "@shared/utils/either";

export interface IGetTransactionsUsecase {
  get(): Either<BaseError, TransactionsDTO[]>
}