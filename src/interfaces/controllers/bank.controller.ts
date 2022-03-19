import { IGetBalancesUsecase } from "@business/usecases/iget_balances.usecase";
import { IGetTransactionsUsecase } from "@business/usecases/iget_transactions.usecase";
import { HttpRequest, HttpResponse } from "@infra/http";
import { ControllerBase } from "./controller_base";

export class BankController extends ControllerBase {

  constructor(
    private readonly _getBalancesUsecase: IGetBalancesUsecase,
    private readonly _getTransactionsUsecase: IGetTransactionsUsecase,
  ) {
    super();
  }

  public getBalances(_: HttpRequest): HttpResponse {
    const result = this._getBalancesUsecase.get();

    if (result.isLeft()) {
      return this.internalServerError({ body: `Error getting balances: ${result.value.message}` });
    }

    return this.ok({
      body: result.value
    });
  }

  public getTransactions(_: HttpRequest): HttpResponse {
    const result = this._getTransactionsUsecase.get();

    if (result.isLeft()) {
      return this.internalServerError({ body: `Error getting transactions: ${result.value.message}` });
    }

    return this.ok({
      body: result.value
    });
  }

}