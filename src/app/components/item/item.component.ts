import { ToDoServiceService } from 'src/todoServices/to-do-service.service';
import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
interface todoitem {
  text: string;
  done: boolean;
  id: string;
  current: boolean;
}
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  myTodoList: Array<todoitem> = [];
  faTrashAlt = faTrashAlt;

  constructor(private _todoService: ToDoServiceService) {}

  ngOnInit(): void {
    this.myTodoList = this._todoService.todoList;
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
}
