import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToDoServiceService } from '../todoServices/to-do-service.service';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, ItemComponent],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [ToDoServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
