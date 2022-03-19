import { BalancesDTO } from "@business/dtos/balances.dto"
import { BaseError } from "@business/errors/base_error"
import { IGetBalancesUsecase } from "@business/usecases/iget_balances.usecase"
import { Either } from "@shared/utils/either"

export const getBalancesUsecaseSpy: IGetBalancesUsecase = {
  get: (): Either<BaseError, BalancesDTO[]> => jest.fn as any
}