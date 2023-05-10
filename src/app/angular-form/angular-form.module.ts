import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFormRoutingModule } from './angular-form-routing.module';
import { AngularFormComponent } from './angular-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";


@NgModule({
  declarations: [
    AngularFormComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent
  ],
  imports: [
    CommonModule,
    AngularFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule
  ]
})
export class AngularFormModule { }
