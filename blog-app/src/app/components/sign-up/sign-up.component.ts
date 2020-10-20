import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';
import { SignUpService } from 'src/app/services/sign-up.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  // registerForm: FormGroup;
  submitted = false;
  loading = false; 

  address: FormGroup;
  geo: FormGroup;
  company: FormGroup;

  name='';
  username='';
  email='';
  password='';
  phone='';
  website='';

  error='';

  constructor(private signUpService: SignUpService,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {}

  
  ngOnInit(): void {
  }

  registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    street: ['', Validators.required],
    suite: ['', Validators.required],
    city: ['', Validators.required],
    zipcode: ['', Validators.required],
    lat: ['', Validators.required],
    lng: ['', Validators.required],
    phone: ['', Validators.required],
    website: ['', Validators.required],
    compName:['', Validators.required],
    catchPhrase: ['', Validators.required],
    bs: ['', Validators.required]
  })

  get regF(){
    return this.registerForm.controls;
  }

  signUp(){
    this.submitted= true;

    if(this.registerForm.invalid){
      return;
    }

    this.loading = true;
    this.signUpService.register(this.registerForm.value)
          .pipe(first())
          .subscribe(
            data => {
              window.alert("You're registered, please sign in")
              window.location.reload();
            },
            error => {
              window.alert(error);
              this.loading = false;
            }
          )
  }

}
