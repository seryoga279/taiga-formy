import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from "./multi-select.component";
import { TuiDataListWrapperModule, TuiMultiSelectModule } from "@taiga-ui/kit";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import {
    TuiDataListModule,
    TuiDropdownControllerModule,
    TuiHintControllerModule,
    TuiTextfieldControllerModule
} from "@taiga-ui/core";

@NgModule({
  declarations: [MultiSelectComponent],
    imports: [
        CommonModule,
        TuiMultiSelectModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiDropdownControllerModule,
        TuiHintControllerModule,

        FormlyModule.forChild({
            types: [{name: 'multi-select', component: MultiSelectComponent}]
        })
    ]
})
export class FormlyTuiMultiSelectModule { }
