import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToDoServiceService } from '../todoServices/to-do-service.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [ToDoServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
