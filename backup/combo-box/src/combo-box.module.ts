import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboBoxComponent } from "./combo-box.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import {
  TuiComboBoxModule,
  TuiDataListWrapperModule,
  TuiFilterByInputPipeModule,
  TuiStringifyContentPipeModule
} from "@taiga-ui/kit";
import { TuiLetModule } from "@taiga-ui/cdk";
import {
  TuiDataListModule,
  TuiHintControllerModule,
  TuiTextfieldControllerModule
} from "@taiga-ui/core";

@NgModule({
  declarations: [ComboBoxComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiLetModule,
    TuiHintControllerModule,
    TuiTextfieldControllerModule,
    TuiFilterByInputPipeModule,
    TuiDataListModule,
    TuiStringifyContentPipeModule,

    FormlyModule.forChild({
      types: [{name: 'combo-box', component: ComboBoxComponent}]
    })
  ]
})
export class FormlyTuiComboBoxModule { }
