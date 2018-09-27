import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './faculty.component.html'
})
export class FacultyComponent {


  constructor(private auth: AuthenticationService, private router: Router) {}

}
