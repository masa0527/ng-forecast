export declare namespace OpenWeatherMap {
  export interface Coord {
    lon: number;
    lat: number;
  }

  export interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    cod: string;
    message: number;
    cnt: number;
    list: List[];
  }

  export interface List {
    dt: number;
    main: Main;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    sys: Pod;
    dt_txt: string;
  }

  export interface Pod {
    pod: string;
  }

  export interface Temp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  }

  export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }

  export interface Main {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  }

  export interface Wind {
    speed: number;
    deg: number;
  }

  export interface Clouds {
    all: number;
  }

  export interface DailyWeather {
    dt: number;
    temp: Temp;
    pressure: number;
    humidity: number;
    weather: Weather[];
    speed: number;
    deg: number;
    clouds: number;
    rain: number;
  }

  export interface Sys {
    type: number;
    id: number;
    message: number;
    country: number;
    sunset: number;
  }

  export interface Forecast {
    city: City;
    cod: string;
    message: number;
    cnt: number;
    list: DailyWeather[];
  }

  export interface Current {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    id: number;
    name: string;
    cod: number;
  }

  export interface Forecast5day {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    cod: string;
    message: number;
    cnt: number;
    list: List[];
  }
}
