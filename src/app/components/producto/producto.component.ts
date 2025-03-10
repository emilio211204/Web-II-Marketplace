import { Component } from '@angular/core';
import { ServiciosService } from '../../service/servicios.service';

import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  constructor(private servicio: ServiciosService, private route: Router) { }
  
  servicios: any[] = [];
  ngOnInit() {
    this.servicio.getServicios().subscribe(servicios => {
      this.servicios = servicios;
    });
  }

  toggleDetails(servicio: any) {
    servicio.showDetails = !servicio.showDetails;
  }

  logout() {
    localStorage.setItem('login', 'false');
    this.route.navigate(['login']);
  }
}