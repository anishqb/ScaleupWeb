import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  submitted:boolean=false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(9)])]

    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted=true;
    if (this.loginForm.invalid) {
      return;
    }
    alert(this.loginForm.valid);

    this.router.navigate(["app-home"]);
  }
}
