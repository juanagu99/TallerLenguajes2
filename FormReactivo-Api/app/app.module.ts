import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Api } from './shared/Api.service';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaskDocumentDirective } from './directives/mask-document.directive';
import { MaskValueDirective } from './directives/mask-value.directive';
import { MaskEmailDirective } from './directives/mask-email.directive';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FormComponent,
    MaskDocumentDirective,
    MaskValueDirective,
    MaskEmailDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [Api],
  bootstrap: [AppComponent],
  entryComponents: [FormComponent] //como esto se va crear de forma dinamica le tenemos que avisar a angular
})
export class AppModule {
  
 }
