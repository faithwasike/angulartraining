import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {finalize, Observable, tap} from "rxjs";
import {TodoService} from "./todo.service";


@Injectable()
export class LoadingInterceptorService implements HttpInterceptor{
  constructor(private todoService: TodoService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.todoService.requestLoading.next(true)
    return next.handle(req).pipe(
      tap(() => console.log("Request being handled...")),
      finalize(() => {
       console.log("Request finished...")
        this.todoService.requestLoading.next(false);
      })
    );
  }

}
