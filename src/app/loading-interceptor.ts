import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { LoadingService } from './services/loading.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(
    private  loadingService: LoadingService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    this.loadingService.start();
    return next.handle(request)
      .finally(() => {
        this.loadingService.stop();
      });

  }
}
