import { Component, inject } from '@angular/core';
import { ServiciosService } from '../../service/servicios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-editarser',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editarser.component.html',
  styleUrl: './editarser.component.css'
})
export class EditarserComponent {
  constructor (private servicio: ServiciosService, private route: Router) { }
  ruta = inject(ActivatedRoute)
  
  id:any;
  nombre:any;
  email:any;
  profesion:any;
  telefono:any;
  direccion:any;
  imagen:any;
  item:any;

  editar(formulario: any) : void {
    this.servicio.putServicios(formulario.value).subscribe(() => {
      this.route.navigate(['agregar']);
    });
  }

  ngOnInit() {
    this.ruta.params.subscribe(s => {
      this.servicio.getServiciosById(s['id']).subscribe(servicios => {
        this.item = servicios;
        this.id = this.item.id;
        this.nombre = this.item.nombre;
        this.email = this.item.email;
        this.profesion = this.item.profesion;
        this.telefono = this.item.telefono;
        this.direccion = this.item.direccion;
        this.imagen = this.item.imagen;
      })
    })
  }
}
