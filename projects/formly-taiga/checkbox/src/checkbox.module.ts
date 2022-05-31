import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from "./checkbox.component";
import { TuiCheckboxLabeledModule } from "@taiga-ui/kit";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";

@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule,
    TuiCheckboxLabeledModule,
    ReactiveFormsModule,

    FormlyModule.forChild({
      types: [{name: 'checkbox', component: CheckboxComponent}]
    })
  ]
})
export class FormlyTuiCheckboxModule { }
