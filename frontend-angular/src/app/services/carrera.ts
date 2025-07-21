import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carrera } from '../models/carrera';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  private apiUrl = 'http://localhost:3001/carrera';

  constructor (private http: HttpClient) {}
  
  //obtener tdas las carreras
  getCarrera(): Observable<Carrera[]> {
    return this.http.get<Carrera[]>(this.apiUrl)
  }

  // Crear un nueva carrera
  addCarrera(carrera: Carrera): Observable<Carrera> {
    return this.http.post<Carrera>(this.apiUrl, carrera);
  }

  //Actualizar carrera existente
  updateCarrera(id: number, carrera: Carrera): Observable<Carrera> {
    return this.http.put<Carrera>(`${this.apiUrl}/${id}`, carrera);
  }

  //eliminar una carrera
  deleteCarrera(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}