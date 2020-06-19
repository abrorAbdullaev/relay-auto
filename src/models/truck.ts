export interface Truck {
  id: string
  name: string
}

export interface Trucks {
  [key: string]: Truck;
}
