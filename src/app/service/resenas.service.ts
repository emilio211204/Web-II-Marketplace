import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.service';
import { Proveedor } from './proveedor.service';

export interface Resena {

  comentario: string;
  fechacomentario: Date;
  calificacion: number;
  cliente: string; 
  proveedor: string; 
}


@Injectable({
  providedIn: 'root'
})
export class ResenasService {

  constructor(private http: HttpClient) { }
  private API_RESENAS = 'http://localhost:8080/resenas'
  // Obtener todas las reseñas
  getResenas(): Observable<Resena[]> {
    return this.http.get<Resena[]>(this.API_RESENAS);
  }

  // Guardar una nueva reseña
  guardarResena(resena: Resena): Observable<Resena> {
    return this.http.post<Resena>(`${this.API_RESENAS}/guardarResena`, resena);
  }

  // Actualizar una reseña existente
  actualizarResena(id: number, resena: Resena): Observable<Resena> {
    return this.http.put<Resena>(`${this.API_RESENAS}/actualizarResena/${id}`, resena);
  }

  // Eliminar una reseña
  eliminarResena(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API_RESENAS}/eliminarResena/${id}`);
  }
}
