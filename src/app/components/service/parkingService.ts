import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { parking } from 'app/models/parking';

 

@Injectable({

  providedIn: 'root'

})

 

export class parkingService {

 


  readonly API_URL = 'http://localhost:8082/test/parkings';

  constructor(private httpClient: HttpClient) { }

 

  Getallparkings(): Observable<parking[]> {
    return this.httpClient.get<parking[]>(`${this.API_URL}/Getallparkings`);
  }

 

  updateparking(parking: any, parkingId: number) {
    const url = `${this.API_URL}/updateparking/${parkingId}`;
    return this.httpClient.put(url, parking);

  }

  getParkingWithId(parkingId: number){
    const url =  `${this.API_URL}/Getparking/${parkingId}`;
    return this.httpClient.get(url);
  }
 

  addParking(parking : any) {
    return this.httpClient.post(`${this.API_URL}/addparking`, parking);
  }

 
  deleteparking(parkingId: number){
    const url = `${this.API_URL}/Deleteparking/${parkingId}`;
    return this.httpClient.delete(url);
  }

 

}