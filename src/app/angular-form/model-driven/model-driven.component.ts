import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.scss']
})
export class ModelDrivenComponent implements OnInit{

  // @ts-ignore
  public signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.createSignUpForm();
  }

  createSignUpForm() {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      dob: ['', Validators.required],
    })

    // @ts-ignore
    this.signUpForm.get('firstName').valueChanges.subscribe((value) => {
      console.log('value...', value)
    })
  }

  onSubmit() {
    const rawValue = this.signUpForm.getRawValue();
    console.log('Raw Value', rawValue);

    // @ts-ignore
    const firstName = this.signUpForm.get('firstName').value;

    console.log('FirstName', firstName)

  }
}
