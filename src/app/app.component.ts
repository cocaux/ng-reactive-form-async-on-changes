import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  email: string;
  password: string;

  ngOnInit() {
    this.email = '';
    this.password = '';
    setTimeout(() => {
      this.email = 'test@test.com';
      this.password = 'test';
    }, 200);
    setTimeout(() => {
      this.email = 'test2@test.com';
      this.password = 'test';
    }, 2000);
  }
}
