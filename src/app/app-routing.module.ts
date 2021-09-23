import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'vehicle',
    component: VehiclesComponent,
    data: { title: 'Vehicles' }
  },
  {
    path: 'vehicle/add',
    component: VehicleComponent,
    data: { title: 'New Vehicle' }
  },
  {
    path: 'vehicle/edit/:id',
    component: VehicleComponent,
    data: { title: 'Edit Vehicle' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
