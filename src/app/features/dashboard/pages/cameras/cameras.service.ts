import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CamerasResponse } from '../../models/cameras-response.interface';

@Injectable({
  providedIn: 'root',
})
export class CamerasService {
  constructor(private _http: HttpClient) {}

  public getCamerasData(count: number): Observable<CamerasResponse> {
    const params = new HttpParams().append('count', count.toString());
    return this._http.get<CamerasResponse>('/api/cameras', { params });
  }
}
