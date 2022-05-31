import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiInputNumberModule } from "@taiga-ui/kit";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { InputNumberComponent } from "./input-number.component";
import { TuiHintControllerModule, TuiTextfieldControllerModule } from "@taiga-ui/core";

@NgModule({
  declarations: [InputNumberComponent],
    imports: [
        CommonModule,
        TuiInputNumberModule,
        ReactiveFormsModule,
        TuiHintControllerModule,
        TuiTextfieldControllerModule,

        FormlyModule.forChild({
            types: [{
                name: 'input-number',
                component: InputNumberComponent
            }]
        })
    ]
})
export class FormlyTuiInputNumberModule { }
