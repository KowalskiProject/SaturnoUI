import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {Headers, Http, RequestOptions} from '@angular/http';

@Injectable()
export class GenericHttpService <T> {
  private serviceUrl;
  
  constructor(private http: Http, api: ApiService, servicePath?: string) {
    this.serviceUrl = api.getUrl() + servicePath;
   }

  post(parameters, errorHandler = this.defaultLoggingErrorHandler) {
    this.http.post(this.serviceUrl, parameters)
  }

  defaultLoggingErrorHandler(error) {
    console.log(error);
  }

}
