import { Component, OnInit,  } from '@angular/core';
import { WeatherApiService } from '../services/weather-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit  {
  public weatherInfo!: any;
  public selectedCity!: string;
  public temperature_units = 'celsius';
  public error!: string;
  public loading = false;

  constructor(private weatherApi: WeatherApiService ) { }

  ngOnInit(): void {
    this.selectedCity = '0';
  }

  showWeather() {
    this.loading = true;
    this.weatherApi.API_CITY = this.selectedCity;
    
    this.weatherApi.getWeather().subscribe(response => {
      this.weatherInfo = response 
      this.loading = false;
    }, error => {
      this.error = error.message
    });
    
  }

}