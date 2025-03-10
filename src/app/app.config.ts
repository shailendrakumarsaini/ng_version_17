import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HeaderInterceptor } from './services/header.interceptor';
import { LoggerService } from './services/logger.service';

export const appConfig: ApplicationConfig = {
  providers: [
    LoggerService,
    provideRouter(routes),
    provideHttpClient(withInterceptors([HeaderInterceptor])),
  ]
};
