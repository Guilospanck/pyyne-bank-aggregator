import { Bank2AccountBalance } from './Bank2AccountBalance';

function makeSut() {
  const mockedBalance = 100;
  const mockedCurrency = "USD";

  const sut = new Bank2AccountBalance(mockedBalance, mockedCurrency);

  return {
    sut, mockedBalance, mockedCurrency
  };
}

describe("Bank2AccountBalance", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should get balance properly", () => {
    // arrange
    const { sut, mockedBalance } = makeSut();

    // act
    const balance = sut.getBalance();

    // assert
    expect(balance).toEqual(mockedBalance);
    expect(typeof balance).toBe("number");
  });

  it("Should get currency properly", () => {
    // arrange
    const { sut, mockedCurrency } = makeSut();

    // act
    const currency = sut.getCurrency();

    // assert
    expect(currency).toEqual(mockedCurrency);
    expect(typeof currency).toBe("string");
  });
});