import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})

export class CarritoService {

  carrito: Producto[] = [];

  agregarProducto(producto: Producto) {
  /* find busca un producto*/
  const productoExistente =
  this.carrito.find(p => p.id === producto.id); /* buscar un producto con el mismo ID */

  if(productoExistente){

    productoExistente.cantidad = (productoExistente.cantidad || 1) + 1; /* si cantidad es undefined, se asigna 1, luego se suma 1 */

  } else {
   
    this.carrito.push({
      ...producto,
      cantidad: 1
    });

  }

}

  obtenerCarrito() {
    return this.carrito;
  }
  
  eliminarProducto(id: number) {
    /* filtrer crea un array */
    this.carrito = this.carrito.filter(producto => producto.id !== id);
  }
  
  aumentarCantidad(id: number){

  const producto =
  this.carrito.find(p => p.id === id);

  if(producto){

    producto.cantidad++;

  }

}


dismuniurCantidad(id: number){
  const producto = this.carrito.find(p => p.id === id);
  
  if(producto){
    producto.cantidad--

    /* si la cantidad es menor o igual a 0, se elimina el producto del carrito */
    if(producto.cantidad <= 0){
      this.eliminarProducto(id);
    }    
  }

}


}