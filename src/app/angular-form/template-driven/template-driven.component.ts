import { Component } from '@angular/core';
import {User} from "../../models/user";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {
  user: User = {
    id: 1,
    email: 'favour.ezike@turnkeyafrica.com',
    password: 'password',
    firstName: 'Favour',
    lastName: 'Ezike',
    dob: ''
  };

  onSubmit(form: NgForm) {
    console.log('Template Driven Form', form.value);
  }
}
