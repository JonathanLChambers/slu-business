import { Component } from '@angular/core';
import { AuthenticationService, FacultyPayload } from '../authentication.service';

@Component({
  templateUrl: './showfaculty.component.html'
})
export class ShowFacultyComponent {
  details: FacultyPayload;

  constructor(private auth: AuthenticationService) {}
  
  ngOnInit() {    
    this.auth.profile().subscribe(faculty => {
      this.details = faculty;
    }, (err) => {
      console.error(err);
    });
  }
}