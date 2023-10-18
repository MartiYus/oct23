export class Order {
     ticker: string | null;
     qty: number | null;
     price: number | null;
     side: string | null;

     constructor(ticker: string, qty: number, price: number, side: string){
        this.ticker = ticker;
        this.qty = qty;
        this.price = price;
        this.side = side;
    }

    //  constructor(init?: Partial<Order>) {
    //     Object.assign(this, init);
    // }
}
