import { HttpServer } from "@infra/http_server/http_server";
import routes from './routes';

export class AppModule {

  public async initServer() {
    const httpServer = new HttpServer();
    httpServer.init();
    httpServer.registerRoutes(routes);
    httpServer.listen();
  }
}