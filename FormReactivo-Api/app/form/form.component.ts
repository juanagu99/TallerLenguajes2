import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public FormRef : FormGroup //es la clase formulario que tiene todos los metodos de los forms
  
  constructor(
    private FormBuil : FormBuilder, //se utiliza para cargar los objetos al form 
    public activeModal: NgbActiveModal
    ) { }
  //metodo para inicializar todos los componentes y funciones del formulario
  ngOnInit() {
    //asignación o carga de objetos en el formulario
    this.FormRef = this.FormBuil.group(
      {
        Documento : ['',Validators.required],
        Valor: ['',Validators.required],
        CorreoElectronico: ['',Validators.required]
      }
    );    
    //fin asignación o carga de objetos en el formulario
  }

  Submit() {
    console.log(this.FormRef.value);
    this.activeModal.close(this.FormRef);
  } 

}



