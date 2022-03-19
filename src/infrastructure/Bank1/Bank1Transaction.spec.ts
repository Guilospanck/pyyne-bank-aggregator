import { Bank1Transaction } from './Bank1Transaction';

function makeSut() {
  const mockedAmount = 100;
  const mockedType = Bank1Transaction.TYPE_CREDIT;
  const mockedText = "test.com";

  const sut = new Bank1Transaction(mockedAmount, mockedType, mockedText);

  return {
    sut, mockedAmount, mockedText, mockedType
  };
}

describe("Bank1Transaction", () => {
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