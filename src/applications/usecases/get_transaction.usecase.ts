import { IBankAdapter } from "@app/interfaces/ibank.adapter";
import { TransactionsDTO } from "@business/dtos/transactions.dto";
import { BaseError } from "@business/errors/base_error";
import { IGetTransactionsUsecase } from "@business/usecases/iget_transactions.usecase";
import { Either, left, right } from "@shared/utils/either";

export class GetTransactionsUsecase implements IGetTransactionsUsecase {

  constructor(private readonly _bankAdapter: IBankAdapter) { }

  get(): Either<BaseError, TransactionsDTO[]> {
    const result = this._bankAdapter.getTransactions();
    if (result.isLeft()) {
      return left(new Error(result.value.message));
    }

    return right(result.value)
  }
}