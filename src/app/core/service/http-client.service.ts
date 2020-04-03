import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class HttpClientService {
  getAccessToken: any;
  httpHeadersObj: any;
  httpOptions: object;

  constructor(private httpClient: HttpClient) {
    this.httpHeadersObj = {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      'Content-Type': 'application/json',
      Authorization: ''
    };

    this.setHttpOptions(this.httpHeadersObj);
    this.setAccessToken();
  }

  setHttpOptions(httpHeaders) {
    this.httpOptions = {
      headers: new HttpHeaders(httpHeaders)
    };
  }

  delete(url) {
    this.showLoader();
    return this.httpClient.delete(url, this.httpOptions)
      .pipe(
        map(response => {
          this.hideLoader();
          return response;
        }), catchError(
          (errorResponse: Response) => {
            this.hideLoader();
            throw errorResponse;
          }));
  }

  get(url) {
    this.showLoader();
    return this.httpClient.get(url, this.httpOptions)
      .pipe(
        map(response => {
          this.hideLoader();
          return response;
        }),
        catchError((errorResponse: Response) => {
          this.hideLoader();
          throw errorResponse;
        }));
  }

  getFile(url: string) {
    const httpOptions = {
      headers: {
        Authorization: `bearer ${this.getAccessToken}`
      },
      responseType: 'arraybuffer' as 'json'
    };
    this.showLoader();
    return this.httpClient.get<any>(url, httpOptions)
      .pipe(
        map(response => {
          this.hideLoader();
          return response;
        }),
        catchError((errorResponse: Response) => {
          this.hideLoader();
          throw errorResponse;
        }));
  }

  getFileAsPost(url: string, data = {}) {
    const httpOptions = {
      headers: {
        Authorization: `bearer ${this.getAccessToken}`
      },
      responseType: 'arraybuffer' as 'json'
    };
    this.showLoader();
    return this.httpClient.post<any>(url, data, httpOptions)
      .pipe(
        map(response => {
          this.hideLoader();
          return response;
        }),
        catchError((errorResponse: Response) => {
          this.hideLoader();
          throw errorResponse;
        }));
  }

  post(url, data = {}) {
    this.showLoader();
    return this.httpClient.post(url, data, this.httpOptions)
      .pipe(
        map(response => {
          this.hideLoader();
          return response;
        }),
        catchError((errorResponse: Response) => {
          this.hideLoader();
          throw errorResponse;
        }));
  }

  postFormData(url, formData) {
    this.showLoader();

    const body = new FormData();
    body.append('data', formData);

    const httpOptions = {
      headers: {
        Authorization: `bearer ${this.getAccessToken}`
      }
    };

    return this.httpClient.post(url, body, httpOptions)
      .pipe(
        map(response => {
          this.hideLoader();
          return response;
        }),
        catchError((errorResponse: Response) => {
          this.hideLoader();
          throw errorResponse;
        }));
  }

  private showLoader(): void {
    // show
  }
  private hideLoader(): void {
    // hide
  }

  private setAccessToken() {
    this.getAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imh5ZC51bGxhc2t1bWFyQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoidWt1bWFyIiwiZXhwIjoxNTg2MDM1MDg3fQ._Qs2Bzbm4mnO2Q0gA0d1AWMp82k8xX6nzA98PfgEgf8';
    this.httpHeadersObj.Authorization = `bearer ${this.getAccessToken}`;
    this.setHttpOptions(this.httpHeadersObj);
  }
}
