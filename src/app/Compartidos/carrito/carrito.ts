import { Component } from '@angular/core';
import { CarritoService } from '../../servicios/carrito';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})

export class CarritoComponent {

  carrito: any[] = [];

  constructor(private carritoService: CarritoService) {}
  

  
  ngOnInit() {
    this.carrito = this.carritoService.obtenerCarrito();
    /* CALCULO DEL TOTAL */
    this.carrito = this.carritoService.obtenerCarrito(); /* obtener el carrito del servicio */
    this.calcularTotal(); /* calcular el total del carrito */
  }

  /* CALCULO */
  calcularTotal(){
    this.total = 0; 
    /* ForEach para recorrer el carrito y sumar el precio de cada producto multiplicado por su cantidad al total */
    this.carrito.forEach(producto =>{
      this.total +=
      producto.precio *  producto.cantidad; /* multiplicar el precio del producto por la cantidad y sumarlo al total */
    })
  }
  
  eliminarProducto(id: number){
    this.carritoService.eliminarProducto(id); /* eliminar el producto del carrito */
    this.carrito = this.carritoService.obtenerCarrito(); /* actualizar el carrito después de eliminar el producto */

    this.calcularTotal(); /* calcular el total del carrito después de eliminar el producto */
  }

  aumentarCantidad(id: number){
    this.carritoService.aumentarCantidad(id); /* aumentar la cantidad del producto en el carrito */

    this.calcularTotal(); /* calcular el total del carrito después de aumentar la cantidad */
  }

  disminuirCantidad(id: number){
    this.carritoService.dismuniurCantidad(id); /* disminuir la cantidad del producto en el carrito */

    this.calcularTotal(); /* calcular el total del carrito después de disminuir la cantidad */
  }

  total: number = 0; /* guarda el total del carrito */


  
}