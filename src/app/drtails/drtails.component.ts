import {  getCars } from './../cars';
import { Component } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-drtails',
  templateUrl: './drtails.component.html',
  styleUrls: ['./drtails.component.scss']
})
export class DrtailsComponent {
constructor(private _CarsService:CarsService){}
cars?:getCars[];
ngOnInit(): void {
this._CarsService.getCars().subscribe({
  next:(res)=>{
    console.log(res);
    this.cars=res.result;
  },
  error:(err)=>{
    console.log(err);
  },
  complete:()=>{
console.log('done');

  }
})

}
}
