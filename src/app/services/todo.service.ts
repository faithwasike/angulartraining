import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../models/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor( private httpClient: HttpClient) { }

  fetchAllTodos(): Observable<Todo[]> {

    const baseUrl = `https://jsonplaceholder.typicode.com/todos`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf8',
    });

    return this.httpClient.get<Todo[]>(baseUrl, { headers: headers});
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const baseUrl = `https://jsonplaceholder.typicode.com/todos/${todo.id}`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf8',
    });

    return this.httpClient.delete<Todo>(baseUrl, {headers: headers} )
  }

  viewTodo(todoId: number): Observable<Todo> {
    const baseUrl = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf8',
    });

    return this.httpClient.get<Todo>(baseUrl, {headers: headers} )
  }

}
