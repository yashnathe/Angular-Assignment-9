import { Component, OnInit} from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  
  public isPrime : boolean = true;

  constructor(private numberService :  NumberService){ }

  ngOnInit() : void {
    this.isPrime = this.numberService.ChkPrime(7);
  }

}
