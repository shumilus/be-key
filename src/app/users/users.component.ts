import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {User} from '../shared/interfaces/user';
import {MatDialog} from '@angular/material';
import {AddUserComponent} from './add-user/add-user.component';
import {Subscription} from 'rxjs';

/**
 * @summary Users component
 */
@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
    subscription = new Subscription();
    users: User [];
    page = 1;
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
        this.subscription.add(this.userService.usersSubject
            .subscribe((users: User []) => {
                    this.users = users;
                }
            ));
    }

    /**
     * @summary Get users list from server
     */
    getUsers() {
         this.userService.getUsers()
            .subscribe((users: {any} ) => {
                const fetchedUsers = [];
                for (const key in users) {
                    fetchedUsers.push({
                        ...users[key],
                        id: key
                    });
                }
                this.userService.setUsers(fetchedUsers);
            });
    }

    /**
     * @summary Open dialog window for adding new user
     */
    openAddUser() {
        this.dialog.open(AddUserComponent, {
            width: '480px',
            height: '730px',
            autoFocus: false,
            panelClass: 'popup-modal'
        });
    }

    /**
     * @summary Track of changing users list
     */
    trackByFn(index: number, user: User) {
        return user.id;
    }

    /**
     * @summary Cleanup logic
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
