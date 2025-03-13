import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Proveedor, ProveedorService } from '../../service/proveedor.service';

@Component({
  selector: 'app-formulario-p',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-p.component.html',
  styleUrl: './formulario-p.component.css'
})
export class FormularioPComponent {
  proveedor: Proveedor = {
    nombre: '',
    especialidad: '',
    correo: '',
    telefono: '',
    tarifas: '',
    experiencia: '',
    username: '',
    password: '',
    rol: 'PROVEEDOR', // Valor por defecto
  };

  constructor(private servicio: ProveedorService) {}

  ngOnInit(): void {}

  guardarP(): void {
    this.servicio.guardarProveedor(this.proveedor).subscribe({
      next: (response) => {
        console.log('Proveedor guardado:', response);
        alert('Proveedor guardado exitosamente');
        this.resetForm();
      },
      error: (error) => {
        console.error('Error al guardar el proveedor:', error);
        alert('Hubo un error al guardar el proveedor');
      },
    });
  }

  resetForm(): void {
    this.proveedor = {
      nombre: '',
      especialidad: '',
      correo: '',
      telefono: '',
      tarifas: '',
      experiencia: '',
      username: '',
      password: '',
      rol: 'PROVEEDOR',
    };
  }
}


