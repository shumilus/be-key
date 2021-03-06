import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ToasterService} from 'angular2-toaster';
import {MatDialog} from '@angular/material';
import {UserService} from '../../shared/services/user.service';
import {UserInfoComponent} from '../user-info/user-info.component';
import {User} from '../../shared/interfaces/user';

/**
 * @summary User component
 */
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserComponent implements OnInit {
    @Input() user: User;

    /**
     * @summary Users component constructor
     * @param userService - User service
     * @param toaster - toaster service
     * @param dialog - MatDialog service
     */
    constructor(private userService: UserService,
                private toaster: ToasterService,
                private dialog: MatDialog) {

    }

    /**
     * @summary Run when User component init
     */
    ngOnInit() {
    }

    /**
     * @summary Delete user from users list
     */
    deleteUser(event: any) {
        event.stopPropagation();
        this.userService.deleteUser(this.user.id)
            .subscribe((users: User []) => {
                this.userService.setUsers(users);
                this.toaster.pop('success', 'User Deleted');
            });
    }

    /**
     * @summary Open dialog window for adding new user
     */
    openUserInfo() {
        this.dialog.open(UserInfoComponent, {
            width: '750px',
            height: '550px',
            autoFocus: false,
            panelClass: 'popup-modal',
            data: this.user
        });
    }

}
