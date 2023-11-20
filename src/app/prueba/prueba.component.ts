import { Component } from '@angular/core';
import { ServicesService, Nota } from '../service/services.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {
  nuevaNota: Nota = { nota: '', fecha: '', etiquetas: '' };

  constructor(private servicio: ServicesService) {}

  // Método para agregar una nota
  agregarNota() {
    this.servicio.agregarNota(this.nuevaNota).then(() => {
      console.log('Nota agregada con éxito');
      // Puedes limpiar el formulario o hacer otras acciones después de agregar
    })
    .catch(error => console.error('Error al agregar la nota:', error));
  }
}
