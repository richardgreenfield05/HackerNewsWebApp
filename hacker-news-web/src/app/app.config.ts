import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {ApiModule, Configuration} from "./api";
import {provideHttpClient} from "@angular/common/http";

export function configurationFactory(): Configuration {
  // Return a new instance of Configuration or configure it as needed
  return new Configuration(/* configuration parameters */);
}

const apiModuleProviders = ApiModule.forRoot(configurationFactory).providers;

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(), // Ensure HttpClient is provided
    ...(apiModuleProviders || []) // Spread and handle possible undefined
  ]
};
