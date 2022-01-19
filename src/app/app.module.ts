import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToDoServiceService } from '../todoServices/to-do-service.service';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';

import { ItemComponent } from './components/item/item.component';
import { AboutComponent } from './components/about/about.component';
import { TodoappComponent } from './components/todoapp/todoapp.component';

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
