import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, retry, throwError} from "rxjs";
import {Todo} from "../models/todo";
import {ConfigurationService} from "./configuration-service";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public requestLoading = new BehaviorSubject<boolean>(false);

  constructor( private httpClient: HttpClient,private configService: ConfigurationService) { }


  fetchAllTodos(): Observable<Todo[]> {
    // @ts-ignore
    const baseUrl = this.configService.config.apiEndpointBaseUrl

   //const baseUrl = `https://jsonplaceholder.typicode.com/todos`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf8',
    });

    return this.httpClient.get<Todo[]>(baseUrl, { headers: headers}).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    // @ts-ignore
    const baseUrl = this.configService.config.apiEndpointBaseUrl
   // const baseUrl = `https://jsonplaceholder.typicode.com/todos/${todo.id}`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf8',
    });

    return this.httpClient.delete<Todo>(`${baseUrl}/${todo.id}`, {headers: headers} ).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  viewTodo(todoId: number): Observable<Todo> {
    // @ts-ignore
    const baseUrl = this.configService.config.apiEndpointBaseUrl
    //const baseUrl = `${baseUrl}/${todoId}`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf8',
    });

    return this.httpClient.get<Todo>(`${baseUrl}/${todoId}`, {headers: headers} )
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
