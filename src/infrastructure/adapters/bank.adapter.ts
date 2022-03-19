import { IBankAdapter } from "@app/interfaces/ibank.adapter";
import { BalancesDTO } from "@business/dtos/balances.dto";
import { Transactions, TransactionsDTO } from "@business/dtos/transactions.dto";
import { BaseError } from "@business/errors/base_error";
import { Bank1AccountSource } from "@infra/Bank1/Bank1AccountSource";
import { Bank1Transaction } from "@infra/Bank1/Bank1Transaction";
import { Bank2AccountSource } from "@infra/Bank2/Bank2AccountSource";
import { Bank2AccountTransaction } from "@infra/Bank2/Bank2AccountTransaction";
import { Either, left, right } from "@shared/utils/either";

enum Bank {
  BANK1 = "Bank1",
  BANK2 = "Bank2"
}

export class BankAdapter implements IBankAdapter {
  private _bank1AccountSource: Bank1AccountSource;
  private _bank2AccountSource: Bank2AccountSource;

  constructor(bank1: Bank1AccountSource, bank2: Bank2AccountSource) {
    this._bank1AccountSource = bank1;
    this._bank2AccountSource = bank2;
  }

  getBalances(): Either<BaseError, BalancesDTO[]> {
    const accountId = 1234567890;

    try {
      const bank1Info = this._getBank1Balances(accountId);
      const bank2Info = this._getBank2Balances(accountId);

      const result: BalancesDTO[] = [
        bank1Info,
        bank2Info
      ];

      return right(result);

    } catch (error) {
      return left(new Error("[GetBalancesError]: " + error));
    }
  }

  getTransactions(): Either<BaseError, TransactionsDTO[]> {
    const accountId = 1234567890;

    try {
      const bank1Info = this._getBankTransactions(accountId, Bank.BANK1);
      const bank2Info = this._getBankTransactions(accountId, Bank.BANK2);

      const result: TransactionsDTO[] = [
        bank1Info,
        bank2Info
      ];

      return right(result);

    } catch (error) {
      return left(new Error("[GetTransactionsError]: " + error));
    }
  }

  private _getBank1Balances(accountId: number): BalancesDTO {
    const balance = this._bank1AccountSource.getAccountBalance(accountId);
    const currency = this._bank1AccountSource.getAccountCurrency(accountId);

    const result: BalancesDTO = {
      accountId,
      bank: "Bank1",
      balance,
      currency
    };

    return result;
  }

  private _getBank2Balances(accountId: number): BalancesDTO {
    const bank2Balances = this._bank2AccountSource.getBalance(accountId);

    const balance = bank2Balances.getBalance();
    const currency = bank2Balances.getCurrency();

    const result: BalancesDTO = {
      accountId,
      bank: "Bank2",
      balance,
      currency
    };

    return result;
  }

  private _getBankTransactions(accountId: number, bank: string): TransactionsDTO {
    const startDate = new Date("2022-01-01T00:00:00Z");
    const endDate = new Date("2022-01-01T00:00:00Z");

    let bankTransactionsArray: Bank1Transaction[] | Bank2AccountTransaction[] = [];

    const transactions: Transactions[] = [];

    if (bank === "Bank1") {
      bankTransactionsArray = this._bank1AccountSource.getTransactions(accountId, startDate, endDate);
    } else {
      bankTransactionsArray = this._bank2AccountSource.getTransactions(accountId, startDate, endDate);
    }

    bankTransactionsArray.forEach((item: Bank1Transaction | Bank2AccountTransaction) => {
      const temp: Transactions = {
        amount: item.getAmount(),
        text: item.getText(),
        type: item.getType(),
      };

      transactions.push(temp);
    });

    const result: TransactionsDTO = {
      accountId,
      bank,
      transactions
    };

    return result;
  }

}