import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
import {
  CameraItem,
  CamerasResponse,
} from '../../models/cameras-response.interface';

@Injectable({
  providedIn: 'root',
})
export class CamerasService {
  constructor(private _http: HttpClient) {}

  public camerasData$: BehaviorSubject<CamerasResponse> = new BehaviorSubject<
    CamerasResponse
  >(new CamerasResponse());

  public getCamerasData(count: number): Observable<CamerasResponse> {
    const params = new HttpParams().append('count', count.toString());
    return this._http
      .get<CamerasResponse>('/api/cameras', { params })
      .pipe(
        tap((response: CamerasResponse) => this.camerasData$.next(response))
      );
  }
}
