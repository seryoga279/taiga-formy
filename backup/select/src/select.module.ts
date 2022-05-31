import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from "./select.component";
import { TuiSelectModule } from "@taiga-ui/kit";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { TuiDataListModule, TuiHintControllerModule, TuiTextfieldControllerModule } from "@taiga-ui/core";
import { TuiLetModule } from "@taiga-ui/cdk";

@NgModule({
    declarations: [SelectComponent],
    imports: [
        CommonModule,
        TuiSelectModule,
        ReactiveFormsModule,
        TuiLetModule,
        TuiTextfieldControllerModule,
        TuiDataListModule,
        TuiHintControllerModule,

        FormlyModule.forChild({
            types: [{name: 'select', component: SelectComponent}]
        })
    ]
})
export class FormlyTuiSelectModule { }
