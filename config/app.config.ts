import { APP_CONSTANTS } from '../constants';

export interface AppConfig {
  port: number;
  env: string;
  apiPrefix: string;
}

export const appConfig: AppConfig = {
  port: Number(APP_CONSTANTS.PORT),
  env: APP_CONSTANTS.NODE_ENV,
  apiPrefix: APP_CONSTANTS.API_PREFIX
};
