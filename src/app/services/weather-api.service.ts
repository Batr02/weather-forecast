import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http'
import { timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  public API_WEATHER = 'http://api.weatherapi.com/v1/current.json';
  public API_KEY = '43de269878484f7eb03102311232006';
  public API_CITY = '';

  constructor(private http: HttpClient) { }

  getWeather():Observable<any> {
    return timer(2000).pipe(
      mergeMap(() => this.http.get(this.API_WEATHER , {
        params: new HttpParams()
        .set('key', this.API_KEY)
        .set('q', this.API_CITY)
      }))
    );
  }
}
