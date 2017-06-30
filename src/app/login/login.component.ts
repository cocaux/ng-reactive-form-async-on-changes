import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { patternValidator } from 'app/shared/pattern-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {

  @Input() email: string;
  @Input() password: string;
  loginForm: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges() {
    if (this.loginForm) {
      this.loginForm.setValue({ email: this.email, password: this.password });
    }
  }

  private createForm() {
    this.loginForm = new FormGroup({
      // tslint:disable-next-line
      email: new FormControl(this.email, [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl(this.password, Validators.required),
    });
  }

  public login() {
    console.log(this.loginForm.value);
  }

}
