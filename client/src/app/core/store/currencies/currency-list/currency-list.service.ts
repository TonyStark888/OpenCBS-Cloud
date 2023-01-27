import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CurrencyListService {

  constructor(private httpClient: HttpClient) {
  }

  getCurrencyList(): Observable<any> {
    return this.httpClient.get(
      `${environment.API_ENDPOINT}currencies`)
      .pipe(delay(environment.RESPONSE_DELAY));
  }
}
