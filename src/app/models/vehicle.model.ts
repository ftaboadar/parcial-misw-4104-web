export class Vehicle {
    id: number;
    marca: string;
    linea: string;
    modelo: string;
    año: number;
    kilometraje: number;
    precio: number;
  
    constructor(id: number, marca: string, linea: string, modelo: string, año: number, kilometraje: number, precio: number) {
      this.id = id;
      this.marca = marca;
      this.linea = linea;
      this.modelo = modelo;
      this.año = año;
      this.kilometraje = kilometraje;
      this.precio = precio;
    }
  }
  