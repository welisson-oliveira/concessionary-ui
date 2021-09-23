import { Vehicle } from './../model/vehicle.model';
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../service/vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  displayedColumns: string[] = ['vehicle', 'brand', 'year', 'description', 'sold', 'created', 'updated', 'edit'];
  dataSource = [];
  notSold: number = 0;
  perDecade: Map<number, Array<Vehicle>>;
  byManufacturer: Map<string, Array<Vehicle>>;
  lastWeek: Array<Vehicle>

  constructor(private service: VehicleService) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.dataSource = response;
    });

    this.service.getNotSoldSize().subscribe(response => {
      this.notSold = response;
    });

    this.service.getPerDecade().subscribe(response => {
      this.perDecade = response;
    });

    this.service.getByManufacturers().subscribe(response => {
      this.byManufacturer = response;
    });

    this.service.getLastWeek().subscribe(response => {
      this.lastWeek = response;
    });
  }

  remove(id: number){
    this.service.remove(id).subscribe(() => {});
    this.ngOnInit();
  }

  sell(id: number){
    this.service.sell(id).subscribe(() => {});
    this.ngOnInit();
  }

}
