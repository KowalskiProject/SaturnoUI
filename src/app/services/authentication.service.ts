import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import * as jwt_decode from 'jwt-decode';
import * as moment from 'moment';

const TOKEN_ID = 'auth_id';
const AUTH_HEADER = 'authorization';
const headers = new Headers({'Content-Type': 'application/json'});
const options = new RequestOptions({headers: headers});

@Injectable()
export class AuthenticationService  {

  constructor(private http: Http, private api: ApiService) {

   }


   login(id: string, pass: string) {
      this.http.post(this.api.getLoginUrl(), {
        username: id,
        password: pass }, options).subscribe(
          (response: Response) => {
             if (response.headers.has(AUTH_HEADER)) {
               const authId = response.headers.get(AUTH_HEADER);
               localStorage.setItem(TOKEN_ID, authId);
             }else {
               throw new Error('Authentication failed, no Auth Token');
             }
          },
          (error) => {
            throw new Error('Authentication failed');
          }
        );
   }

   logout() {
    localStorage.setItem(TOKEN_ID, null);
    localStorage.removeItem(TOKEN_ID);
   }

   isAuthenticated(): boolean {
    const auth = localStorage.getItem(TOKEN_ID);
    if (auth) {
      const authToken = jwt_decode(auth);
      const exp = +authToken.exp;
      if (moment.utc().seconds() < exp) {
        return true;
      }
    }
    return false;
   }

   getAuthToken(): string {
    return '';
   }

}
