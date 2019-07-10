import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {finalize} from 'rxjs/operators';
import {UserService} from '../../shared/services/user.service';
import {ToasterService} from 'angular2-toaster';
import {MatDialog} from '@angular/material';
import {User} from '../../shared/interfaces/user';

/**
 * @summary AddUser component
 */
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  disabled: boolean;

  /**
   * @summary AddUser component
   * @param userService - userService
   * @param toaster - toaster service
   * @param dialog - MatDialog service
   */
  constructor(private userService: UserService,
              private toaster: ToasterService,
              private dialog: MatDialog) { }

  /**
   * @summary Run when AddUser component init
   */
  ngOnInit() {
    this.initUserForm();
  }

  /**
   * @summary Initialization of form for add user
   */
  initUserForm() {
    this.userForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      phone: new FormControl(null, [Validators.required]),
    });
  }

  /**
   * @summary Add new user
   */
  addUser() {
    this.userService.addUser(this.userForm.value)
        .pipe(finalize(() => this.disabled = !this.disabled))
        .subscribe((res: User) => {
          this.dialog.closeAll();
          this.toaster.pop('success', 'Added new user');
        });
  }

}
