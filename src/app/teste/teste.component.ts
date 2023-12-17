import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {
  constructor(){}

  alerta(menssagem:string){
    alert(menssagem)
  }

  teste(evento:KeyboardEvent ){
   if(evento.key == "Enter"){
     this.alerta("Voce digitou "   +  evento.key)
   }
  }
}
