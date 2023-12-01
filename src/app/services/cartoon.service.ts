import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartoonService {

  baseurl: string = "https://rickandmortyapi.com/api/";
  httpHeaders: HttpHeaders = new HttpHeaders({
    "content-type": "application/json"
  })

  constructor(private httpclient: HttpClient) { }

  getDataFromServer(endPoint: string) {
    const url = this.baseurl + endPoint;
    return this.httpclient.get(url, { headers: this.httpHeaders })
  }
}
