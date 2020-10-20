import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Users } from 'src/app/interfaces/users'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  logged = false;

  username = '';
  password = '';
  
    loading = false;
    submitted = false;
    error = '';

  constructor(private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
      if (this.loginService.currentUserValue) { 
        this.router.navigate(['/posts']);
    }
    }

  ngOnInit(){
  }

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
});

  returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/posts';

  get f() { 
    return this.loginForm.controls; 
  }

    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.loginService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }

  logout(){
    localStorage.clear();
    this.logged = false;
  }

}
