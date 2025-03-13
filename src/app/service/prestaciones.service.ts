import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from './proveedor.service';

export interface Prestaciones {
  nombre: string;
  descripcion: string;
  precio: number;
  proveedor: Proveedor;
}
@Injectable({
  providedIn: 'root'
})
export class PrestacionesService {

  constructor( private http: HttpClient) { }
  private API_PRESTACIONES = 'http://localhost:8080/prestaciones'
    // Obtener todas las prestaciones
    getPrestaciones(): Observable<Prestaciones[]> {
      return this.http.get<Prestaciones[]>(this.API_PRESTACIONES);
    }
  
    // Guardar una prestación
    guardarPrestacion(prestacion: Prestaciones): Observable<Prestaciones> {
      return this.http.post<Prestaciones>(`${this.API_PRESTACIONES}/guardarPrestacion`, prestacion);
    }
  
    // Actualizar una prestación
    actualizarPrestacion(id: number, prestacion: Prestaciones): Observable<Prestaciones> {
      return this.http.put<Prestaciones>(`${this.API_PRESTACIONES}/actualizarPrestacion/${id}`, prestacion);
    }
  
    // Eliminar una prestación
    eliminarPrestacion(id: number): Observable<void> {
      return this.http.delete<void>(`${this.API_PRESTACIONES}/eliminarPrestacion/${id}`);
    }
  }
