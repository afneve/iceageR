// Radio buttons on Progress table
export type DisplayState = 'all' | 'completed' | 'uncompleted';

export type County = {
  countyId: number;
  countyName: string;
}

export type LocationData = {
  segment_id: string;
  segment: string;
  westLat: string;
  westLong: string;
  eastLat: string;
  eastLong: string;
  west_gps_id: string;
  east_gps_id: string;
}