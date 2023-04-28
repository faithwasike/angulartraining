import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from "../todo.service";
import {Todo} from "../models/todo";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {

  public todos: Todo[] = [];
  public todos$: Observable<Todo[]> = of([]);

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    /*this.todoService.fetchAllTodos()
      .subscribe(res => {
        this.todos = res
        console.log(`List of todos`, res);
      });*/

    this.todos$ = this.todoService.fetchAllTodos();
  }

  deleteTodo(todo: Todo) {
    console.log(`list of todos to delete >>>`, todo)
    /*this.todoService.deleteTodo(todo)
      .subscribe(res => {
        console.log(`response from delete >>>`, res);
      });*/
  }

  ngOnDestroy(): void {

  }
}
