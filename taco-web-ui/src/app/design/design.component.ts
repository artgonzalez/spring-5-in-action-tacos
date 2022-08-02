import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';
import { Ingredient } from '../domain/ingredient'

@Component({
  selector: 'design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})

export class DesignComponent implements OnInit {
	
   model = {
    name: '',
    ingredients: [Ingredient]
  };

  allIngredients!: Ingredient[];
  wraps!: Ingredient[];
  proteins!: Ingredient[];
  veggies!: Ingredient[];
  cheeses!: Ingredient[];
  sauces!: Ingredient[];		
	
  constructor(private httpClient: ApiService) { }

  ngOnInit(): void {
	
	this.httpClient.getIngredients()
        .subscribe((data: any) => {
          this.allIngredients = data._embedded.ingredients as Ingredient[];
          
          this.wraps = this.allIngredients.filter(w => w.type === 'WRAP');
          this.proteins = this.allIngredients.filter(p => p.type === 'PROTEIN');
          this.veggies = this.allIngredients.filter(v => v.type === 'VEGGIES');
          this.cheeses = this.allIngredients.filter(c => c.type === 'CHEESE');
          this.sauces = this.allIngredients.filter(s => s.type === 'SAUCE');
        });
        
        	
  }

  updateIngredients(ingredient, event) {
	if (event.target.checked) {
      this.model.ingredients.push(ingredient);
    } else {
      this.model.ingredients.splice(this.model.ingredients.findIndex(i => i === ingredient), 1);
    }
  }

  // tag::onSubmit[]
  onSubmit() {
  }
}


