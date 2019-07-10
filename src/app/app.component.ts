import {Component, OnInit} from '@angular/core';
import {ToasterConfig} from 'angular2-toaster';
import {UserService} from './shared/services/user.service';
import {ApiService} from './shared/services/api.service';

/**
 * @summary Api component
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    toasterconfig: ToasterConfig =
        new ToasterConfig({
            showCloseButton: false,
            tapToDismiss: true,
            timeout: 6000,
            animation: 'fade',
            newestOnTop: false,
            positionClass: 'toast-bottom-center'
        });

    /**
     * @summary App component constructor
     */
    constructor(private userService: UserService,
                private apiService: ApiService) {
    }

    ngOnInit() {
        this.getData();
    }

    /**
     * @summary Get users list from user.json file
     */
    getData() {
        this.userService.getData()
            .subscribe(res => {
                this.setData(res);
            });
    }

    /**
     * @summary Check if faribase data is empty
     */
    setData(response: any) {
       return this.apiService.get('/users.json')
           .subscribe(res => {
               if (!res) {
                   response.forEach((item => {
                       this.apiService.post('/users.json', item)
                           .subscribe(() => {});
                   }));
               }
           });
    }
}
