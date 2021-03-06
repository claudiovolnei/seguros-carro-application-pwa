import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seguro } from '../models/Seguro';

@Injectable({
  providedIn: 'root'
})
export class SeguroService {

  private API_SEGUROS = 'http://localhost:9000';

  constructor(
    private http: HttpClient
  ) { }

  cadastrar(seguro: Seguro) {
    this.http.post(`${this.API_SEGUROS}/api/seguros`, seguro)
      .subscribe(
        () => alert('Seguro foi cadastrado!'),
        err => alert('Erro ao cadastrar o seguro' + err)
      );
  }
}
