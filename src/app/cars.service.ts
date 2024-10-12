import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private _HttpClient:HttpClient) { }
  getCars():Observable<any>{
return this._HttpClient.get('https://abulkhair-cars-apis.vercel.app/api/v1/cars?limit=4')
  }
  getAllCars():Observable<any>{
return this._HttpClient.get('https://abulkhair-cars-apis.vercel.app/api/v1/cars')
  }
  getSingleCar(id:any):Observable<any>{
return this._HttpClient.get(`https://abulkhair-cars-apis.vercel.app/api/v1/cars/${id}`)
  }
}
