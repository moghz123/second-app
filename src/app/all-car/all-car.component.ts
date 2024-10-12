import { Component } from '@angular/core';
import { CarsService } from '../cars.service';
import { getCars } from '../cars';

@Component({
  selector: 'app-all-car',
  templateUrl: './all-car.component.html',
  styleUrls: ['./all-car.component.scss']
})
export class AllCarComponent {
  constructor(private _CarsService:CarsService){}
  cars?:getCars[];
  ngOnInit(): void {
  this._CarsService.getAllCars().subscribe({
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
  })}
}
