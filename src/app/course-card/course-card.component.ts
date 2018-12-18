
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {  } from '@angular/core';
import { COURSES } from './../../db-data';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})

export class CourseCardComponent implements OnInit {
  //Member Variables
  @Input()       //Attribute directive changes the appearance or behavior of a DOM element.
  course: Course //Anotated with angular core Input decorator

  @Input()
  courseIndex: Number;

  // Custom Event Emmitter
  @Output()     //Output decorator
  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  //Click Handler Function
  onCourseViewed() {
    console.log('Course Viewed');
    this.courseSelected.emit(this.course); //Emmit a custome value
  }

  cardClasses() {
  //Method 2. Return a string or array
  if(this.course.category == 'BEGINNER') {
    return ['beginner'];
  }

  //Method 1. Return a Configuration Object
    return {
      'beginner': this.course.category == 'BEGINNER'
    }
  }

  cardStyles() {
    // return a style configuration object
    return { 'text-decoration': 'underline'}
  }

}
