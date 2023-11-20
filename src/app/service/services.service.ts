import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private firestore: AngularFirestore) {}

  // Método para añadir una nota
  agregarNota(nota: Nota) {
    return this.firestore.collection('notas').add(nota);
  }

  // Método para obtener todas las notas
  obtenerNotas() {
    return this.firestore.collection('notas').snapshotChanges();
  }

  // Método para actualizar una nota
  actualizarNota(id: string, nota: Nota) {
    return this.firestore.collection('notas').doc(id).update(nota);
  }
}

export interface Nota {
  nota: string;
  fecha: string;
  etiquetas: string;
}