import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { KEY } from '../shared/Key';
import { OpenWeatherMap } from '../shared/models/open-weather-map';

@Injectable()
export class OpenWeatherMapService {
  private API = '//api.openweathermap.org/data/2.5/';
  private API_ID = KEY;

  constructor(public http: HttpClient) {
  }

  /**
   * 現在の天気を取得
   * @param {string} city
   * @returns {Observable<OpenWeatherMap.Current>}
   */
  current(city: string): Observable<OpenWeatherMap.Current> {
    let params: HttpParams = new HttpParams();
    const data = {
      appid: this.API_ID,
      units: 'metric',
      lang: 'jp',
      q: city
    };
    Object.keys(data).forEach((key) => {
      params = params.set(key, data[key]);
    });
    return this.http.get<OpenWeatherMap.Current>(`${this.API}/weather`, {params});
  }

  /**
   * 5日間の天気取得
   * @param {string} city
   * @returns {Observable<OpenWeatherMap.Forecast5day>}
   */
  forecast(city: string): Observable<OpenWeatherMap.Forecast5day> {
    let params: HttpParams = new HttpParams();
    const data = {
      appid: this.API_ID,
      units: 'metric',
      lang: 'jp',
      q: city
    };
    Object.keys(data).forEach((key) => {
      params = params.append(key, data[key]);
    });
    return this.http.get<OpenWeatherMap.Forecast5day>(`${this.API}/forecast`, {params});
  }
}
