import { BalancesDTO } from "@business/dtos/balances.dto";
import { BaseError } from "@business/errors/base_error";
import { IGetBalancesUsecase } from "@business/usecases/iget_balances.usecase";
import { Either, right } from "@shared/utils/either";

export class GetBalancesUsecase implements IGetBalancesUsecase {

  get(): Either<BaseError, BalancesDTO[]> {

    const temp: BalancesDTO[] = [{
      accountId: 456465487489,
      balance: 456.9,
      bank: "Bank1"
    }];

    return right(temp)
  }

}