import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { parking } from 'app/models/parking';
import { reservation } from 'app/models/reservation';

 

@Injectable({

  providedIn: 'root'

})

 

export class reservationService {

 


  readonly API_URL = 'http://localhost:8082/test/parkings';

  constructor(private httpClient: HttpClient) { }

 

  GetAllReservation(): Observable<reservation[]> {
    return this.httpClient.get<reservation[]>(`${this.API_URL}/GetAllReservation`);
  }

 

  updateReservation(reservation: any, reservationId: number) {
    const url = `${this.API_URL}/updateReservation/${reservationId}`;
    return this.httpClient.put(url, reservation);

  }
  addParking(reservation : any) {
    return this.httpClient.post(`${this.API_URL}/addReservation`, reservation);
  }

  GetReservationWithId(reservationId: number){
    const url =  `${this.API_URL}/GetReservation/${reservationId}`;
    return this.httpClient.get(url);
  }
 
  deleteReservation(reservationId: number){
    const url = `${this.API_URL}/deleteReservation/${reservationId}`;
    return this.httpClient.delete(url);
  }
  affecterReservation(reservationId: number){
    const url = `${this.API_URL}/affecter/${reservationId}`;
    return this.httpClient.get(url);

}
}