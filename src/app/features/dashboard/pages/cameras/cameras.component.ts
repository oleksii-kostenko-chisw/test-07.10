import { Component, OnInit } from '@angular/core';
import { delay, repeat, switchMap } from 'rxjs/operators';
import {
  CameraItem,
  CamerasResponse,
} from '../../models/cameras-response.interface';
import { CamerasService } from './cameras.service';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss'],
})
export class CamerasComponent implements OnInit {
  public camerasData: CameraItem[];
  public camerasCount: number;

  constructor(private _camerasService: CamerasService) {}

  ngOnInit(): void {
    this._camerasService
      .getCamerasData(20)
      .pipe(delay(500), repeat())
      .subscribe((resp: CamerasResponse) => {
        this.camerasData = resp.cameras;
        this.camerasCount = resp.count;
      });
  }
}
