import { Component, forwardRef, Inject, INJECTOR, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers:[{
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SelectComponent)
    }]
})
export class SelectComponent implements ControlValueAccessor,OnInit {
  @Input() label:string;
  @Input() selectValues=[];
  @Input()
  focused:boolean;
  _control: NgControl;
  value='';
  onTouched = () => {
  };
  private onChangeFn:Function;
  constructor(@Inject(INJECTOR) private injector: Injector) {
   }
  writeValue(obj: any): void {
    this.value=obj;
    console.log('write value')
    //throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    this.onChangeFn=fn;
    console.log('onchange')
    //throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    console.log('on touched')
    //throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    //throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this._control = this.injector.get(NgControl);}
    get invalid(){
      return this._control.invalid &&this._control.touched;
    }
    changeEvent($event:any): void{
      console.log($event)
      this.onChangeFn($event);
    }
}
