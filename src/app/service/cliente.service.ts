import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Cliente {
  id: number; 
  nombre: string;
  apellido: string;
  email: string;
  username: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor( private http: HttpClient) { }
  private API_CLIENTE = 'http://localhost:8080/cliente'

  // Obtener todos los clientes
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API_CLIENTE);
  }

  // Guardar un cliente
  guardarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.API_CLIENTE}/guardarCliente`, cliente);
  }

  // Actualizar un cliente
  actualizarCliente(id: number, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.API_CLIENTE}/actualizarCliente/${id}`, cliente);
  }

  // Eliminar un cliente
  eliminarCliente(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API_CLIENTE}/eliminarCliente/${id}`);
  }
}

