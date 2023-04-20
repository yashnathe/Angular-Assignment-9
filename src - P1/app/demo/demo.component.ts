import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  
  Num1 = 10;
  Num2 = 5;
  public addResult : number = 0;
  public subResult : number = 0;

  constructor(private arithmeticService : ArithmeticService){ }

  ngOnInit() : void{
    this.addResult = this.arithmeticService.Addition(this.Num1, this.Num2);
    this.subResult = this.arithmeticService.Substraction(this.Num1, this.Num2);
  }

}
