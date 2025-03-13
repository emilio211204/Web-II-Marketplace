import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Proveedor, ProveedorService } from '../../service/proveedor.service';
import { Prestaciones, PrestacionesService } from '../../service/prestaciones.service';

@Component({
  selector: 'app-formulario-presta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-presta.component.html',
  styleUrl: './formulario-presta.component.css'
})
export class FormularioPrestaComponent {
  
  prestacion: Prestaciones = {
    nombre: '',
    descripcion: '',
    precio: 0,
    proveedor: {} as Proveedor,
  };

  proveedores: Proveedor[] = [];

  constructor(
    private prestacionesService: PrestacionesService,
    private proveedorService: ProveedorService
  ) {}

  ngOnInit(): void {
    this.cargarProveedores();
  }

  cargarProveedores(): void {
    this.proveedorService.getProveedores().subscribe({
      next: (proveedores) => (this.proveedores = proveedores),
      error: (error) => console.error('Error al cargar proveedores:', error),
    });
  }

  guardarPre(): void {
    this.prestacionesService.guardarPrestacion(this.prestacion).subscribe({
      next: (response) => {
        console.log('Prestación guardada:', response);
        alert('Prestación guardada exitosamente');
        this.resetForm();
      },
      error: (error) => {
        console.error('Error al guardar la prestación:', error);
        alert('Hubo un error al guardar la prestación');
      },
    });
  }

  resetForm(): void {
    this.prestacion = {
      nombre: '',
      descripcion: '',
      precio: 0,
      proveedor: {} as Proveedor,
    };
  }
}
