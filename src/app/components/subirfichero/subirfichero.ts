import { Component, ChangeDetectorRef } from '@angular/core';
import { Fichero } from '../../models/fichero';
import { ServiceFicheros } from '../../services/service-ficheros';

@Component({
  selector: 'app-subirfichero',
  standalone: false,
  styleUrl: './subirfichero.css',
  templateUrl: './subirfichero.html',
})
export class Subirfichero {
  public archivo!: Fichero;
  public mensaje!: string;
  constructor(
    private _serviceFicheros: ServiceFicheros,
    private _cdr: ChangeDetectorRef
  ) {
    this.mensaje = "";
  }
  seleccionarArchivo(event: Event) {
    let input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      let file = input.files[0];
      let reader = new FileReader();
      reader.onload = () => {
        let resultado = reader.result as string;
        let base64 = resultado.split(',')[1];
        this.archivo = new Fichero(file.name, base64);
        this._cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    }
  }
  async subirArchivo() {
    if (!this.archivo) {
      this.mensaje = "No se ha seleccionado ningún archivo.";
    }
    try {

      await this._serviceFicheros.subirArchivo(this.archivo);
      this.mensaje = "Archivo subido correctamente.";
    } catch (error) {
      this.mensaje = "Error al subir el archivo: " + error;
    }

  }
}
