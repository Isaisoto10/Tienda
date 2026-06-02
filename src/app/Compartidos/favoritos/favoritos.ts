import { Component } from '@angular/core';
import { FavoritosService } from '../../servicios/favoritos';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../servicios/carrito';

@Component({
  selector: 'app-favoritos',
  imports: [CommonModule],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})

export class FavoritosComponent {

  favoritos: any[] = [];

  constructor(
    private favoritoService: FavoritosService,
    private carritoService: CarritoService
  ) { }

  ngOnInit() {

    this.favoritos =
      this.favoritoService.obtenerFavoritos();

  }

  eliminarFavorito(id: number) {

    this.favoritoService.eliminarFavorito(id);

    this.favoritos =
      this.favoritoService.obtenerFavoritos();

  }

  ComprarProducto(producto: any) {

    this.carritoService.agregarProducto(producto);

  }

}