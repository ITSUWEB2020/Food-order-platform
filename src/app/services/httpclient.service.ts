import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Login} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getLogin() {
    return this.httpClient.get<Login[]>('http://localhost:8080/authentication');
  }
}
