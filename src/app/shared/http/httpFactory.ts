import { LoaderService } from './../loader/loader.service';
import { HttpService } from "app/shared/http/http.service";
import { XHRBackend, RequestOptions, Http } from "@angular/http";



export function HttpFactory(xhrBackend: XHRBackend, 
                            requestOptions: RequestOptions,
                            loaderService: LoaderService): Http {
    return new HttpService(xhrBackend, requestOptions, loaderService);
}