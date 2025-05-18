export class Crypto {
  id: string;
  name: string;
  symbol: string;
  priceUsd: number;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.symbol = data.symbol;
    this.priceUsd = parseFloat(data.price_usd);
  }

  getFormattedPrice(): string {
    return `$${this.priceUsd.toFixed(2)}`;
  }
}