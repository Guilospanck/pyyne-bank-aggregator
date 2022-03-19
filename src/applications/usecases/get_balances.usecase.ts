import { IBankAdapter } from "@app/interfaces/ibank.adapter";
import { BalancesDTO } from "@business/dtos/balances.dto";
import { BaseError } from "@business/errors/base_error";
import { IGetBalancesUsecase } from "@business/usecases/iget_balances.usecase";
import { Either, left, right } from "@shared/utils/either";

export class GetBalancesUsecase implements IGetBalancesUsecase {

  constructor(private readonly _bankAdapter: IBankAdapter){}

  get(): Either<BaseError, BalancesDTO[]> {
    const result = this._bankAdapter.getBalances();
    if(result.isLeft()){
      return left(new Error(result.value.message));
    }

    return right(result.value)
  }

}