import { BankController } from './bank.controller';
import { getBalancesUsecaseSpy } from '../../mocks/get_balances.usecase.mock';
import { getTransactionsUsecaseSpy } from '../../mocks/get_transactions.usecase.mock';
import { HttpRequest } from '../../infrastructure/http';
import { balancesMock, transactionsMock } from '../../mocks/bank_adapter.mock';
import { left, right } from '../../shared/utils/either';

function makeSut() {
  const sut = new BankController(getBalancesUsecaseSpy, getTransactionsUsecaseSpy);

  const httpRequest: HttpRequest = {
    body: "",
    headers: {},
  }
  return { sut, httpRequest }
}

describe('BankController', () => {
  beforeEach(() => jest.clearAllMocks())

  describe('GET BALANCES', () => {
    it('should return status code 200 and the array of balances from banks', async () => {
      // arrange
      const { sut, httpRequest } = makeSut()
      jest.spyOn(getBalancesUsecaseSpy, 'get').mockReturnValue(right(balancesMock));

      // act
      const result = await sut.getBalances(httpRequest)

      // assert
      expect(getBalancesUsecaseSpy.get).toHaveBeenCalledTimes(1);
      expect(getBalancesUsecaseSpy.get).toHaveBeenCalledWith();
      expect(result.statusCode).toEqual(200);
      expect(result.body).toEqual(balancesMock);
    })

    it('should return status code 500 when something wrong goes inside getBalancesUsecase', async () => {
      // arrange
      const { sut, httpRequest } = makeSut()
      jest.spyOn(getBalancesUsecaseSpy, 'get').mockReturnValue(left(new Error("")));

      // act
      const result = await sut.getBalances(httpRequest)

      // assert
      expect(getBalancesUsecaseSpy.get).toHaveBeenCalledTimes(1);
      expect(getBalancesUsecaseSpy.get).toHaveBeenCalledWith();
      expect(result.statusCode).toEqual(500);
    })

  });

  describe('GET TRANSACTIONS', () => {
    it('should return status code 200 and the array of transactions from banks', async () => {
      // arrange
      const { sut, httpRequest } = makeSut()
      jest.spyOn(getTransactionsUsecaseSpy, 'get').mockReturnValue(right(transactionsMock));

      // act
      const result = await sut.getTransactions(httpRequest)

      // assert
      expect(getTransactionsUsecaseSpy.get).toHaveBeenCalledTimes(1);
      expect(getTransactionsUsecaseSpy.get).toHaveBeenCalledWith();
      expect(result.statusCode).toEqual(200);
      expect(result.body).toEqual(transactionsMock);
    })

    it('should return status code 500 when something wrong goes inside getTransactionsUsecase', async () => {
      // arrange
      const { sut, httpRequest } = makeSut()
      jest.spyOn(getTransactionsUsecaseSpy, 'get').mockReturnValue(left(new Error("")));

      // act
      const result = await sut.getTransactions(httpRequest)

      // assert
      expect(getTransactionsUsecaseSpy.get).toHaveBeenCalledTimes(1);
      expect(getTransactionsUsecaseSpy.get).toHaveBeenCalledWith();
      expect(result.statusCode).toEqual(500);
    })

  })

});