import { Bank1AccountSource } from './Bank1AccountSource';
import { Bank1Transaction } from './Bank1Transaction';

function makeSut() {
  const sut = new Bank1AccountSource();

  const mockedAccountId = 1280983920890;
  const mockedBalance = 215.5;
  const mockedCurrency = "USD";
  const mockedStartDate = new Date("2022-01-01T00:00:00Z");
  const mockedEndDate = new Date("2022-01-31T00:00:00Z");

  return {
    sut,
    mockedAccountId,
    mockedBalance,
    mockedCurrency,
    mockedStartDate,
    mockedEndDate
  };
}

describe("Bank1AccountSource", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return balance of the user properly", () => {
    // arrange
    const { sut, mockedAccountId, mockedBalance } = makeSut();    

    // act
    const balance = sut.getAccountBalance(mockedAccountId);

    // assert
    expect(balance).toEqual(mockedBalance);
    expect(typeof balance).toBe("number");
  });
 
  it("should return currency of the user properly", () => {
    // arrange
    const { sut, mockedAccountId, mockedCurrency } = makeSut();    

    // act
    const currency = sut.getAccountCurrency(mockedAccountId);

    // assert
    expect(currency).toEqual(mockedCurrency);
    expect(typeof currency).toBe("string");
  });

  it("should return list of transactions of the user properly", () => {
    // arrange
    const { sut, mockedAccountId, mockedStartDate, mockedEndDate } = makeSut();  
    const firstTransactionMock = new Bank1Transaction(100, Bank1Transaction.TYPE_CREDIT, "Check deposit");
    const secTransactionMock = new Bank1Transaction(25.5, Bank1Transaction.TYPE_DEBIT, "Debit card purchase");
    const thirdTransactionMock = new Bank1Transaction(225, Bank1Transaction.TYPE_DEBIT, "Rent payment");

    // act
    const transactions = sut.getTransactions(mockedAccountId, mockedStartDate, mockedEndDate);

    // assert
    expect(transactions).toBeInstanceOf(Array);
    expect(transactions.length).toEqual(3);
    expect(transactions[0]).toEqual(firstTransactionMock);    
    expect(transactions[1]).toEqual(secTransactionMock);    
    expect(transactions[2]).toEqual(thirdTransactionMock);    
  });
  
});