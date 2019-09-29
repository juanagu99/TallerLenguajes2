import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appMaskValue]'
})
export class MaskValueDirective {

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
  @HostListener('keyup',['$event']) public showevent(event): void { //Listener se utiliza para obtener los eventos desde el html
    
    const val = <string>event.target.value;
    
    if(val.charAt(0)=="0"){
      this.setInput(null);
    }else{
      if(this.Allow.includes(+event.keyCode)){ //+ es para realizar el casteo ya que keyCode devuelve un string
        this.setInput(val);
        console.log(event);
      } else {
        const regex: RegExp = new RegExp('[0-9]','g');
        if(val.match(regex) !== null){
          const result = val.match(regex).join('');
          this.setInput(result);
        }else {
          this.setInput(null);
        }
      }
    }    
  }
  @HostListener('blur', ['$event']) blurEvent(e: any) {
    console.log("g")
    let fragmentar = <string>e.target.value;
    let tamaño = fragmentar.length;
    if(tamaño<10){
      switch(tamaño){
        case 1: this.setInput("$"+fragmentar+",00");
        break;
        case 2: this.setInput("$"+fragmentar+",00");
        break;
        case 3: this.setInput("$"+fragmentar+",00");
        break;
        case 4: this.setInput("$"+fragmentar.substring(0,1)+"."+fragmentar.substring(1,4)+",00");
        break;
        case 5: this.setInput("$"+fragmentar.substring(0,2)+"."+fragmentar.substring(1,4)+",00");
        break;
        case 6: this.setInput("$"+fragmentar.substring(0,3)+"."+fragmentar.substring(1,4)+",00");
        break;
        case 7: this.setInput("$"+fragmentar.substring(0,1)+"'"+fragmentar.substring(1,4)+"."+fragmentar.substring(4,7)+",00");
        break;
        case 8: this.setInput("$"+fragmentar.substring(0,2)+"'"+fragmentar.substring(2,5)+"."+fragmentar.substring(5,8)+",00");
        break;
        case 9: this.setInput("$"+fragmentar.substring(0,3)+"'"+fragmentar.substring(3,6)+"."+fragmentar.substring(6,9)+",00");
        break;
      }
    }else{
      this.setInput(null);
    }
  }
  @HostListener('focus', ['$event']) focusEvent(e: any) {
    let fragmentar:string = <string>e.target.value;
    if (fragmentar.charAt(0)=="$") {
      //this.setInput(fragmentar.substring(1,fragmentar.length));
      this.setInput(null);
    }
  }
}

