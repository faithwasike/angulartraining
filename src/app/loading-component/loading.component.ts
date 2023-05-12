import {Component, OnInit} from '@angular/core';
import {TodoService} from "../services/todo.service";

@Component({
  selector: 'app-loading',
  template: `
    <div *ngIf="isLoading" class="loading-indicator">
      Loading.......
    </div>
  `,
  styles: [`
    .loading-indicator {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
    }
  `]
})
export class LoadingComponent implements OnInit {
  constructor(private todoService:TodoService) {

  }
  isLoading = false;

  ngOnInit(): void {
    this.todoService.requestLoading.subscribe((data) =>{
      this.isLoading = data;
    })
  }


}
