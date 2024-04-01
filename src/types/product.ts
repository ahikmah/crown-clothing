export interface IItems {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
export interface IProduct {
  title: string;
  items: IItems[];
}
