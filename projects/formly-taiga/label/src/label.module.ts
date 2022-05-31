import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from "./label.component";
import { FormlyModule } from "@ngx-formly/core";

@NgModule({
  declarations: [LabelComponent],
  imports: [
    CommonModule,

    FormlyModule.forChild({
      types: [
        {name: 'label', component: LabelComponent}
      ]
    })
  ]
})
export class FormlyTuiLabelModule { }
