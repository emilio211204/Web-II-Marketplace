import { Component } from '@angular/core';
import { ServiciosService } from '../../service/servicios.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})
export class FormularioProductoComponent {
  constructor( private servicio: ServiciosService) { }

  nombre:any;
  email:any;
  profesion:any;
  telefono:any;
  direccion:any;
  imagen:any;

  guardarFormulario(formulario: any) {
    this.servicio.postServicios(formulario.value).subscribe(()=>{
      window.location.reload();
    });
    this.nombre = '';
    this.email = '';
    this.profesion = '';
    this.telefono = '';
    this.direccion = '';
    this.imagen = '';
  }
}
