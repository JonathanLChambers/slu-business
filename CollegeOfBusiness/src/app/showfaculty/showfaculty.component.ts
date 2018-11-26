import { Component } from '@angular/core';
import { AuthenticationService, FacultyPayload, AppService } from '../authentication.service';

@Component({
  templateUrl: './showfaculty.component.html',
  providers: [AppService],
  styleUrls: ['./showfaculty.component.scss']
})
export class ShowFacultyComponent {
  details: any = []
  carousel: any = []
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
    }
    case 2: {
      this.carousel.push([this.details[i], this.details[i+1]])
    }
  }
}
}