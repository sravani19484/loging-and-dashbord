import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder} from '@angular/forms';
import { Routes, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
      this.loginform = this.formBuilder.group({
          UserName: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(8)]]
      });
  }
  get f() { return this.loginform.controls; }
  onSubmit() {
      this.submitted = true;

      if (this.loginform.invalid) {
          return;
      }


  }
  dash() {
    this.router.navigateByUrl('/dashbord');
      }
}
