import { Component, Input, OnInit } from '@angular/core';
import { CameraItem } from "src/app/features/dashboard/models/cameras-response.interface";

@Component({
  selector: 'app-camera-item',
  templateUrl: './camera-item.component.html',
  styleUrls: ['./camera-item.component.scss']
})
export class CameraItemComponent implements OnInit {
  @Input() cameraData: CameraItem;

  constructor() { }

  ngOnInit(): void {
  }

}
