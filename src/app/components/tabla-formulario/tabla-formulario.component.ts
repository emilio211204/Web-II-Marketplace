import { Component } from '@angular/core';
import { ServiciosService } from '../../service/servicios.service';
import { JsonPipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-tabla-formulario',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tabla-formulario.component.html',
  styleUrl: './tabla-formulario.component.css'
})
export class TablaFormularioComponent {
  constructor(private servicio: ServiciosService , private route:Router) { }
  servicios: any[] = [];

  ngOnInit() {
    this.servicio.getServicios().subscribe(servicios => {
      this.servicios = servicios;
    });
  }
  eliminarServicio(id: number) {
    this.servicio.deleteServicios(id).subscribe(() => {
      window.location.reload();
    })
  }
  logout() {
    localStorage.setItem('login', 'false');
    this.route.navigate(['login']);
  }
}
