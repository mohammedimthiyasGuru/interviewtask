import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetailslist',
  templateUrl: './userdetailslist.component.html',
  styleUrls: ['./userdetailslist.component.css']
})
export class UserdetailslistComponent implements OnInit {



  user_details_list : any =  [
    {
      name : "Mohammed",
      phone : 9876543210,
      email : 'mohammed@gmail.com'
    }
  ];



  constructor(
    private activeroute : ActivatedRoute,
  ){
    this.activeroute.queryParams.subscribe((data:any) => {
      console.log(data.name);
    })

  }


  ngOnInit(): void {
    console.log(this.user_details_list);
  }



}
