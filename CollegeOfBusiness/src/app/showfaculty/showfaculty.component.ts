import { Component } from '@angular/core';
import { AuthenticationService, FacultyPayload, AppService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './showfaculty.component.html',
  providers: [AppService],
  styleUrls: ['./showfaculty.component.scss']
})
export class ShowFacultyComponent {
  test: 'test'
  details: any = []
  carousel: any = []
  faculty = {
    firstName: '',
  lastName: '',
  email: '',
  bio: '',
  schedule: []

  }

  constructor(public appService : AppService, public auth: AuthenticationService, private router: Router) {}
  
  ngOnInit() {
    this.ShowFacPage();
    
  }
  ShowFacPage() {
    try {
      this.auth.getFaculty()
      .subscribe(resp => {
        console.log(resp, "res");
        this.details= resp
        this.sortAlphabetical();
        this.sortCarousel();
      },
      error => {
        console.log(error, "error");
    })
  } catch (e) {
    console.log(e);
  }
}
sortCarousel(){
  var i = 0;
  var last = 0;
  this.details.forEach(element => {
    if(i%3 == 0){
      this.carousel.push([this.details[i], this.details[i+1], this.details[i+2]]);
      last = i
    }
    i++;
  });
  switch(this.details.length - last){
    case 1: {
      this.carousel.push([this.details[i]])
      break;
    }
    case 2: {
      this.carousel.push([this.details[i], this.details[i+1]])
      break;
    }
  }
}
sortAlphabetical(){
  this.details.sort(function(a, b) {
    var textA = a.lastName.toUpperCase();
    var textB = b.lastName.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
}
edit(faculty: FacultyPayload): void{
  localStorage.removeItem("editFacultyId");
  localStorage.setItem("editFacultyId", faculty.email);
  this.router.navigateByUrl('/edit-faculty');
}
delete(faculty: FacultyPayload): void{
  this.auth.deleteFaculty(faculty.email)
      .subscribe(resp => {
        console.log("deleted")
        this.ShowFacPage();
      },
      error => {
        console.log(error, "error");
    })
  
}
}