/**
 * @summary Api service
 */
import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Toast, ToasterService} from 'angular2-toaster';
import {catchError} from 'rxjs/internal/operators';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    url = environment.host;

    /**
     * @summary ApiService constructor
     * @param http - HttpClient service
     * @param toaster - Toaster service
     */
    constructor(private http: HttpClient,
                private toaster: ToasterService) {
    }

    /**
     * @summary Get token
     */
    getToken() {
        const data = JSON.parse(localStorage.getItem('accessSettings'));
        return data ? data.token : '';
    }

    /**
     * @summary Set headers
     */
    setHeaders(): HttpHeaders {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': this.getToken()
        };
        return new HttpHeaders(headersConfig);
    }

    /**
     * @summary Edit format error
     */
    formatErrors(err: any) {
        const toast: Toast = {
            type: 'error',
            timeout: 10000
        };
        if (err && typeof err.error === 'string') {
            err.error = JSON.parse(err.error);
        }
        toast.title = err.error.message;
        this.toaster.pop(toast);
        return throwError(err);
    }

    /**
     * @summary Convert query params
     */
    convertQueryParams(params: any) {
        if (params) {
            let query = new HttpParams();
            Object.keys(params).forEach((key) => {
                if (params[key] && !Array.isArray(params[key])) {
                    query = query.append(key, params[key]);
                }
                if (params[key] && Array.isArray(params[key])) {
                    for (const elem of params[key]) {
                        query = query.append(key, elem);
                    }
                }
            });
            return query;
        } else {
            return params;
        }
    }

    get(path: string, params?: any, responseType: any = 'json', observe?: any): Observable<any> {
        params = this.convertQueryParams(params);
        return this.http.get(`${this.url}${path}`,
            {headers: this.setHeaders(), params, responseType: responseType, observe: observe})
            .pipe(catchError((error) => this.formatErrors(error)));
    }

    put(path: string, body: Object = {}, params?: any, responseType: any = 'json', observe?: any): Observable<any> {
        params = this.convertQueryParams(params);
        return this.http.put(`${this.url}${path}`,
            JSON.stringify(body), {headers: this.setHeaders(), responseType: responseType, params, observe: observe})
            .pipe(catchError((error) => this.formatErrors(error)));
    }

    post(path: string, body: Object = {}, params?: any, responseType: any = 'json', observe?: any): Observable<any> {
        params = this.convertQueryParams(params);
        return this.http.post(`${this.url}${path}`,
            body, {headers: this.setHeaders(), responseType: responseType, params, observe: observe})
            .pipe(catchError((error) => this.formatErrors(error)));
    }
}
