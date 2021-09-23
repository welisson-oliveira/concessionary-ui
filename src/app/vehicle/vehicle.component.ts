import { Vehicle } from './../model/vehicle.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VehicleService } from '../service/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  formClient: FormGroup;
  vehicle: Vehicle;

  constructor(private formBuilder: FormBuilder,
    private service: VehicleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
       if(params['id']){
         this.service.findById(params['id']).subscribe(vehicle => {
           this.vehicle = vehicle;
           this.createForm(this.vehicle);
          });
       } else {
         this.createForm(this.vehicle);
       } 
    });
  }

  createForm(vehicle: Vehicle) {
    this.formClient = this.formBuilder.group({
      id: [vehicle ? vehicle.id : null],
      name: [vehicle ? vehicle.name : ''],
      brand: [vehicle ? vehicle.brand : ''],
      year: [vehicle ? vehicle.year : ''],
      description: [vehicle ? vehicle.description : ''],
      sold: [{value: vehicle ? vehicle.sold : false, disabled: vehicle && vehicle.sold}],
      created: [{value: vehicle ? vehicle.created : '', disabled: true}],
      updated: [{value: vehicle ? vehicle.updated : '', disabled: true}]
    })
  }

  submit(){
    if(this.formClient.valid) {
      const vehicle = this.formClient.getRawValue() as Vehicle;
      this.service.save(vehicle).subscribe(response => {
        console.log(response);
        this.router.navigate(['/vehicle']);
      });
    }
  }

}
