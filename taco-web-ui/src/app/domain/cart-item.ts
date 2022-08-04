import{ Taco } from './taco'

export class CartItem {
  quantity = 1;

  taco: Taco;

  constructor(taco: Taco) {
    this.taco = taco;
  }

  get lineTotal() {
    return this.quantity * 4.99;
  }	
}
