import { Service } from '@angular/core';
import { Fichero } from '../models/fichero';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ServiceFicheros {
    constructor(private http: HttpClient) { }

    subirArchivo(fichero: Fichero): Promise<any> {
        let url =
            "https://apipostfiles.azurewebsites.net/api/TestingFiles";
        return firstValueFrom(this.http.post(url, fichero));

    }

}
