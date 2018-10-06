import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';
import { MapComponent} from './map/map.component';
import { EventsComponent} from './events/events.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'faculty', component: FacultyComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: '', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'events', component: EventsComponent}
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
