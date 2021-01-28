import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent {

  //Hijo a Padre
  @Input('valor') progreso: number=10;

  //padre a Hijo evento
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();


  constructor() { }
  
  get getPorcentaje() {
    return `${this.progreso}%`;
  }

  cambiarValor(valor: number) {
  if( this.progreso>=100 && valor>=0){
    this.valorSalida.emit(100);
    return this.progreso=100  
    }
  
    if( this.progreso<=0 && valor<0){
      this.valorSalida.emit(0);
      return this.progreso=0      
      }

      this.progreso=this.progreso + valor;
      this.valorSalida.emit(this.progreso);
    }

    onChange(nuevoValor: number){
      console.log(event);
      if(nuevoValor >=100) {
        this.progreso =100;
      } else if(nuevoValor<=0){
        this.progreso=0;
      }else{
      this.progreso=nuevoValor;
    }
    this.valorSalida.emit( nuevoValor );
    }
}
