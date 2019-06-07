import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute,  private router: Router) { }
empId;
  ngOnInit() {
    // let id = parseInt( this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      this.empId=id;
    });
    // this.empId=id;
  }
goPrevious(){
  let previousId= this.empId -1;
  this.router.navigate(["/about", previousId]);


}



goNext(){
  let nextId= this.empId + 1;
  this.router.navigate(["/about", nextId]);

}
}

