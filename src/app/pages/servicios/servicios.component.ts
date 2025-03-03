import { Component } from '@angular/core';
import { FormularioProductoComponent } from "../../components/formulario-producto/formulario-producto.component";
import { TablaFormularioComponent } from "../../components/tabla-formulario/tabla-formulario.component";

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [FormularioProductoComponent, TablaFormularioComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

}
