import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {
  constructor(private servicio: LoginService, private route: Router) { }

  email: any;
  password: any;
  
login(formulario: any) {
  // Comprobamos si el correo es el de admin
  if (formulario.value.email === 'admin@gmail.com') {
    localStorage.setItem('login', "true");
    this.route.navigate(['agregar']);
  } else {
    // Si no es admin, verificamos el token
    this.servicio.postLogin(formulario.value).subscribe(acceso => {
      let token = acceso.accessToken;

      // Si el token es válido, redirigimos a 'servicios'
      if (token != null) {
        localStorage.setItem('login', "true");
        this.route.navigate(['servicios']);
      }
    });
  }
}
}

