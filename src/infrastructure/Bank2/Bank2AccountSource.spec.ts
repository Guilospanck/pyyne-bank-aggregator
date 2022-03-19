import { Bank2AccountSource } from './Bank2AccountSource';
import { Bank2AccountTransaction } from './Bank2AccountTransaction';

function makeSut() {
  const sut = new Bank2AccountSource();

  const mockedAccountId = 1280983920890;
  const mockedBalance = 512.5;
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

describe("Bank2AccountSource", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return balance of the user properly", () => {
    // arrange
    const { sut, mockedAccountId, mockedBalance } = makeSut();    

    // act
    const balance = sut.getBalance(mockedAccountId);

    // assert
    expect(balance.getBalance()).toEqual(mockedBalance);
    expect(typeof balance.getBalance()).toBe("number");
  });
 
  it("should return currency of the user properly", () => {
    // arrange
    const { sut, mockedAccountId, mockedCurrency } = makeSut();    

    // act
    const currency = sut.getBalance(mockedAccountId);

    // assert
    expect(currency.getCurrency()).toEqual(mockedCurrency);
    expect(typeof currency.getCurrency()).toBe("string");
  });

  it("should return list of transactions of the user properly", () => {
    // arrange
    const { sut, mockedAccountId, mockedStartDate, mockedEndDate } = makeSut();  
    const firstTransactionMock = new Bank2AccountTransaction(125, Bank2AccountTransaction.TRANSACTION_TYPES.DEBIT, "Amazon.com");
    const secTransactionMock = new Bank2AccountTransaction(500, Bank2AccountTransaction.TRANSACTION_TYPES.DEBIT, "Car insurance");
    const thirdTransactionMock = new Bank2AccountTransaction(800, Bank2AccountTransaction.TRANSACTION_TYPES.CREDIT, "Salary");

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