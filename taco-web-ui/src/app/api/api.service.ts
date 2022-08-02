import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from '../domain/ingredient'

@Injectable()
export class ApiService {

  constructor(private httpClient: HttpClient) {}
  
  getIngredients(){
      return this.httpClient.get<Ingredient[]>('http://localhost:8080/api/ingredients');
  }  
}
