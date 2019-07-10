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
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      about: new FormControl(null, [Validators.required]),
    });
  }

  /**
   * @summary Add new user
   */
  addUser() {
    const date = new Date();
    this.userService.addUser({...this.userForm.value, registered: date})
        .pipe(finalize(() => this.disabled = !this.disabled))
        .subscribe((users: User[]) => {
          this.userService.setUsers(users);
          this.cancel();
          this.toaster.pop('success', 'New user added');
        });
  }

  /**
   * @summary Close modal window
   */
  cancel() {
    this.dialog.closeAll();
  }

}
