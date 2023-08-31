import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { user } from 'app/models/user';
import { placeparking } from 'app/models/placeparking';
import { HttpClient } from '@angular/common/http';
import { userService } from 'app/components/service/userService';
import { placeService } from 'app/components/service/placeparking';
import { parking } from 'app/models/parking';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {


  users: user[]= [];
  places: placeparking[]= [];

  constructor(public route : Router, private httpClient: HttpClient,private userService: userService, private placeService: placeService ) { }
  navigate(){
    this.route.navigate(['/notifications'])

  }


  ngOnInit(): void {
    this.fetchthUsers();
  }
    

  fetchthUsers(): void {
    this.userService.GetAllUsers().subscribe(
      (users: user[]) => {
        this.users = users;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

 

 

}
