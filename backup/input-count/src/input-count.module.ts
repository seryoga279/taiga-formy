import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiInputCountModule } from "@taiga-ui/kit";
import { ReactiveFormsModule } from "@angular/forms";
import { InputCountComponent } from "./input-count.component";
import { FormlyModule } from "@ngx-formly/core";

@NgModule({
  declarations: [InputCountComponent],
  imports: [
    CommonModule,
    TuiInputCountModule,
    ReactiveFormsModule,

    FormlyModule.forChild({
      types: [{
        name: 'input-count',
        component: InputCountComponent
      }]
    })
  ]
})
export class FormlyTuiInputCountModule { }
