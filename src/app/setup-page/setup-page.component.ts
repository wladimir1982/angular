import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SetupPageService} from "./setup-page.service";


@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})
export class SetupPageComponent implements OnInit {

  constructor(private setupPageService: SetupPageService) { }

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(''),
      title: new FormControl(''),
      text: new FormControl('')
    });
  }

  onSubmit() {
     /*this.form.value
     *
     * {
     * email: 'qwe',
     * text: 'test',
     * title: 'te'
     * }
     *let a = {
     * s: 1,
     * d: 2

     * }
     *
     *
     * */

     let obj = {
       email: this.form.value.email,
       title: this.form.value.title,
       description: this.form.value.text
     };
     // {}
     this.setupPageService.postArticles(obj)
      .subscribe((request: any) => console.log(request));
    console.log('Submited!', this.form.value);
  }

}


