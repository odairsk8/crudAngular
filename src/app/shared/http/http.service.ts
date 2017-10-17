import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from "@angular/http";
import { LoaderService } from './../loader/loader.service';
import { Observable } from 'rxjs/Observable';


export class HttpService extends Http {

    constructor(backend: ConnectionBackend,
        defaultOptions: RequestOptions,
        private loaderService: LoaderService) {
        super(backend, defaultOptions);
    }

    get(url: string, options?: RequestOptionsArgs, bearerToken?: string): Observable<Response> {
        this.showLoader();
        return super.get(url, options).finally(() => {
            this.onEnd();
        });
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        this.showLoader();
        return super.post(url, body, options).finally(() => {
            this.onEnd();
        });
    }

    private onEnd(): void {
        this.hideLoader();
    }


    private showLoader(): void {
        this.loaderService.show();
    }

    private hideLoader(): void {
        this.loaderService.hide();
    }

}
