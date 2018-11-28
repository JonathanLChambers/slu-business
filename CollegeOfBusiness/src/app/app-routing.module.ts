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
import { ShowFacultyComponent} from './showfaculty/showfaculty.component';
import { EditfacultyComponent } from './editfaculty/editfaculty.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuardService] },
  { path: 'add-faculty', component: FacultyComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: '', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'events', component: EventsComponent},
  { path: 'faculty', component: ShowFacultyComponent},
  { path: 'edit-faculty', component: EditfacultyComponent}

];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
