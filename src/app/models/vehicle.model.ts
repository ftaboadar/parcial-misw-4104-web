export class Vehicle {
  id: number;
  marca: string;
  linea: string;
  modelo: string;
  color: string;
  anio: number;
  kilometraje: number;
  precio: number;
  imagen: string;

  constructor(data: any) {
    this.id = data.id;
    this.marca = data.marca;
    this.linea = data.linea;
    this.modelo = data.modelo;
    this.color = data.color;
    this.anio = data.modelo; // Cuidado: el JSON usa "modelo" como año
    this.kilometraje = data.kilometraje;
    this.precio = data.precio;
    this.imagen = data.imagen;
  }
}
