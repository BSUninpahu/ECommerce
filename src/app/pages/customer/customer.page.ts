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

  //Property Binding
  /*
    Se pueden dar valores a atributos de elementos html a traves de variables
    que viajan desde el "Back"
  */
  urlImagen: string = "../../../assets/images/user.jpeg";
  inhabilitar: boolean = false;
  inhabilitarNombre: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log("inicio customer");
  }

  guardarNombre():void{
    // Este mensaje es solo explicativo, en realidad no ha guardado nada
    alert("Nombre guardado");
    this.inhabilitarNombre = true;
  }

  modificarDireccion(event: Event){
    /* Estamos recibiendo el evento, lo convertirmos a elemento html con el casteo
        de target (que es el elemento que ejecuta la accion) y traemos su valor
    */
    this.direccion = (<HTMLInputElement>event.target).value;
  }
}
