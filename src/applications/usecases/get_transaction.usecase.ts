import { TransactionsDTO } from "@business/dtos/transactions.dto";
import { BaseError } from "@business/errors/base_error";
import { IGetTransactionsUsecase } from "@business/usecases/iget_transactions.usecase";
import { Either, right } from "@shared/utils/either";

export class GetTransactionsUsecase implements IGetTransactionsUsecase {

  get(): Either<BaseError, TransactionsDTO[]> {
    const temp: TransactionsDTO[] = [{
      accountId: 45646548,
      bank: "Bank2",
      transactions: [{
        amount: 4564,
        text: "amazon",
        type: "DEBIT"
      }]
    }]

    return right(temp);
  }
}