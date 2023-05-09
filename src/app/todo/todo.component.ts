import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from "../services/todo.service";
import {Todo} from "../models/todo";
import {map, Observable, of} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {

  public todos: Todo[] = [];
  public todos$: Observable<Todo[]> = of([]);

  public latestTodo: Todo = {
    id: 2,
    userId: 2,
    title: 'Parent To Child',
    completed: true
  }

  constructor(
    private todoService: TodoService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.todoService.fetchAllTodos()
      .subscribe(res => {
        this.todos = res;

        const todo = this.todos.find((todo) => todo.title === 'laboriosam mollitia et enim quasi adipisci quia provident illum');
        // @ts-ignore
        this.latestTodo = todo;
        console.log(`List of todos`, res);
      });

    // this.todos$ = this.todoService.fetchAllTodos().pipe(
    //   map(todos => todos.filter(todo => todo.userId === 10))
    // );
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

  viewTodo(todo: Todo) {
    this.router.navigate([`todo/${todo.id}`], {
      queryParams: {
        userId: todo.userId,
        completed: todo.completed
      }
    })
  }

  addTodo(newTodoTitle: string) {
    const newTodoObj = {
      id: 201,
      userId: 10,
      title: newTodoTitle,
      completed: false
    }
    console.log('new todo', newTodoObj)
    // this.todos.push(newTodoObj);
    this.todos.unshift(newTodoObj);
    console.log('New Todos', this.todos);
  }
}
