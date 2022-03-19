import { TransactionsDTO } from "@business/dtos/transactions.dto"
import { BaseError } from "@business/errors/base_error"
import { IGetTransactionsUsecase } from "@business/usecases/iget_transactions.usecase"
import { Either } from "@shared/utils/either"

export const getTransactionsUsecaseSpy: IGetTransactionsUsecase = {
  get: (): Either<BaseError, TransactionsDTO[]> => jest.fn as any
}