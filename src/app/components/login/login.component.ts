import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
auth=[{email : "ali@gmail.com", password: "1234" },{email : "amin@gmail.com", password: "12345" }]

email: any 
password : any 

  constructor(private route : Router) { }
navigate(){
  console.log(this.email)
  console.log(this.password)
 let AUTHENTIFIED =  this.auth.filter((element : any)=>{
 return element['email']==this.email && element['password']==this.password
  })
  if(AUTHENTIFIED.length>0){
    this.route.navigate(['/dashboard'])
  }
 else{
  console.log("not authentified")
 }
 }
  ngOnInit(): void {
    const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
  }

}
