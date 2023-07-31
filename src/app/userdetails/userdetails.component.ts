import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  user_name : String = '';
  user_email : String = '';
  user_phone : String = '';


  constructor(
    private routes : Router,
  ){

  }


  ngOnInit(): void {

  }


  submitdata(){
      console.log(this.user_name,this.user_email,this.user_phone);
      this.routes.navigateByUrl("/userdetailslist/"+this.user_name+"/"+this.user_email+"/"+this.user_phone);
  }

}
