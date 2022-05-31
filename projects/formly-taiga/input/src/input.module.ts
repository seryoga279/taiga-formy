import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from "./input.component";
import { TuiInputModule, TuiInputNumberModule } from "@taiga-ui/kit";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { TuiHostedDropdownModule, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule } from "@taiga-ui/core";
import { CustomTuiInputComponent } from "./custom-tui-input.component";
import { PolymorpheusModule } from "@tinkoff/ng-polymorpheus";

@NgModule({
    declarations: [InputComponent, CustomTuiInputComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiInputModule,
        FormlyModule,
        TuiTextfieldControllerModule,
        TuiInputNumberModule,
        TuiHostedDropdownModule,
        TuiPrimitiveTextfieldModule,
        PolymorpheusModule,

        FormlyModule.forChild({
            types: [{
                name: 'input',
                component: InputComponent
            }]
        })
    ]
})
export class FormlyTuiInputModule { }
