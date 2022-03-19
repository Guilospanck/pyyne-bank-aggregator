import { HttpRequest, HttpResponse } from "@infra/http";
import { IBaseAuthenticationUsecase } from "@shared/utils/ibase_authentication.usecase";
import { BaseMiddleware } from "@shared_utils/base_middleware";

export class AuthenticationMiddleware extends BaseMiddleware {
  constructor(private readonly _baseAuthenticationUsecase: IBaseAuthenticationUsecase) {
    super();
  }

  public async handler(httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.headers.authorization) return this.unauthorized();

    const token = httpRequest.headers.authorization.split(' ');
    if (token[0].toString().toLowerCase() !== 'bearer' || !token[1].length) return this.unauthorized();

    const authenticated = await this._baseAuthenticationUsecase.perform(token[1]);

    if (authenticated.isLeft()) return this.unauthorized({ body: authenticated.value });

    return this.authenticated({ body: authenticated.value });
  }
}