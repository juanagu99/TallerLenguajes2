import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appMaskEmail]'
})
export class MaskEmailDirective {

  private readonly Element: HTMLInputElement;
  public Allow : number[] = [8,48,49,50,51,52,53,54,55,56,57,96,97,98,99,100,101,102,103,104,105];
  public zero: number [] = [48];
  constructor( public ref: ElementRef ) {
    this.Element = ref.nativeElement;  
  }
  public setInput(value: any): void {
    this.Element.value = value;
    this.Element.dispatchEvent(new Event('input'));
  }
  
  @HostListener('blur', ['$event']) blurEvent(e: any) {
    let val = <string>e.target.value;
    const regex: RegExp = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$",'g');
    if(val.match(regex) !== null){
      const result = val.match(regex).join('');
      this.setInput(result);
    }else {
      this.setInput(null);
    }
  }

}
