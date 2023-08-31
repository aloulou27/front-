import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { parking } from 'app/models/parking';


 

@Injectable({

  providedIn: 'root'

})

 

export class placeService {

 


  readonly API_URL = 'http://localhost:8082/test/parkings';

  constructor(private httpClient: HttpClient) { }

 

  GetAllPlaceParking(): Observable<parking[]> {
    return this.httpClient.get<parking[]>(`${this.API_URL}/GetAllPlaceParking`);
  }

 

  updatePlaceParking(parking: any, parkingId: number) {
    const url = `${this.API_URL}/updatePlaceParking/${parkingId}`;
    return this.httpClient.put(url, parking);

  }

  GetPlaceParkingWithId(parkingId: number){
    const url =  `${this.API_URL}/GetPlaceParking/${parkingId}`;
    return this.httpClient.get(url);
  }
 

  addPlaceParking(parking : any) {
    return this.httpClient.post(`${this.API_URL}/addPlaceParking`, parking);
  }

 
  DeletePlaceParking(parkingId: number){
    const url = `${this.API_URL}/DeletePlaceParking/${parkingId}`;
    return this.httpClient.delete(url);
  }

 

}