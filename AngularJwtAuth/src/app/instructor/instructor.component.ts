import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  content: any;
  errorMessage: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getInsctructorBoard().subscribe(
      data => {
        this.content = data;
     
      },
      error => {
        this.errorMessage = error;
      }
    );
  }

}
