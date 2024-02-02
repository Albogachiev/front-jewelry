
export interface TypeCategori {
    categori:string[];
    selectCategori:string
}
export enum Status {
	SUCCESS = 'SUCCESS',
	Error = 'ERROR',
    Loading= 'LOADING'
}
export type TypeItems = {
    items:Item[],
    searchValue:string,
    status:Status
}
export type Item = {
    id:number;
    title:string;
    name:string;
    price:number;
    img:string[];
}
export interface TypeBusket {
    busketData:favoriteTypes[],
    isLoading:Status,
    summBasket:number
}

export type favoriteTypes = Item & {
    itemsId: number;
  };