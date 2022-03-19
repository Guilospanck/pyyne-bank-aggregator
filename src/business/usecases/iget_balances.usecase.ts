import { BalancesDTO } from "@business/dtos/balances.dto";
import { BaseError } from "@business/errors/base_error";
import { Either } from "@shared/utils/either";

export interface IGetBalancesUsecase {
  get(): Either<BaseError, BalancesDTO[]>
}