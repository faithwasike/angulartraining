import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFormComponent } from './angular-form.component';
import {TemplateDrivenComponent} from "./template-driven/template-driven.component";
import {ModelDrivenComponent} from "./model-driven/model-driven.component";

const routes: Routes = [
  { path: '',
    children: [
      {
        path: '',
        component: AngularFormComponent
      },
      {
        path: 'template',
        component: TemplateDrivenComponent
      },
      {
        path: 'reactive',
        component: ModelDrivenComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularFormRoutingModule { }
