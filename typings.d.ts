interface Current {
  temperature_2m: number;
  time: string;
  weather_code: number;
  wind_direction_10m: number;
  wind_speed_10m: number;
}

interface Daily {
  apparent_temperature_max: [number];
  apparent_temperature_min: [number];
  sunrise: [string];
  sunset: [string];
  temperature_2m_max: [number];
  temperature_2m_min: [number];
  time: [string];
  uv_index_clear_sky_max: [number];
  uv_index_max: [number];
  weather_code: [number];
}

interface DailyUnits {
  apparent_temperature_max: String;
  apparent_temperature_min: String;
  sunrise: String;
  sunset: String;
  temperature_2m_max: String;
  temperature_2m_min: String;
  time: String;
  uv_index_clear_sky_max: String;
  uv_index_max: String;
  weather_code: String;
}

interface Hourly {
  apparent_temperature: [number];
  precipitation: [number];
  precipitation_probability: [number];
  rain: [number];
  relative_humidity_2m: [number];
  showers: [number];
  snow_depth: [number];
  snowfall: [Int];
  temperature_2m: [number];
  time: [number];
  uv_index: [number];
  uv_index_clear_sky: [number];
  weather_code: [number];
  wind_gusts_10m: [number];
}

interface HourlyUnits {
  apparent_temperature: String;
  precipitation: String;
  precipitation_probability: String;
  rain: string;
  relative_humidity_2m: String;
  showers: String;
  snow_depth: String;
  snowfall: String;
  temperature_2m: String;
  time: String;
  uv_index: String;
  uv_index_clear_sky: String;
  wind_gusts_10m: String;
}

interface Root {
  current: Current;
  daily: Daily;
  daily_units: DailyUnits;
  elevation: number;
  generationtime_ms: number;
  hourly: Hourly;
  hourly_units: HourlyUnits;
  latitude: number;
  longitude: number;
  timezone: String;
  timezone_abbreviation: String;
  utc_offset_seconds: number;
}
