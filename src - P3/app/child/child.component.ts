import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  
  public Num : boolean = true;
  public Str : number = 0;

  constructor(private numberService : NumberService, private stringService : StringService ){ }

  ngOnInit() : void{
    this.Num = this.numberService.ChkPrime(17);
    // const isPrime = this.numberService.ChkPrime(Num);

    this.Str = this.stringService.CountCapital("Marvellour Infosystem!");
    // const count = this.stringService.CountCapital(Str);
  }
}
