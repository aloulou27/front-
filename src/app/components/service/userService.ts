import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from 'app/models/user';

 

@Injectable({

  providedIn: 'root'

})

 

export class userService {

 


  readonly API_URL = 'http://localhost:8082/test/parkings';

  constructor(private httpClient: HttpClient) { }

 

  GetAllUsers(): Observable<user[]> {
    return this.httpClient.get<user[]>(`${this.API_URL}/GetAllUsers`);
  }

 

  updateUser(user: any, userId: number) {
    const url = `${this.API_URL}/updateparking/${userId}`;
    return this.httpClient.put(url, user);

  }

  GetUserWithId(userId: number){
    const url =  `${this.API_URL}/GetUser/${userId}`;
    return this.httpClient.get(url);
  }
 

  addUser(user : any) {
    return this.httpClient.post(`${this.API_URL}/addUser`, user);
  }

 
  DeleteUser(userId: number){
    const url = `${this.API_URL}/DeleteUser/${userId}`;
    return this.httpClient.delete(url);
  }

 

}