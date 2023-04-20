import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  public Addition(Num1 : number , Num2 : number) : number {
    return Num1 + Num2;
  }

  public Substraction(Num1 : number, Num2 : number): number {
    return Num1 - Num2;
  }

}
