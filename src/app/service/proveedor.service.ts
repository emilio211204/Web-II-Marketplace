import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Proveedor {
  nombre: string;
  especialidad: string;
  correo: string;
  telefono: string;
  tarifas: string;
  experiencia: string;
  username: string;
  password: string;
  rol: string;
  prestaciones?: any[]; // Ajusta según tu modelo
  reseñas?: any[]; // Ajusta según tu modelo
}
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor( private http: HttpClient) { }

  private API_PROVEEDORES = 'http://localhost:8080/proveedor'
  // Obtener todos los proveedores
  getProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.API_PROVEEDORES);
  }

  // Guardar un proveedor
  guardarProveedor(proveedor: Proveedor): Observable<Proveedor> {
    return this.http.post<Proveedor>(`${this.API_PROVEEDORES}/guardarProveedor`, proveedor);
  }

  // Actualizar un proveedor
  actualizarProveedor(id: number, proveedor: Proveedor): Observable<Proveedor> {
    return this.http.put<Proveedor>(`${this.API_PROVEEDORES}/actualizarProveedor/${id}`, proveedor);
  }

  // Eliminar un proveedor
  eliminarProveedor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_PROVEEDORES}/eliminarProveedor/${id}`);
  }
}
