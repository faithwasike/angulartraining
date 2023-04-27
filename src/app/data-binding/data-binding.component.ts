import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  public companyName: string = 'Turnkey Africa';
  public inputFieldValue: string = 'I am learning event binding';
  public columnSpan: number = 3;
  public className: string = 'default-box';
  public backgroundColor: string = 'yellow';
  public userInput: string = '';

  doSomething(): void {
    console.log(`You clicked me!`)
  }

  getEventDetails($event: any) {
    console.log(`You clicked a button!`)
    if($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  paintMe(boxColor: string) {
    this.className = boxColor;
  }
}
