import { RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import { HttpService } from './../../shared/http/http.service';
import { environment } from './../../../environments/environment.prod';
import { UrlService } from './../../shared/http/url.service';
import { BagModel } from './bag.model';


@Injectable()
export class BagService {

    constructor(private urlService: UrlService,
        private httpService: HttpService) { }


    getAll() {
        const url = this.urlService.transformUrl('bag/');
        return this.httpService.get(url).map(r => r.json());
    }

    getById(id: number) {
        const url = this.urlService.transformUrl('bag/') + id;
        return this.httpService.get(url).map(res => res.json());
    }

    add(bagModel: BagModel) {

        const url = this.urlService.transformUrl('bag');

        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });

        return this.httpService.post(url, JSON.stringify(bagModel));

    }

    save(bagModel: BagModel) {
        const url = this.urlService.transformUrl('bag/save');
        return this.httpService.post(
            url, 
            JSON.stringify(bagModel),
            new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) }))
                .map(res => res.json());
    }

    delete(id: number) {
        const url = this.urlService.transformUrl('bag/delete?id=') + id;
        return this.httpService.post(url, null).map(res => res.json());
    }

    VerifyNameIsInUse(name: string) {

        const url = this.urlService.transformUrl('bag/verifyNameIsInUse') + '?name=' + name;

        return this.httpService.get(url).map(r => (r.json() === true || r.json() === 'true') ? { 'nameIsInUse': true } : null);

    }

}