import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
h1Style=false;
errorMsg;
  constructor(private data: DataService, private router : Router) { }
users;
  ngOnInit() {
    this.data.getUsers().subscribe(data =>{
      this.users=data
      console.log(this.users);
    }, error=> this.errorMsg=error    
      );
    
      
  }
click(event){
  console.log("You just kicked my ass");
  console.log(event);
  
   this.h1Style=true;
   this.data.firstClick();
}
onSelect(user){
  console.log(user);
  this.router.navigate(['/about', user.id]);
  
}
}
