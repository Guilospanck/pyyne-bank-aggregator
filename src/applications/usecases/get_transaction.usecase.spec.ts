import { GetTransactionsUsecase } from './get_transaction.usecase';

import { bankAdapterSpy, transactionsMock } from '../../mocks/bank_adapter.mock';
import { left, right } from '../../shared/utils/either';

function makeSut() {
  const sut = new GetTransactionsUsecase(bankAdapterSpy);

  return {
    sut
  };
}

describe("GetTransactionsUsecase", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should get right value", () => {
    // arrange
    const { sut } = makeSut();
    jest.spyOn(bankAdapterSpy, "getTransactions").mockReturnValue(right(transactionsMock));

    // act
    const transactions = sut.get();

    // assert
    expect(transactions.isRight()).toBeTruthy();
    expect(transactions.value).toEqual(transactionsMock);
    expect(bankAdapterSpy.getTransactions).toHaveBeenCalledTimes(1);
  });

  it("Should return left error if something goes wrong in bankAdapter.getTransactions", () => {
    // arrange
    const { sut } = makeSut();
    jest.spyOn(bankAdapterSpy, "getTransactions").mockReturnValue(left(new Error("")));

    // act
    const transactions = sut.get();

    // assert
    expect(transactions.isRight()).toBeFalsy();
    expect(transactions.value).toBeInstanceOf(Error);
    expect(bankAdapterSpy.getTransactions).toHaveBeenCalledTimes(1);

  });

});