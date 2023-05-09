import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoComponent} from "./todo.component";
import {TodoDetailComponent} from "./todo-detail/todo-detail.component";
import {AddTodoComponent} from "./add-todo/add-todo.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TodoComponent
      },
      {
        path: 'todo/:id',
        component: TodoDetailComponent
      },
      {
        path: 'add-todo',
        component: AddTodoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
