export class Order {
    ticker: string;
    qty: number;
    price: number;
    side: string;

   constructor(ticker: string, qty: number, price: number, side: string){
       this.ticker = ticker;
       this.qty = qty;
       this.price = price;
       this.side = side;
   }
}
