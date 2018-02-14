import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../common/auth.service';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.css']
})
export class TaskListPageComponent implements OnInit {

    public todos: Todo[] = [];

  constructor(public todoService: TodoService,public authService: AuthService) {
  }


  ngOnInit() {
      this.todoService.list().subscribe(todosResponse=>{
        this.todos = todosResponse;
      })
    }


    isLoggedIn() {
      return this.authService.isLoggedIn();
    }

    signOut() {
      this.authService.signOut();
    }


}
