import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  //Interpolacion:
  /*
    Se envian a la vista variables que se encuentran en la parte "Back", 
    Esto con el fin que la informacion pueda ser dinamica.
  */

  nombre: string = "Bryan";
  apellido: string = "Salas";
  tipIdentificaicon: string = "cc";
  identificacion: number = 12312345;
  direccion: string = "Calle 53 #23 - 54";
  telefono: number = 3202839234;
  email: string = "bryan@uninpahu.edu.co";
  nombreUsuario: string = "BryanS29233";

  constructor() { }

  ngOnInit() {
    console.log("inicio customer");
  }
}
