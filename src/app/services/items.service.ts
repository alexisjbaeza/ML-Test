import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  constructor(private http: HttpClient) { }

  buscarItem(busqueda: string, por_categoria: boolean) {
    if (por_categoria) {
      return this.http.get(`http://localhost:4200/api/items?category=${busqueda}`);
    } else {
      return this.http.get(`http://localhost:4200/api/items?q=${busqueda}`);
    }
  }

  getItem(id: string) {
    return this.http.get(`http://localhost:4200/api/items/${id}`);
  }

  getBreadcrumb(id: string) {
    return this.http.get(`https://api.mercadolibre.com/categories/${id}`);
  }


}

