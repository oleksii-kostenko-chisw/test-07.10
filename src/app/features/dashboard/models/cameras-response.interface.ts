export interface CamerasResponse {
  cameras: CameraItem[];
  count: number;
}

export interface CameraItem {
  id: number;
  imageUrl: string;
  passed: boolean;
}
