import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';
import {User} from '../interfaces/user';
import {forEach} from '@angular/router/src/utils/collection';

/**
 * @summary Users service
 */
@Injectable()
export class UserService {
    usersSubject = new Subject();
    users: User [];

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
    getUsers() {
        return this.apiService.get('/users.json');
    }

    /**
     * @summary Set users changing
     * @param users - users list
     */
    setUsers(users: User []) {
        this.usersSubject.next(users);
        this.users = users;
    }

    /**
     * @summary Get users list
     * @param user - new user
     */
    addUser(user: User): Observable <any> {
        const users = [...this.users];
        users.push(user);
        return this.apiService.put('/users.json', users);
    }

    /**
     * @summary Set users changing
     * @summary id - user id
     */
    deleteUser(id: string) {
        const users = [...this.users];
        users.forEach((user, index) => {
            if (user.id === id) {
                users.splice(index, 1);
            }
        });

        return this.apiService.put('/users.json', users);
    }
}
