import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { TaskComponent } from './components/task/task.component';
import { GetTasksService } from './services/get-tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GetTasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
