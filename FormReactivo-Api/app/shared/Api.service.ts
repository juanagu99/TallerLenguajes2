import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Api {
    
  readonly rootUrl = "http://localhost:65165/api/";

  //defino el header del json esto aparece al principio de la peticion http
  readonly httpOptions = {
    headers: new HttpHeaders()
    .set("X-CustomHttpHeader", "CUSTOM_VALUE")
    .set('Access-Control-Allow-Origin', '*')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json; charset=utf-8')
  } 
  //defino el header del json esto aparece al principio de la peticion http

  constructor( private HttpCli:HttpClient ) { }
   
  //devuelve un observable de la respuesta del post de un producto
  public PostProduct( producto : any ) : Observable<any> {
    let json = JSON.stringify(producto); //obtengo el objeto json   
    console.log(json);
    return this.HttpCli.post(this.rootUrl + "products/",json,this.httpOptions);
  }
  //fin post

  //obtener un producto
  GetProduct( id : number ): Observable<any> {
    return this.HttpCli.get( this.rootUrl + "products/" + id)
  }  
  //fin obtener un producto

  //devuelve un observable de todos los productos
  GetProducts(): Observable<any> {
    return this.HttpCli.get(this.rootUrl + 'products')
  }
  //fin get productos

 }
