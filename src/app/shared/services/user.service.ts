import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api';

/**
 * @summary Users service
 */
@Injectable()
export class UserService {

    /**
     * @summary User service constructor
     */
    constructor(private http: HttpClient,
                private apiService: ApiService) {
    }

    /**
     * @summary Get users list
     */
    getData(): Observable<any> {
        return this.http.get('../../assets/data/users.json');
    }

    /**
     * @summary Get users list from server
     */
    getUsers(): Observable<any> {
        return this.apiService.get('/users.json');
    }
}
