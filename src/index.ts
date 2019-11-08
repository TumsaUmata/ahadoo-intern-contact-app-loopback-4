import { ContactAppApplication } from './application';
import { ApplicationConfig } from '@loopback/core';
import { StorageGCServiceProvider } from './providers/storage-gc-service.provider';

export { ContactAppApplication };

export async function main(options: ApplicationConfig = {}) {
  const app = new ContactAppApplication(options);
  await app.boot();
  await app.start();

  /* Add this line, it add a service to the app after that you can
  call them in the controller with dependency injection, like:
  @inject('services.StorageGCService') */
  app.serviceProvider(StorageGCServiceProvider);

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
