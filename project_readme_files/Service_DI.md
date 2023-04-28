## Dependency Injection
Dependency injection is the process of supplying a resource that a given piece of code requires. A common way of using DI in Angular projects is through services.

Services provide specific functionality in an Angular application. In a given Angular application, there may be one or more services can be used. Similarly, an Angular component may depend on one or more services.

-----------------------------------------------------------------

## Providing dependency
Imagine there is a class called TodoService that needs to act as a dependency in a component.
The first step is to add the @Injectable decorator to show that the class can be injected.

```
@Injectable()
class TodoService {}
```

The next step is to make it available in the DI by providing it. A dependency can be provided in multiple places:

(i) **At the Component level**, using the providers field of the @Component decorator. In this case the HeroService becomes available to all instances of this component and other components and directives used in the template. For example:
```
@Component({
  selector: 'hero-list',
  template: '...',
  providers: [HeroService]
})
class HeroListComponent {}
```

------------------------------------
(ii) **At the NgModule level**, using the providers field of the @NgModule decorator.
```
@NgModule({
  declarations: [HeroListComponent]
  providers: [HeroService]
})
class HeroListModule {}
```
--------------------------------------

(iii) **At the application root level**, which allows injecting it into other classes in the application. This can be done by adding the providedIn: 'root' field to the @Injectable decorator:  

hero.service.ts
```
@Injectable({
  providedIn: 'root'
})
class HeroService {}
```

When you provide the service at the root level, Angular creates a single, shared instance of the HeroService and injects it into any class that asks for it. Registering the provider in the @Injectable metadata also allows Angular to optimize an app by removing the service from the compiled application if it isn't used, a process known as tree-shaking.

------------------------

## Injecting a dependency
The most common way to inject a dependency is to declare it in a class constructor.

```
@Component({ … })
class HeroListComponent {
  constructor(private service: HeroService) {}
}
```
-----------------------------

## Sample Service File

### todo.service.ts

```
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Todo} from "./models/todo";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  
  getTodos(): Observable<Todo[]> {
    const baseUrl = `https://jsonplaceholder.typicode.com/todos/`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf8',
    });
    return this.http.get<Todo[]>(baseUrl, { headers: headers });
  }
  
}

```

### app.module.ts
```
imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule // add this to imports
  ],
```
--------------------------------

### Resources:
(i) https://angular.io/guide/dependency-injection
