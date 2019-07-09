import {NgModule} from '@angular/core';
import {
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTooltipModule,
    MatTabsModule
} from '@angular/material';

@NgModule({
    declarations: [],
    exports: [
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatTabsModule
    ]
})
export class AppMaterialModule {
}
