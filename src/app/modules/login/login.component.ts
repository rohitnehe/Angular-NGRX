import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { User } from '../../shared/store/models/user';

import { Store } from '@ngrx/store';
import { AppState, } from '../../shared/store/app.states';

import { LogIn } from '../../shared/store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User = new User();
  constructor(private fb: FormBuilder,
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required],
      }
    );
  }


  onSubmit(): void {
    
    console.log('in1');
    const payload = {
      email: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    console.log(payload);
    this.store.dispatch(new LogIn(payload));
  }
}
