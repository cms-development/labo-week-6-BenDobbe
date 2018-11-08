import { StudentsComponent } from './students/students.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'students', component: StudentsComponent },
  {path: 'instructors', component: InstructorsComponent },
  {path: 'courses', component: CoursesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
