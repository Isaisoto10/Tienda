import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { CarritoComponent } from './Compartidos/carrito/carrito';
import { Registro } from './auth/registro/registro';
import { FavoritosComponent } from './Compartidos/favoritos/favoritos';
import { Contacto } from './paginas/contacto/contacto';
import { Ofertas } from './paginas/ofertas/ofertas';
import { Productos } from './paginas/productos/productos';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { Menu } from './Compartidos/menu/menu';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component:Inicio },
    {path: 'Carrito', component:CarritoComponent},
    {path:'registro', component:Registro},
    {path: 'favoritos', component:FavoritosComponent},
    {path: 'contacto', component:Contacto},
    {path: 'ofertas', component:Ofertas},
    {path:'productos', component:Productos},
    {path: 'inicio-sesion', component:InicioSesion},
    

    { path: '**', redirectTo: 'home' }
    
];
