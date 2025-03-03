import { Component } from '@angular/core';
import { FormularioProductoComponent } from "../../components/formulario-producto/formulario-producto.component";
import { TablaFormularioComponent } from "../../components/tabla-formulario/tabla-formulario.component";

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [FormularioProductoComponent, TablaFormularioComponent],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {

}
