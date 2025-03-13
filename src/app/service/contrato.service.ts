import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.service';
import { Prestaciones } from './prestaciones.service';


export interface Contrato {
  nombreContrato: string;
  fechaInicio: Date;
  fechaFin: Date;
  estado: string;
  cliente: Cliente;
  prestaciones: Prestaciones[];
}

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  constructor( private http: HttpClient) { }
  private API_CONTRATOS = 'http://localhost:8080/contrato'
// Obtener todos los contratos
getContratos(): Observable<Contrato[]> {
  return this.http.get<Contrato[]>(this.API_CONTRATOS);
}

// Guardar un contrato
guardarContrato(contrato: Contrato): Observable<Contrato> {
  return this.http.post<Contrato>(`${this.API_CONTRATOS}/guardarContrato`, contrato);
}

// Actualizar un contrato
actualizarContrato(id: number, contrato: Contrato): Observable<Contrato> {
  return this.http.put<Contrato>(`${this.API_CONTRATOS}/actualizarContrato/${id}`, contrato);
}

// Eliminar un contrato
eliminarContrato(id: number): Observable<void> {
  return this.http.delete<void>(`${this.API_CONTRATOS}/eliminarContrato/${id}`);
}

// Generar PDF
generarPdf(): Observable<Blob> {
  return this.http.get(`${this.API_CONTRATOS}/generarPdf`, { responseType: 'blob' });
}
}
