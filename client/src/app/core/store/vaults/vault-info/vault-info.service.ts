import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VaultInfoService {

  constructor(private httpClient: HttpClient) {
  }

  getVaultInfo(id): Observable<any> {
    return this.httpClient.get(
      `${environment.API_ENDPOINT}vaults/${id}`)
      .pipe(delay(environment.RESPONSE_DELAY));
  }
}
