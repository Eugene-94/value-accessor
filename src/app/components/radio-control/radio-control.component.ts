import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio-control',
  templateUrl: './radio-control.component.html',
  styleUrls: ['./radio-control.component.scss'],
  providers: [{ 
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioControlComponent),
    multi: true
   }]
})
export class RadioControlComponent implements OnInit, ControlValueAccessor {

  public options: IRadioControlOption[] = [];

  private _value: IRadioControlOption;

  constructor() {
    this.options.push(
      {
        id: 1,
        value: 'Опция1'
      },
      {
        id: 2,
        value: 'Опция2'
      }
    )
  }

  ngOnInit(): void {
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(this._value);
  }

  public checkOption(option: IRadioControlOption) {
    this.value = option;
  }

  public writeValue(value: IRadioControlOption): void {
    this.value = value;
  }

  onChange(_: any) {}

  registerOnChange(fn: any) {
    this.onChange = fn;
   }
  
  registerOnTouched() {}

}

interface IRadioControlOption {
  id: number;
  value: string;
}
