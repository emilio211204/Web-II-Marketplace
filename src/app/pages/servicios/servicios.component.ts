import { Component } from '@angular/core';
import { FormularioProductoComponent } from "../../components/formulario-producto/formulario-producto.component";
import { TablaFormularioComponent } from "../../components/tabla-formulario/tabla-formulario.component";
import { ProductoComponent } from '../../components/producto/producto.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [FormularioProductoComponent, TablaFormularioComponent,ProductoComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

}
