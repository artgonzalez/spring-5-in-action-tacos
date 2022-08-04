import { Component, OnInit, Injectable } from '@angular/core';
import { CartService } from '../service/cart.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Taco } from '../domain/taco'
import { CartItem } from '../domain/cart-item';

@Component({
  selector: 'taco-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['./cart.component.css']
})

@Injectable()
export class CartComponent implements OnInit {

  model = {
    deliveryName: '',
    deliveryStreet: '',
    deliveryState: '',
    deliveryZip: '',
    ccNumber: '',
    ccExpiration: '',
    ccCVV: '',
    tacos: new Array<Taco>()
  };

  constructor(private cartService: CartService, private httpClient: HttpClient) {
    this.cartService = cartService;
  }

  ngOnInit() {}

  get cartItems() {
    return this.cartService.getItemsInCart();
  }

  get cartTotal() {
    return this.cartService.getCartTotal();
  }

  onSubmit() {
    // this.model.tacos = this.cart.getItemsInCart();
    this.cartService.getItemsInCart().forEach(cartItem => {
      this.model.tacos.push(cartItem.taco);
    });

    this.httpClient.post(
        'http://localhost:8080/orders',
        this.model, {
            headers: new HttpHeaders().set('Content-type', 'application/json')
                    .set('Accept', 'application/json'),
        }).subscribe(r => this.cartService.emptyCart());

    // TODO: Do something after this...navigate to a thank you page or something
  }

}