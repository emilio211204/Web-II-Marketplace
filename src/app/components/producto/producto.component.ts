import { Component } from '@angular/core';
import { ServiciosService } from '../../service/servicios.service';
import { Router } from 'express';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  constructor(private servicio: ServiciosService) { }
  
  servicios: any[] = [];
  ngOnInit() {
    this.servicio.getServicios().subscribe(servicios => {
      this.servicios = servicios;
    });
  }

  toggleDetails(servicio: any) {
    servicio.showDetails = !servicio.showDetails;
  }
}