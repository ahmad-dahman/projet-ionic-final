import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appareil } from '../model/appareil';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppareilsService {
  // API path
  base_path = 'http://localhost:3000/appareils';

  constructor(private http: HttpClient) { }

  // http Options
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST'
    })
    }

    // Create a new item
    createAppareil(item): Observable<Appareil> {
      return this.http.post<Appareil>(this.base_path, JSON.stringify(item), this.httpOptions)
    }

    // Get single appareil data by Name
    getAppareil(id): Observable<Appareil> {
      return this.http.get<Appareil>(this.base_path + '/' + id , this.httpOptions)
    }

    // Get appareils data
    getAppareils(): Observable<Appareil> {
      return this. http.get<Appareil>(this.base_path)
    }

    // Update item by id
    updateAppareil(id, item): Observable<Appareil> {
      return this. http.put<Appareil>(this.base_path + '/' + id, JSON.stringify(item),this.httpOptions)
    }

    // Delete item by id
    deleteAppareil(id) {
      return this. http.delete<Appareil>(this. base_path + '/' + id, this.httpOptions)
      }
}
  
  

