import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {

constructor() { }

transformUrl(path: string){
    return environment.apiBaseUrl + path;
}


}