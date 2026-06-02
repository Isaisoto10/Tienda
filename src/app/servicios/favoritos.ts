import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  /* crea un array vacio para guardar los productos favoritos */
  favoritos: any[] = [];

  agregarFavorito(producto: any){
     /* find busca si el producto ya esta en favoritos, si no esta lo agrega al array */
      const existe = this.favoritos.find((p) => p.id === producto.id);
      /* el !existe "Si NO existe" entonces lo agrega al array de favoritos */
      if (!existe) {
        this.favoritos.push(producto);
      }
  }

  obtenerFavoritos(){
    /* devuelve el array de favoritos */
    return this.favoritos;
  }

  eliminarFavorito(id: number){
    this.favoritos = this.favoritos.filter((p) => p.id !== id);
  }
  
  
  




}
