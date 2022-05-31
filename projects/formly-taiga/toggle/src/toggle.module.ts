import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiToggleModule } from "@taiga-ui/kit";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { TuiLabelModule } from "@taiga-ui/core";
import { ToggleComponent } from "./toggle.component";

@NgModule({
  declarations: [ToggleComponent],
  imports: [
      CommonModule,
    TuiToggleModule,
    ReactiveFormsModule,
    TuiLabelModule,

    FormlyModule.forChild({
      types: [{
        name: 'toggle',
        component: ToggleComponent
      }]
    })
  ]
})
export class FormlyTuiToggleModule { }
