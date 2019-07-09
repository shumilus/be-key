import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {User} from '../shared/interfaces/user';

/**
 * @summary Users component
 */
@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    users: User [];
    /**
     * @summary Users component constructor
     */
    constructor(private userService: UserService) {
    }

    /**
     * @summary Run when Users component init
     */
    ngOnInit() {
        this.getUsers();
    }

    /**
     * @summary Get users list from server
     */
    getUsers() {
        this.userService.getUsers()
            .subscribe(res => {
                const fetchedUsers = [];
                for (const key in res) {
                    fetchedUsers.push({
                        ...res[key],
                        id: key
                    });
                }
                this.users = fetchedUsers;
            });
    }

}
