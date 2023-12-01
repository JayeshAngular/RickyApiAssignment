import { Component } from '@angular/core';
import { CartoonService } from '../services/cartoon.service';
import { ActivatedRoute } from '@angular/router';
import { generate } from 'rxjs';

@Component({
  selector: 'app-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.css']
})
export class TablelistComponent {
  cStatus:string | null = null;
  cSpecies:string | null = null;
  result:any[]=[];
  mainData:any[]=[];
  constructor(private cartoonService:CartoonService, private activeRaouter:ActivatedRoute){
    this.cStatus = this.activeRaouter.snapshot.queryParamMap.get('cartoonStatus');
    this.cSpecies = this.activeRaouter.snapshot.queryParamMap.get('cartoonSpecies');
    console.log("status",this.cStatus)
    console.log("species",this.cSpecies)
    this.getData();
  }

  ngOnInit() {
    // setTimeout(()=> {
    //   this.jayesh();
    // },3000)
    // console.log("jayesh")
     
    // setTimeout(() => {
    //   this.result = this.mainData.filter((ele:any) =>ele.status == this.cStatus)
    //   console.log(this.result)
    // }, 4000);
  }
  getData() {
    this.cartoonService.getDataFromServer("character/").subscribe({
      next:(response:any) => {
        this.mainData = response.results;
        console.log("mainData",this.mainData)
        this.result = this.mainData.filter((ele:any) =>ele.status == this.cStatus && ele.species == this.cSpecies)
      }
    })
  }
   
  // jayesh() {
  // this.result = this.mainData.filter((ele:any) =>ele.status == this.cStatus && ele.species == this.cSpecies)
  //   console.log(this.result)

  // }
 
}
