enum TRANSACTION_TYPES {
  DEBIT, CREDIT
}

export class Bank2AccountTransaction {

  public static TRANSACTION_TYPES = TRANSACTION_TYPES;

  private _amount: number;
  private _type: TRANSACTION_TYPES;
  private _text: string;

  constructor(amount: number, type: TRANSACTION_TYPES, text: string) {
    this._amount = amount;
    this._type = type;
    this._text = text;
}

  public getAmount(): number {
    return this._amount;
  }

  public getType(): TRANSACTION_TYPES {
    return this._type;
  }

  public getText(): string {
    return this._text;
  }

}