import { Component, forwardRef, Inject, Injector, INJECTOR, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers:[{
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent)
    }]
})
export class InputComponent implements ControlValueAccessor,OnInit {
  @Input() label:string;
  @Input() type='text';
  focused:boolean;
  _control: NgControl;
  value='';
  onTouched = () => {
  };
  private onChangeFn:Function;
  constructor(@Inject(INJECTOR) private injector: Injector) {
    
   }
  ngOnInit(): void {
    this._control = this.injector.get(NgControl);
  }
  
  
  changeText($event:any): void{
    this.onChangeFn($event.target.value);
  }
  writeValue(obj: string): void {
    this.value=obj;
    //throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
   this.onChangeFn=fn;
  }


  registerOnTouched(fn: any): void {
    console.log(fn)
    this.onTouched = fn;
   // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    //throw new Error('Method not implemented.');
  }


get invalid(){
  return this._control.invalid &&this._control.touched;
}
 
}
