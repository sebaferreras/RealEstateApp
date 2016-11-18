// angular imports
import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

// RxJS imports
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class PropertyService {

    private apiUrl = "http://localhost:60590/api/properties";

    constructor(private http: Http) { }

    public getAllProperties(): Observable<Array<any>> {
        return this.http.get(this.apiUrl).map(res => res.json());
    }

    public getProperty(id: number): Observable<any> {
        return this.http.get(this.apiUrl + '/' + id).map(res => res.json());
    }

}