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
    this.servicio.postLogin(formulario.value).subscribe(acceso => {
      let token = acceso.accessToken
      if (token != null) {
        localStorage.setItem('token', token);
        this.route.navigate(['servicios']);
      }
    });
  }
}

