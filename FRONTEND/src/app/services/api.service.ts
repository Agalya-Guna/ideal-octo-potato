import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Voter } from '../classes/voter';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) {  }

  postVoter(vote:Voter){
    return this.http.post<Voter>(" http://localhost:9000/api/vote",vote);
  }
}
