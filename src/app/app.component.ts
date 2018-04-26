import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';
import { Observable } from 'rxjs/Observable';
import { Area } from './shared/models/area';
import { AreaService } from './services/area.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'ng-forecast';
  public loadingObservable: Observable<boolean>;
  public areaObservable: Observable<Area[]>;

  constructor(
    public loadingService: LoadingService,
    public areaService: AreaService) {
  }

  ngOnInit() {
    this.loadingObservable = this.loadingService.loading;
    this.areaObservable = this.areaService.getList();
  }
}
