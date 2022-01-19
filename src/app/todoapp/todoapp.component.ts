import { ToDoServiceService } from 'src/todoServices/to-do-service.service';
import { Component, OnInit } from '@angular/core';
import { faPlus, faSort } from '@fortawesome/free-solid-svg-icons';
interface todoitem {
  text: string;
  done: boolean;
  id: string;
  current: boolean;
}
@Component({
  selector: 'todoapp-root',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.scss'],
})
export class TodoappComponent implements OnInit {
  constructor(private _todoService: ToDoServiceService) {
    //private=> this is only for this class
  }
  faPlus = faPlus;
  faSort = faSort;
  inputValue: string = '';
  errorMessage = '';

  //useEffect() onload
  ngOnInit() {
    console.log(this._todoService.todoList);

    this.inputValue = this._todoService.inputValue;
    this.errorMessage = this._todoService.errorMessage;
  }
  getInputValue(text: string) {
    this._todoService.getInputValue(text);
  }
  addToDoItem() {
    this._todoService.addToDoItem();
  }

  sortItems() {
    this._todoService.sortItems();
  }
}
