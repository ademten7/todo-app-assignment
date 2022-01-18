import { ToDoServiceService } from './../todoServices/to-do-service.service';
import { Component, OnInit } from '@angular/core';
interface todoitem {
  text: string;
  done: boolean;
  id: string;
  current: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _todoService: ToDoServiceService) {
    //private=> this is only for this class
  }
  myTodoList: Array<todoitem> = [];
  inputValue: string = '';
  errorMessage = '';

  //useEffect() onload
  ngOnInit() {
    console.log(this._todoService.todoList);
    this.myTodoList = this._todoService.todoList;
    this.inputValue = this._todoService.inputValue;
    this.errorMessage = this._todoService.errorMessage;
  }
  getInputValue(text: string) {
    this._todoService.getInputValue(text);
  }
  addToDoItem() {
    this._todoService.addToDoItem();
  }
  updateStatus(item: todoitem) {
    this._todoService.updateStatus(item);
  }
  showDeleteIcon(item: todoitem) {
    this._todoService.showDeleteIcon(item);
  }

  hideDeleteIcon(item: todoitem) {
    this._todoService.hideDeleteIcon(item);
  }
  deleteItem(item: todoitem) {
    this._todoService.deleteItem(item);
  }
  sortItems() {
    this._todoService.sortItems();
  }

  consoleMethod() {
    // console.log(this.sortItems);
  }
}
