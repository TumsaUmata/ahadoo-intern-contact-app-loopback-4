import { getService, juggler } from '@loopback/service-proxy';
import { Provider } from '@loopback/core';
import { MyFileDataSource } from '../datasources/my-file.datasource';
import { IStorageService } from '../interfaces';


export class StorageGCServiceProvider implements Provider<IStorageService> {
  constructor(
    protected dataSource: juggler.DataSource = new MyFileDataSource()
  ) { }

  value(): Promise<IStorageService> {
    return getService(this.dataSource);
  }
}
