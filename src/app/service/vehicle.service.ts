import { environment } from './../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Vehicle } from "../model/vehicle.model";

@Injectable({
    providedIn: 'root'
})
export class VehicleService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<Vehicle[]> {
        return this.http.get<Vehicle[]>(`${environment.BASE_URL}/vehicle`);
    }

    save(vehicle: Vehicle): Observable<Vehicle> {
        return this.http.post<Vehicle>(`${environment.BASE_URL}/vehicle`, vehicle);
    }

    findById(id: number) {
        return this.http.get<Vehicle>(`${environment.BASE_URL}/vehicle/${id}`);
    }

    remove(id: number) {
        return this.http.delete(`${environment.BASE_URL}/vehicle/${id}`);
    }

    sell(id: number) {
        return this.http.patch(`${environment.BASE_URL}/vehicle/${id}`, null);
    }

    getNotSoldSize():Observable<number> {
        return this.http.get<number>(`${environment.BASE_URL}/vehicle/not-sold`);
    }

    getPerDecade():Observable<Map<number, Array<Vehicle>>> {
        return this.http.get<Map<number, Array<Vehicle>>>(`${environment.BASE_URL}/vehicle/per-decade`);
    }

    getByManufacturers():Observable<Map<string, Array<Vehicle>>> {
        return this.http.get<Map<string, Array<Vehicle>>>(`${environment.BASE_URL}/vehicle/by-manufacturer`);
    }

    getLastWeek():Observable<Array<Vehicle>> {
        return this.http.get<Array<Vehicle>>(`${environment.BASE_URL}/vehicle/last-week`);
    }
}