export class CamerasResponse {
  cameras: CameraItem[];
  count: number;

  constructor(cameras?: CameraItem[]) {
    if (cameras && cameras?.length) {
      this.cameras = cameras;
    } else {
      this.cameras = [];
    }
    this.count = this.cameras.length;
  }
}

export interface CameraItem {
  id: number;
  imageUrl: string;
  passed: boolean;
}
