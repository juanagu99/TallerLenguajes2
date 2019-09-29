import { Component, OnInit } from '@angular/core';
import { Api } from '../shared/Api.service'
import { Product } from './Product.model'
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"
import { FormComponent } from "../form/form.component"

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  FormRef: FormComponent;

  constructor( 
    private webservice : Api ,
    private ModalService : NgbModal   
    ) {    
    //this.GetProducts();
    //this.AddProduct(new Product("TV LG 65UM7400PDA","Televisor LED UHD - 4K Active HDR - Sonido DTS Virtual X - Smart TV"));
  }

  ngOnInit() {
  }

  public AddProduct( product : Product ){
    this.webservice.PostProduct(product).subscribe(
      resultado => {
      console.log(resultado);
      },
      error=>{
      console.log(JSON.stringify(error))
      }
    ); //suscribimos el observable esto sria el observer
  }

  public GetProduct(  id : number ){
    this.webservice.GetProduct(id).subscribe(
      resultado => {
      console.log(resultado);
      },
      error=>{
      console.log(JSON.stringify(error))
      }
    ); //suscribimos el observable esto sria el observer
  }
  
  public GetProducts(){
    this.webservice.GetProducts().subscribe(
      resultado => {
      console.log(resultado);
      },
      error=>{
      console.log(JSON.stringify(error))
      }
    ); //suscribimos el observable esto sria el observer
  }
  
  //Asi se utiliza el servicio de una ventana pop
  EventoClick(){
    let WindowPop = this.ModalService.open(FormComponent); //este modal es una ventana tipo pop
    //utilizamos el servicio con una promesa
    WindowPop.result.then(
        (result) => {
        this.WindowPopClose.bind(this);
      }, (reason) => {
        this.WindowPopClose.bind(this);
      });
      //utilizamos el servicio con una promesa
  }
  WindowPopClose(){
    alert("No se guardo la información")
  }
  //Asi se utiliza el servicio de una ventana pop
}
