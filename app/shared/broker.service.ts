// angular imports
import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

// RxJS imports
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class BrokerService {

    private apiUrl = "http://localhost:60590/api/brokers";

    constructor(private http: Http) { }

    public getAllBrokers(): Observable<Array<any>> {
        return this.http.get(this.apiUrl).map(res => res.json());
    }

    public getBroker(id: number): Observable<any> {
        return this.http.get(this.apiUrl + '/' + id).map(res => res.json());
    }

}