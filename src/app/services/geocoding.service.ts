import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Geocode} from "../classes/geocode/geocode.Class";

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  private apiUrl = 'http://api.openweathermap.org/geo/1.0/direct'
  private apiKey = environment.apiKey
  private requestLimit = 5

  constructor(
    private http: HttpClient
  ) {
  }

  getGeocoding(q: string): Observable<Array<Geocode>> {
    const params = new HttpParams().set('q', q).set('limit', this.requestLimit).set('appid', this.apiKey)

    return this.http.get<Array<Geocode>>(`${this.apiUrl}`, {
      params,
    }).pipe(
      catchError(this.handleError.bind(this))
    )
  }

  public handleError(err: HttpErrorResponse, caught: Observable<any>): Observable<any> {
    return throwError(err);
  }
}
