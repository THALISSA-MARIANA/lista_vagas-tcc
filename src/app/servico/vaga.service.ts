import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 export interface Vaga{
  id: string;
  vagas: string;
 }

@Injectable({
  providedIn: 'root'
})
export class VagaService {
  private url ='http://localhost/php/api/app.php/vagas';
  constructor( private http :HttpClient) { }

  getAll(){
    return this.http.get<[Vaga]>(this.url);
  }
}
