import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiInputDateTimeModule } from "@taiga-ui/kit";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { DateTimeComponent } from "./date-time.component";
import { TuiDropdownControllerModule, TuiHintControllerModule, TuiTextfieldControllerModule } from "@taiga-ui/core";

@NgModule({
    declarations: [
        DateTimeComponent,
    ],
    imports: [
        CommonModule,
        TuiInputDateTimeModule,
        ReactiveFormsModule,
        TuiDropdownControllerModule,
        TuiHintControllerModule,
        TuiTextfieldControllerModule,

        FormlyModule.forChild({
            types: [{name: 'date-time', component: DateTimeComponent}]
        })
    ]
})
export class FormlyTuiDateTimeModule { }
