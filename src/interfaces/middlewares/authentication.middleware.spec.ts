import { AuthenticationMiddleware } from './authentication.middleware'
import { HttpRequest } from '../../infrastructure/http'
import { left, right } from '../../shared/utils/either'

function makeSut() {
  const baseAuthentication = {
    perform: jest.fn as any
  }

  const httpRequest: HttpRequest = {
    body: {},
    headers: { authorization: 'Bearer token' }
  }
  
  const sut = new AuthenticationMiddleware(baseAuthentication)

  return { sut, baseAuthentication, httpRequest }
}

describe('AuthenticationMiddleware', () => {
  it('should return authenticated user', async () => {
    const { sut, baseAuthentication, httpRequest } = makeSut();
    jest.spyOn(baseAuthentication, 'perform').mockResolvedValueOnce(right({}) as never);

    const result = await sut.handler(httpRequest);

    expect(baseAuthentication.perform).toHaveBeenCalledTimes(1);
    expect(result.statusCode).toEqual(299);
  })

  it('should return unauthorized when headers.authorization is not present', async () => {
    const { sut, baseAuthentication, httpRequest } = makeSut();
    delete(httpRequest.headers.authorization);
    jest.spyOn(baseAuthentication, 'perform').mockResolvedValueOnce(right({}) as never);

    const result = await sut.handler(httpRequest);

    expect(baseAuthentication.perform).toHaveBeenCalledTimes(0);
    expect(result.statusCode).toEqual(401);
  })

  it('should return unauthorized when headers.authorization does not begin with bearer', async () => {
    const { sut, baseAuthentication, httpRequest } = makeSut();
    httpRequest.headers.authorization = "something token";
    jest.spyOn(baseAuthentication, 'perform').mockResolvedValueOnce(right({}) as never);

    const result = await sut.handler(httpRequest);

    expect(baseAuthentication.perform).toHaveBeenCalledTimes(0);
    expect(result.statusCode).toEqual(401);
  })

  it('should return unauthorized when base authentication perform returns left', async () => {
    const { sut, baseAuthentication, httpRequest } = makeSut();
    jest.spyOn(baseAuthentication, 'perform').mockResolvedValueOnce(left(new Error("")));

    const result = await sut.handler(httpRequest);

    expect(baseAuthentication.perform).toHaveBeenCalledTimes(1);
    expect(result.statusCode).toEqual(401);
  })
})