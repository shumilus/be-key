import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {User} from '../shared/interfaces/user';
import {MatDialog} from '@angular/material';
import {AddUserComponent} from './add-user/add-user.component';

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
     * @param userService - User service
     * @param dialog - MatDialog service
     */
    constructor(private userService: UserService,
                private dialog: MatDialog) {
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

    /**
     * @summary Open dialog window for adding new user
     */
    openAddUser() {
        this.dialog.open(AddUserComponent, {
            width: '480px',
            height: '530px',
            autoFocus: false,
            panelClass: 'popup-modal'
        });
    }

    trackByFn(index: number, user: User) {
        return user.id;
    }

}
