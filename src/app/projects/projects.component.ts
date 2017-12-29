import { Component, OnInit} from '@angular/core';
import { Project } from '../../models/project';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:  Project[] = [];
  constructor() {
    for(let i=0; i<3; i++) {
      this.projects.push(new Project('Project Title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'));
    }
    }

  ngOnInit() {
  }
  teste(){
    console.log('teste');
  }
}
