import { AppModule } from './app.module'
import { logger } from '@shared_utils/logger';

(async function bootstrap() {
  const appModule = new AppModule();

  try {
    await appModule.initServer(); 
    logger.info("Server Started");
  } catch (err) {
    logger.error("Server Start Error: ", err);
  }

})()