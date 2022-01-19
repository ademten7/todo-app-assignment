import { Injectable, OnInit } from '@angular/core';
interface todoitem {
  text: string;
  done: boolean;
  id: string;
  current: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class ToDoServiceService {
  public todoList: Array<todoitem>;
  data: null | string;
  constructor() {
    this.data = localStorage.getItem('todoList');
    this.todoList = this.data && JSON.parse(this.data);
    // this.todoList = [
    //   { text: 'haircut', done: false, id: 'abc123', current: false },
    //   { text: 'breakfast', done: false, id: 'abc1234', current: false },
    //   { text: 'homework', done: true, id: 'abc12345', current: false },
    //   { text: 'walking', done: true, id: 'abc12356', current: false },
    // ];
  }

  inputValue: string = '';
  getInputValue(value: string) {
    this.inputValue = value;
  }

  errorMessage = '';
  addToDoItem() {
    if (this.inputValue === '') {
      this.errorMessage = 'please add something in the input field';
      return;
    }
    this.todoList.push({
      text: this.inputValue,
      done: false,
      id: new Date().getTime().toString(),
      current: false,
    });

    localStorage.setItem('todoList', JSON.stringify(this.todoList));
    this.inputValue = '';
  }
  updateStatus(item: todoitem) {
    console.log(item);
    console.log(this);
    const index = this.todoList.indexOf(item);

    this.todoList[index].done = !this.todoList[index].done;
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  showDeleteIcon(item: todoitem) {
    console.log(item);
    const index = this.todoList.indexOf(item);
    this.todoList[index].current = true;
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
  hideDeleteIcon(item: todoitem) {
    console.log(item);
    const index = this.todoList.indexOf(item);
    this.todoList[index].current = false;
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
  deleteItem(item: todoitem) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
  sortItems() {
    this.todoList.sort((a: todoitem, b: todoitem) => {
      if (a.done > b.done) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
