import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  public ChkPrime(Num : number) : boolean {
    if(Num <= 1){
      return false;
    }
    for(let i = 2; i < Math.sqrt(Num); i++){
      if(Num % i === 0){
        return false;
      }
    }
    return true;
  }

}
