export class Bank2AccountBalance {
  private _balance: number;
  private _currency: string;

  constructor(balance: number, currency: string) {
    this._balance = balance;
    this._currency = currency;
  }

  public getBalance(): number {
    return this._balance;
  }

  public getCurrency(): string {
    return this._currency;
  }
}