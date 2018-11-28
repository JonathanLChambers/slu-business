import { Component } from '@angular/core';
import { AuthenticationService, FacultyPayload, AppService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: './faculty.component.html',
  providers: [AppService]
})
export class FacultyComponent {
  
 credentials: FacultyPayload = {
    email: '',
    name: '',
    bio: '',
    schedule: ''

    
  };
  details: any = []
  facultyz = {
    name: '',
    email: '',
    bio: '',
    schedule: ''

  }

  

  constructor(private auth: AuthenticationService, private router: Router,public appService : AppService) {}

  faculty() {
    this.auth.faculty(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/faculty');
    }, (err) => {
      console.error(err);
    });
  }


  ngOnInit() {
    this.ShowFacPage();
    
  }
  ShowFacPage() {
    try {
      this.appService.getFaculty()
      .subscribe(resp => {
        console.log(resp, "res");
        this.details= resp
      },
      error => {
        console.log(error, "error");
    })
  } catch (e) {
    console.log(e);
  }
}


}

