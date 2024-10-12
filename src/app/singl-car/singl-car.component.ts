import { getCars, Image } from './../cars';
import { Component } from '@angular/core';
import { CarsService } from '../cars.service';
import { ActivatedRoute } from '@angular/router';
import {  singlCar } from '../onr-car';

@Component({
  selector: 'app-singl-car',
  templateUrl: './singl-car.component.html',
  styleUrls: ['./singl-car.component.scss']
})
export class SinglCarComponent {
constructor(private _CarsService:CarsService,private _ActivatedRoute:ActivatedRoute){}
car?:singlCar;
ngOnInit(): void {
  this._CarsService.getSingleCar(this._ActivatedRoute.snapshot.params['id']).subscribe({
next:(res)=>{
this.car=res.result;
},error:(err)=>{
  console.log(err);

},
complete:()=>{
console.log('done');

}
  })

}
}
