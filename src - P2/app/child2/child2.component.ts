import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  public count : number = 0;

  constructor(private stringService : StringService){ }

  ngOnInit() : void{
    this.count = this.stringService.CountCapital("Marvellous Infosystem");
  }

}
