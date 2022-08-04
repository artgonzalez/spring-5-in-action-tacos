import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Ingredient } from '../domain/ingredient'
import { Taco } from '../domain/taco'

@Injectable()
export class ApiService {
	
  apiURL = "http://localhost:8080/api"

  constructor(private httpClient: HttpClient) {}
  
  getIngredients(){
      return this.httpClient.get<Ingredient[]>(this.apiURL + '/ingredients');
  }
  
  saveTacoDesigns(taco: Taco){
		
  }  
}
