import { GetBalancesUsecase } from './get_balances.usecase';

import { bankAdapterSpy, balancesMock } from '../../mocks/bank_adapter.mock';
import { left, right } from '../../shared/utils/either';

function makeSut() {
  const sut = new GetBalancesUsecase(bankAdapterSpy);

  return {
    sut
  };
}

describe("GetBalancesUsecase", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should get right value", () => {
    // arrange
    const { sut } = makeSut();
    jest.spyOn(bankAdapterSpy, "getBalances").mockReturnValue(right(balancesMock));

    // act
    const balances = sut.get();

    // assert
    expect(balances.isRight()).toBeTruthy();
    expect(balances.value).toEqual(balancesMock);
    expect(bankAdapterSpy.getBalances).toHaveBeenCalledTimes(1);
  });

  it("Should return left error if something goes wrong in bankAdapter.getBalances", () => {
    // arrange
    const { sut } = makeSut();
    jest.spyOn(bankAdapterSpy, "getBalances").mockReturnValue(left(new Error("")));

    // act
    const balances = sut.get();

    // assert
    expect(balances.isRight()).toBeFalsy();
    expect(balances.value).toBeInstanceOf(Error);
    expect(bankAdapterSpy.getBalances).toHaveBeenCalledTimes(1);

  });

});