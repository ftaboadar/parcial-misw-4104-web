import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgIf, NgFor, KeyValuePipe } from '@angular/common';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-vehicle-list',
  imports: [CommonModule, NgIf, NgFor, KeyValuePipe],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent {
  vehicles: Vehicle[] = [];
  selectedVehicle: Vehicle | null = null;
  marcaTotals: { [marca: string]: number } = {};

  private apiUrl = 'https://gist.githubusercontent.com/josejbocanegra/17bb8c76405e43655d551a90800c8a81/raw/d41b4acc3457e51e7533fad6d5e9925ee9676457/202212_MISW4104_Grupo1.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.vehicles = data.map(item => new Vehicle(item));
      this.calculateTotals();
    });
  }

  onSelect(vehicle: Vehicle) {
    this.selectedVehicle = vehicle;
  }

  private calculateTotals() {
    this.marcaTotals = {};
    for (let vehicle of this.vehicles) {
      this.marcaTotals[vehicle.marca] = (this.marcaTotals[vehicle.marca] || 0) + 1;
    }
  }

}
