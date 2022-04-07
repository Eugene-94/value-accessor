import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'value-accessor';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      counter: [5, Validators.max(10)],
      radio: [{}]
    });

    this.form.valueChanges.subscribe((val) => {
      console.log('ФОРМА: ', val)
    })
  }
}
