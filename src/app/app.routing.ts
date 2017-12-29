import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';


const appRoutes: Routes = [
  //{ path: ' ', component: HomeComponent },
  { path: 'login', component: LoginRegisterComponent },
  { path: 'register', component: LoginRegisterComponent },  
  { path: 'projects', component: ProjectsComponent },
  { path: 'timesheet', component: TimesheetComponent },  
  //{ path: 'people', component: PeopleComponent },  
];

export const routing = RouterModule.forRoot(appRoutes);