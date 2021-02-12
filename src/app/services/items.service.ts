import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})




export class ItemsService {


  constructor(private http : HttpClient) { }


  buscarItem(termino: string) {
    return this.http.get(`http://localhost:8081/api/items?q=${termino}`);
  }

  getItem(id: string) {
    return this.http.get(`http://localhost:8081/api/items/${id}`);
  }

  getBreadcrumb(id: string) {
    return this.http.get(`https://api.mercadolibre.com/categories/${id}`);
  }


}

