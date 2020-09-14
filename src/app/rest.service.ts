import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public hc:HttpClient) { }


  AddData()
  {
    //this mocky api not working so that's why i am creating test.josn api
    // return this.hc.get('https://run.mocky.io/v3/1caaf786-32c4-45a4-8379-4c1b261b4e36');

    return this.hc.get('/assets/test.json');
  }

}
