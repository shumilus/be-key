import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../../shared/interfaces/user';
import {MAT_DIALOG_DATA} from '@angular/material';

/**
 * @summary User component
 */
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})

export class UserInfoComponent implements OnInit {

  /**
   * @summary Users component constructor
   * @param user - user data
   */
  constructor(@Inject(MAT_DIALOG_DATA)
              public user: User) { }
  /**
   * @summary Run when User component init
   */
  ngOnInit() {
  }

}
