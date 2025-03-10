import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor( private http: HttpClient) { }

  private API_SERVICIOS = 'http://localhost:3002/servicios';

  //Metodo para enviar los servicios
  postServicios(servicios: any):Observable<any> {
    return this.http.post(this.API_SERVICIOS, servicios);
  }

  //Metodo para mostrar los servicios
  getServicios():Observable<any> {
    return this.http.get(this.API_SERVICIOS);
  }

  //Metodo para actualizar los servicios
  getServiciosById(id: any):Observable<any> {
    return this.http.get(`${this.API_SERVICIOS}/${id}`);
  }
  putServicios(servicios: any):Observable<any> {
    return this.http.put(`${this.API_SERVICIOS}/${servicios.id}`, servicios);
  }

  //Metodo para eliminar los servicios
  deleteServicios(id: any):Observable<any> {
    return this.http.delete(`${this.API_SERVICIOS}/${id}`);
  }
}
