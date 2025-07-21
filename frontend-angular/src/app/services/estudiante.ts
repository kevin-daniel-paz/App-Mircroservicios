import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from '../models/estudiante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  
  private apiUrl = 'http://localhost:3002/estudiante';

  constructor (private http: HttpClient) {}

  //obtener tdos los estudiantes
    getEstudiante(): Observable<Estudiante[]> {
      return this.http.get<Estudiante[]>(this.apiUrl)
    }
  
    // Crear un nuevo estudiante
    addEstudiante(estudiante: Estudiante): Observable<Estudiante> {
      return this.http.post<Estudiante>(this.apiUrl, estudiante);
    }
  
    //Actualizar reggistro ya existente
    updateEstudiante(id: number, estudiante: Estudiante): Observable<Estudiante> {
      return this.http.put<Estudiante>(`${this.apiUrl}/${id}`, estudiante);
    }
  
    //eliminar un estudianye
    deleteEstudiante(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${id}`)
    }
}


