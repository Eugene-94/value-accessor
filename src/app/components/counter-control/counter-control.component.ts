import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-counter-control',
  templateUrl: './counter-control.component.html',
  styleUrls: ['./counter-control.component.scss'],
  providers: [{ 
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CounterControlComponent),
    multi: true
   }]
})
export class CounterControlComponent implements OnInit, ControlValueAccessor {

  private _value: any;

  get value() {
    return this._value;
   }

  @Input()
  set value(val) {
    this._value = val;
    this.onChange(this._value);
   }

  constructor() { }

  ngOnInit(): void {
  }

  onChange(_: any) {
    console.log('change')
  }

  up() {
    this.value++;
   }
   
   down() {
    this.value--;
   }

   writeValue(value: any) {
     console.log('write')
    this.value = value;
   }
  
   registerOnChange(fn: any) {
    this.onChange = fn;
   }
  
   registerOnTouched() {}

}
