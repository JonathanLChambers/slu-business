import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService, FacultyPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './editfaculty.component.html'
})
export class EditfacultyComponent {
  vf: FormGroup;
  credentials: FacultyPayload = {
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
    schedule: []
  }
  constructor(private auth: AuthenticationService, private router: Router, private fb: FormBuilder) {
      let facultyEmail = localStorage.getItem("editFacultyId");
      this.auth.facultyByEmail(facultyEmail).subscribe(data => {
          this.credentials = data;
      });
    this.vf = fb.group({
      emailFormEx: [this.credentials.email, [Validators.required, Validators.email]],
      bioFormEx: [this.credentials.bio],
      firstNameFormEx: [this.credentials.firstName],
      lastNameFormEx: [this.credentials.lastName],
      mondayFormEx: [this.credentials.schedule[0]],
      tuesdayFormEx: [this.credentials.schedule[1]],
      wednesdayFormEx: [this.credentials.schedule[2]],
      thursdayFormEx: [this.credentials.schedule[3]],
      fridayFormEx: [this.credentials.schedule[4]]
    });
  
  }

  editFaculty(){
    let facultyEmail = localStorage.getItem("editFacultyId");
    this.auth.editFaculty(facultyEmail, this.credentials).subscribe(() => {
      this.router.navigateByUrl('/faculty');
    }, (err) => {
      console.error(err);
    });
  }

}