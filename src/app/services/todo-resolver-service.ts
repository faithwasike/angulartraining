import {Injectable} from "@angular/core";
import {TodoService} from "./todo.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Todo} from "../models/todo";
import {Observable} from "rxjs";


@Injectable({providedIn:'root'})
export class TodoResolverService implements Resolve<Observable<Todo[]> | Promise<Todo[]> | Todo[]>{
  constructor(private todoService: TodoService) {
  }



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo[]> | Promise<Todo[]> | Todo[] {
    return this.todoService.fetchAllTodos();
  }
}
