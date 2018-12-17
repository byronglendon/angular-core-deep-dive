import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Data
  courses = COURSES; //complete courses array
  // coreCourse = COURSES[0];
  // rxjsCourse = COURSES[1];
  // ngrxCourse = COURSES[2];

//Custom Event Handler Function
//Parameter = value that got emmitted by the eventEmmitter
onCourseSelected(course:Course) {
  console.log('App Component - click event bubbled up...', course);
}

}
