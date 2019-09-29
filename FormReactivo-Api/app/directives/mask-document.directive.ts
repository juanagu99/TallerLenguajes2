import { Directive,ElementRef,HostListener } from '@angular/core';
@Directive({
  selector: '[appMaskDocument]'
})
export class MaskDocumentDirective {

  private readonly Element: HTMLInputElement;

  public All : number[] = [8,9,10,48,49,50,51,52,53,54,55,56,57];

  constructor( public ElementRef: ElementRef ) {
    this.Element = ElementRef.nativeElement;        
  }
  
  public setInput(value: any): void {
    this.Element.value = value;
    this.Element.dispatchEvent(new Event('input'));
  }

  @HostListener('keyup',['$event']) public showevent(event): void { //Listener se utiliza para obtener los eventos desde el html
       
    const val = <string>event.target.value;    
    if( val.charAt(0)=="0" ){ //si al inicio se ingresa cero entonces pone el valor en null
      this.setInput(null);
    }else{
      if(this.All.includes(+event.keyCode)){  //si el valor que hay en el input es igual a todos los valores ascii de numeros entonces set input
        //+ es para realizar el casteo ya que keyCode devuelve un string
        this.setInput(val);
        console.log(event);
      } else {
        //si no se incluye entonces elimina el caracter que no corresponde a un numero
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

  public ngOnInit(): void {
    this.Element.autocomplete = 'off';
  }

  @HostListener('blur', ['$event']) blurEvent(e: any) {
    let fragmentar:string = <string>e.target.value;
    if(fragmentar.length==10){
    this.setInput(fragmentar.charAt(0)+"."+fragmentar.substring(1,4)+"."+
                  fragmentar.substring(4,7)+"."+fragmentar.substring(7,10));
    }else{
      this.setInput(null);
    }
  }

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    e.preventDefault();
  }



}
