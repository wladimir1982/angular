import {Component, OnInit} from "@angular/core";
import {RegistrationFormService} from "./registration-form.service";
import {Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


// function passwordMatcher(c: AbstractControl) {
//   return c.get('password').value === c.get('confirm').value
//     ? null : {'nomatch': true};
// }

let passwordMatchValidator = function(formBuilder: FormGroup) {
  return formBuilder.get('password').value === formBuilder.get('confirm').value ? null : { 'mismatch': true };
}


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})

export class RegistrationFormComponent implements OnInit {

  form: FormGroup;


  constructor(private registrationFormService: RegistrationFormService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {





    this.form = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.pattern('^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$') ]],



      // account: this.formBuilder.group({
      //   password: ['', Validators.required, Validators.minLength(6)],
      //   confirm: ['', Validators.required, Validators.minLength(6)],
      // }, {validator: passwordMatcher}),

      account: this.formBuilder.group({
        password: new FormControl('', Validators.minLength(6)),
        passwordConfirm: new FormControl('', Validators.minLength(6)),
      }, passwordMatchValidator)

    });
    console.log(this.form);

    this.form.valueChanges.subscribe(() => {
      console.log(this.form)
    });
    // this.form = new FormGroup({
    //   login: new FormControl(''),
    //   pass1: new FormControl(''),
    //   pass2: new FormControl('')
    // });
  }


  email: string = this.registrationFormService.obj.email;
  password: string = this.registrationFormService.obj.password;
  confirm: string = this.registrationFormService.obj.confirm;

  goNext() {
    this.router.navigate(['/one']);
    this.registrationFormService.obj.login = this.email;
    this.registrationFormService.obj.password = this.password;
    this.registrationFormService.obj.confirm = this.confirm;
    console.log(this.form);
    console.log('Email: ' + this.form.value.email);
    console.log('Password: ' + this.form.value.password);
    console.log('Confirm: ' + this.form.value.confirm);
  }

}



// equalValidator({value}: FormGroup):{[key: string]: any} {
//   const [first, ...rest] = Object.keys(value || {});
//   const valid = rest.every(v => value[v] === value[first]);
//   return valid ? null : {equal: true}
// },
