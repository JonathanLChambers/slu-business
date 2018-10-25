import { Component } from '@angular/core';
import { AuthenticationService,  } from '../authentication.service';
import { Router } from '@angular/router';
import { FacultyPayload } from '../authentication.service';

@Component({
  templateUrl: './faculty.component.html'
})
export class FacultyComponent {
 credentials: FacultyPayload = {
    email: '',
    name: '',
    bio: '',
    schedule: ''
  };
  

  constructor(private auth: AuthenticationService, private router: Router) {}

  faculty() {
    this.auth.faculty(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/faculty');
    }, (err) => {
      console.error(err);
    });
  }

}

