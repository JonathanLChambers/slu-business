import { Component } from '@angular/core';
import { AuthenticationService, FacultyPayload, AppService } from '../authentication.service';

@Component({
  templateUrl: './showfaculty.component.html',
  providers: [AppService]
})
export class ShowFacultyComponent {
  details: any = []
  faculty = {
    name: '',
    email: '',
    bio: '',
    schedule: ''

  }

  constructor(public appService : AppService) {}
  
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