import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, tap} from "rxjs";
import {Todo} from "../../models/todo";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit{
  public todo$: Observable<Todo> | undefined;
  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const todoId = this.route.snapshot.paramMap.get('id');
    console.log('id', todoId);
    console.log('query params', this.route.snapshot.queryParams)

    if (todoId) {
      this.todo$ = this.todoService.viewTodo(+todoId).pipe(tap((data) => console.log(data)));
    }
  }

}
