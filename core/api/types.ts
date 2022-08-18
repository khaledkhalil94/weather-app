export interface Cities {
  error: false;
  msg: string;
  data: string[];
}

export type CityCoordinates = Array<{
  country: string;
  lat: number;
  lon: number;
  name: string;
  state: string;
}>;
