import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  private url: string;
  public state = {
    isRequesting: false
  };

  constructor() {
    this.url = 'http://' + location.hostname;
  }

  getUrl() {
    return this.url;
  }

  getLoginUrl() {
    return this.url + ':5000/login';
  }

}
