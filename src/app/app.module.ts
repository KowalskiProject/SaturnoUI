import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
@NgModule({
  declarations: [
    AppComponent,
    TimesheetComponent,
    LoginRegisterComponent,
    ProjectsComponent,
    ProjectComponent

  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
