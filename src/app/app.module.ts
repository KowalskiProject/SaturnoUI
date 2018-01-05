import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiService } from './services/api.service';
import { AuthenticationService } from './services/authentication.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TimesheetComponent,
    LoginRegisterComponent,
    ProjectsComponent,
    ProjectComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    HttpModule

  ],
  providers: [AuthenticationService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
