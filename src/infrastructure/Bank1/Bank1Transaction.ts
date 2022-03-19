export class Bank1Transaction {

  public static TYPE_CREDIT = 1;
  public static TYPE_DEBIT = 2;

  private _amount: number;
  private _type: number;
  private _text: string;

  constructor(amount: number, type: number, text: string) {
    this._amount = amount;
    this._type = type;
    this._text = text;
  }

  public getAmount(): number {
    return this._amount;
  }

  public getType(): number {
    return this._type;
  }

  public getText(): string {
    return this._text;
  }

}