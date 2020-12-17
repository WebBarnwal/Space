import { Component, OnInit } from '@angular/core';
import { SpaceServiceService } from './service/space-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  spaceResponse:any[];

  constructor(
    private service: SpaceServiceService
  ) { }

  ngOnInit() {
     this.service.serviceForSpaceLaunchProgram().subscribe((val)=>{
       this.spaceResponse= val;
       console.log(this.spaceResponse);
       console.log(this.spaceResponse[0].links.mission_patch_small);
       

     })
  }

}
