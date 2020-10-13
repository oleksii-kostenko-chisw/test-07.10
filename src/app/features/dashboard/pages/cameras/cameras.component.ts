import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { delay, pluck, repeat, takeUntil } from 'rxjs/operators';
import {
  CameraItem,
} from '../../models/cameras-response.interface';
import { CamerasService } from './cameras.service';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss'],
})
export class CamerasComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<void> = new Subject();
  public camerasData$: Observable<CameraItem[]>;
  public camerasCount$: Observable<number>;

  constructor(private _camerasService: CamerasService) {}

  ngOnInit(): void {
    this._camerasService
      .getCamerasData(18)
      .pipe(takeUntil(this._destroy$), delay(500), repeat())
      .subscribe();

    this.camerasData$ = this._camerasService.camerasData$.pipe(
      pluck('cameras')
    );
    this.camerasCount$ = this._camerasService.camerasData$.pipe(
      pluck('count')
    );
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
