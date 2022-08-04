import { CartItem } from '../domain/cart-item';
import { Taco } from '../domain/taco'

export class CartService {

  items$: CartItem[] = [];

  constructor() {
    this.items$ = [];
  }

  addToCart(taco: Taco) {
    this.items$.push(new CartItem(taco));
  }

  getItemsInCart() {
    return this.items$;
  }

  getCartTotal() {
    let total = 0;
    this.items$.forEach(item => {
      total += item.lineTotal;
    });
    return total;
  }

  emptyCart() {
    this.items$ = [];
  }

}