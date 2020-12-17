import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpaceServiceService {

  constructor(
    private http: HttpClient
  ) { }

  headers = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
 
  serviceForSpaceLaunchProgram(): Observable<any>{
    console.log('triggered');
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100',this.headers);
  }
  

}
