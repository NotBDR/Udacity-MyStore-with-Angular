export class Cart {
  name: string;
  price: number;
  url: string;
  amount: number;

  constructor() {
    this.name = ' ';
    this.price = 0;
    this.url = '';
    this.amount = 1;
  }
}
