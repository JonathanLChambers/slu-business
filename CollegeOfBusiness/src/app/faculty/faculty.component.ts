import { Component } from '@angular/core';
import { AuthenticationService, FacultyPayload, AppService } from '../authentication.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  templateUrl: './faculty.component.html',
  providers: [AppService]
})
export class FacultyComponent {
  vf: FormGroup;

 credentials: FacultyPayload = {
  firstName: '',
  lastName: '',
  email: '',
  bio: '',
  schedule: []

    
  };
  details: any = []
  facultyz = {
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
    schedule: []

  }

  

  constructor(private auth: AuthenticationService, private router: Router, private fb: FormBuilder) {
    this.vf = fb.group({
      emailFormEx: [this.credentials.email, [Validators.required, Validators.email]],
      bioFormEx: [this.credentials.bio],
      firstNameFormEx: [this.credentials.firstName],
      lastNameFormEx: [this.credentials.lastName],
      scheduleFormEx: [this.credentials.schedule]
    });
  }
    
  faculty() {
    this.auth.faculty(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/faculty');
    }, (err) => {
      console.error(err);
    });
  }


  ngOnInit() {
    // this.ShowFacPage();
    
  }
//   ShowFacPage() {
//     try {
//       this.appService.getFaculty()
//       .subscribe(resp => {
//         console.log(resp, "res");
//         this.details= resp
//       },
//       error => {
//         console.log(error, "error");
//     })
//   } catch (e) {
//     console.log(e);
//   }
// }


}

