import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';

import { HttpService } from './../../shared/http/http.service';
import { UrlService } from './../../shared/http/url.service';
import { CustomerModel } from './customer.model';


@Injectable()
export class CustomerService {

    constructor(private urlService: UrlService,
        private httpService: HttpService) { }

    getAll() {
        const url = this.urlService.transformUrl('customer');
        return this.httpService.get(url).map(r => r.json());
    }

    getById(id: number) {
        const url = this.urlService.transformUrl('customer/') + id;
        return this.httpService.get(url).map(res => res.json());
    }

    save(customerModel: CustomerModel) {

        this.httpService.post('https://teds-d5fb8.firebaseio.com/data.json', JSON.stringify(customerModel))
        .subscribe(r => {
            console.log(r);
        });

        const url = this.urlService.transformUrl('customer/save');
        return this.httpService.post(
            url, 
            JSON.stringify(customerModel),
            new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) }))
                .map(res => res.json());
    }

    delete(id: number) {
        const url = this.urlService.transformUrl('customer/delete?id=') + id;
        return this.httpService.post(url, null).map(res => res.json());
    }

    VerifyNameIsInUse(name: string) {

        const url = this.urlService.transformUrl('customer/verifyNameIsInUse') + '?name=' + name;

        return this.httpService.get(url).map(r => (r.json() === true || r.json() === 'true') ? { 'nameIsInUse': true } : null);

    }

}