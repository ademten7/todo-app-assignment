import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToDoServiceService } from '../todoServices/to-do-service.service';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TodoappComponent } from './todoapp/todoapp.component';

const appRoutes: Routes = [
  { path: '', component: TodoappComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [AppComponent, ItemComponent, AboutComponent, TodoappComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }), //for debug the routes
  ],
  providers: [ToDoServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
