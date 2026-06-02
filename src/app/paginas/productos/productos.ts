  import { Component, inject } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { Producto } from '../../models/producto';
  import { CarritoService } from '../../servicios/carrito';
  import { FavoritosService } from '../../servicios/favoritos';

  @Component({
    selector: 'app-productos',
    imports: [CommonModule],
    templateUrl: './productos.html',
    styleUrl: './productos.css',
  })
  export class Productos {

    public favoritosService = inject(FavoritosService);
      
    public carritoService = inject(CarritoService);

    Productos : Producto []= [
    {
        id: 1,
        nombre: 'Irok Mercury 68 Contour Lines - Magnetic Switch',
        precio: 99999.00,
        stock: 3,
        imagen: '../assets/teclado.png',
        categoria: 'Teclados',
        disponible: true,
        cantidad: 3
      },

      {
        id: 2,
        nombre: 'Irok Mercury68 Pro',
        precio: 118000.00,
        stock: 2,
        imagen: '../assets/teclado-rojo.png',
        categoria: 'Teclados',
        disponible: true,
        cantidad: 4
      },

      {
        id: 3,
        nombre: 'Irok MG63',
        precio: 209999.00,
        stock: 0,
        imagen: '../assets/teclado-morado.png',
        categoria: 'Teclados',
        disponible: true,
        cantidad: 1
      },

      {
        id: 4,
        nombre: 'Mchose K7 Ultra',
        precio: 164999.00,
        stock: 2,
        imagen: '../assets/mouse.png',
        categoria: 'Mouse',
        disponible: true,
        cantidad: 2
      },

      {
        id: 5,
        nombre: 'Mchose M7',
        precio: 97999.00,
        stock: 1,
        imagen: '../assets/mouse2.png',
        categoria: 'Mouse',
        disponible: true,
        cantidad: 2
      },

      {
        id: 6,
        nombre: 'EspTiger Pioneer Tang Dao Gaming',
        precio: 99999.00,
        stock: 1,
        imagen: '../assets/mousepad.png',
        categoria: 'Mousepads',
        disponible: true,
        cantidad: 3
      },

      {
        id: 7,
        nombre: '8BitDo Ultimate 2C Wireless',
        precio: 84799.00,
        stock: 1,
        imagen: '../assets/joystick.png',
        categoria: 'Joysticks',
        disponible: true,
        cantidad: 1
      },
  ]
    
    agregarAlCarrito(producto: Producto) {
      this.carritoService.agregarProducto(producto);
    }

    agregarAFavoritos(producto: Producto) {
      this.favoritosService.agregarFavorito(producto);
    }

  }
