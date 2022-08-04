import { Component, OnInit, ViewChildren, QueryList, ElementRef, Input } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';
import { Ingredient } from '../domain/ingredient'
import {CartService } from '../service/cart.service'

@Component({
  selector: 'design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})

export class DesignComponent implements OnInit {
	
   model = {
    name: '',
    ingredients:  new Array<Ingredient>()
  };

  allIngredients!: Ingredient[];
  wraps!: Ingredient[];
  proteins!: Ingredient[];
  veggies!: Ingredient[];
  cheeses!: Ingredient[];
  sauces!: Ingredient[];		
	
  constructor(private httpClient: ApiService, private router: Router, private cart: CartService) { }

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
  onSubmit(frm: NgForm) {
	this.cart.addToCart(this.model)
	/*this.httpClient.post(
        'http://localhost:8080/design',
        this.model, {
            headers: new HttpHeaders().set('Content-type', 'application/json'),
        }).subscribe(taco => this.cart.addToCart(taco));*/
    frm.reset()
    //this.router.navigate(['/cart']);
  }

   @ViewChildren("checkboxes") checkboxes!: QueryList<ElementRef>;	
  
  uncheckAll() {
	this.checkboxes.forEach((element) => {
	  element.nativeElement.checked = false;
	});
  }  
}


