import { ErrorService } from './shared/utils/error.service';
import { NotificationService } from './shared/utils/notification.service';
import { UrlService } from './shared/http/url.service';
import { LoaderService } from './shared/loader/loader.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HttpService } from 'app/shared/http/http.service';
import { XHRBackend, RequestOptions } from '@angular/http';
import { HttpFactory } from 'app/shared/http/httpFactory';
import { BlockUIService } from 'ng-block-ui';

@Injectable()
export class DataResolver implements Resolve<any> {
  constructor() {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return Observable.of({ res: 'I am data'});
  }
}

// an array of services to resolve routes with data
export const APP_RESOLVER_PROVIDERS = [
  DataResolver,
  BlockUIService,
  LoaderService,
  UrlService,
  NotificationService, 
  ErrorService,
  {
    provide: HttpService,
    useFactory: HttpFactory,
    deps: [XHRBackend, RequestOptions, LoaderService]
  }
];
