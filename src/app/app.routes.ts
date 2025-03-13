import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarserComponent } from './pages/editarser/editarser.component';
import { LoginComponent } from './pages/login/login.component';
import { loginGuard } from './guards/login.guard';
import { servicioGuard } from './guards/servicio.guard';
import { ClienteComponent } from './pages/cliente/cliente.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'nosotros',
        component:NosotrosComponent
    },
    {
        path:'contacto',
        component:ContactoComponent
    },
    {
        path:'servicios',
        component:ServiciosComponent,
        
    },
    {
        path:'formulario',
        component:FormularioComponent,
        canActivate:[loginGuard]
    },
    {
        path:'agregar',
        component:AgregarComponent
    },
    {
        path:'editar/:id',
        component:EditarserComponent
    },
    {
        path:'',
        component:Pagina404Component
    },

    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'cliente',
        component:ClienteComponent
    },
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    }
];
