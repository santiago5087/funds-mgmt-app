import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DATA_PROVIDERS } from '@data/data.providers';
import { provideStore } from '@ngxs/store';
import { FundsState } from '@core/store/states/funds.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore([FundsState]),
    ...DATA_PROVIDERS,
  ]
};
