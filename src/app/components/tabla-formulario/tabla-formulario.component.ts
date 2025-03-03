import { Component } from '@angular/core';
import { ServiciosService } from '../../service/servicios.service';
import { JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabla-formulario',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tabla-formulario.component.html',
  styleUrl: './tabla-formulario.component.css'
})
export class TablaFormularioComponent {
  constructor(private servicio: ServiciosService) { }
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
}
