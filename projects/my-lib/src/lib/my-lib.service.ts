import { Injectable } from '@angular/core';
import concat from 'lodash.concat';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {
  doSomething(){
    console.log(concat([1], 3));
  }
  constructor() { }
}
