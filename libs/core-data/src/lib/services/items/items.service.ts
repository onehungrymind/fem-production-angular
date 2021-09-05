import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '@fem/api-interfaces';


const API_ENDPOINT = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  model = 'items';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Item[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Item[]>(this.getUrlWithId(id));
  }

  create(widget: Item) {
    return this.http.post(this.getUrl(), widget);
  }

  update(widget: Item) {
    return this.http.put(this.getUrlWithId(widget.id), widget);
  }

  delete(widget: Item) {
    return this.http.delete(this.getUrlWithId(widget.id));
  }

  private getUrl() {
    return `${API_ENDPOINT}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
