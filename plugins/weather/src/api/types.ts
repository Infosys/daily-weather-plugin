
export interface ErrorResponse {
  success: boolean;
  error: {
    code: number;
    type: string;
    info: string;
  };
}


export interface WeatherRequest {
  type: string;
  query: string;
  language: string;
  unit: string;
}

export interface WeatherLocation {
  name: string;
  country: string;
  region: string;
  lat: string;
  lon: string;
  timezone_id: string;
  localtime: string;
  localtime_epoch: number;
  utc_offset: string;
}

export interface WeatherCurrent {
  observation_time: string;
  temperature: number;
  weather_code: number;
  weather_icons: string[];
  weather_descriptions: string[];
  astro: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: string;
  };
  air_quality: {
    co: string;
    no2: string;
    o3: string;
    so2: string;
    pm2_5: string;
    pm10: string;
    "us-epa-index": string;
    "gb-defra-index": string;
  };
  wind_speed: number;
  wind_degree: number;
  wind_dir: string;
  pressure: number;
  precip: number;
  humidity: number;
  cloudcover: number;
  feelslike: number;
  uv_index: number;
  visibility: number;
  is_day: string;
}

export interface WeatherResponse {
  request: WeatherRequest;
  location: WeatherLocation;
  current: WeatherCurrent;
  success?: boolean;
  error?: {
    code: number;
    type: string;
    info: string;
  };
}
