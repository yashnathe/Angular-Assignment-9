import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  public CountCapital(Str : string) : number{
    let count = 0;
    for(let i = 0; i < Str.length; i++){
      if(Str[i] >= 'A' && Str[i] <= 'Z'){
        count++;
      }
    }
    return count;
  }

}
