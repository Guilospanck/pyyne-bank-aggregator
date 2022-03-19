import { Bank2AccountTransaction } from './Bank2AccountTransaction';

function makeSut() {
  const mockedAmount = 100;
  const mockedType = Bank2AccountTransaction.TRANSACTION_TYPES.CREDIT;
  const mockedText = "test.com";

  const sut = new Bank2AccountTransaction(mockedAmount, mockedType, mockedText);

  return {
    sut, mockedAmount, mockedText, mockedType
  };
}

describe("Bank2AccountTransaction", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should get amount properly", () => {
    // arrange
    const { sut, mockedAmount } = makeSut();

    // act
    const amount = sut.getAmount();

    // assert
    expect(amount).toEqual(mockedAmount);
    expect(typeof amount).toBe("number");
  });

  it("Should get type properly", () => {
    // arrange
    const { sut, mockedType } = makeSut();

    // act
    const type = sut.getType();

    // assert
    expect(type).toEqual(mockedType);
    expect(typeof type).toBe("number");
  });

  it("Should get text properly", () => {
    // arrange
    const { sut, mockedText } = makeSut();

    // act
    const text = sut.getText();

    // assert
    expect(text).toEqual(mockedText);
    expect(typeof text).toBe("string");
  });
});