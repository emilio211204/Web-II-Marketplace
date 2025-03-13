import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente, ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-formulario-c',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-c.component.html',
  styleUrl: './formulario-c.component.css'
})
export class FormularioCComponent {


cliente: Cliente = {
  
    nombre: '',
    apellido: '',
    email: '',
    username: '',
    password: '',
  };

  constructor(private servicio: ClienteService) {}

  ngOnInit(): void {}

  guardarC(): void {
    this.servicio.guardarCliente(this.cliente).subscribe({
      next: (response) => {
        console.log('Cliente guardado:', response);
        alert('Cliente guardado exitosamente');
        this.resetForm();
      },
      error: (error) => {
        console.error('Error al guardar el cliente:', error);
        alert('Hubo un error al guardar el cliente');
      },
    });
  }

  resetForm(): void {
    this.cliente = {
      nombre: '',
      apellido: '',
      email: '',
      username: '',
      password: '',
    };
  }
}