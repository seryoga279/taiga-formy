import { NgModule } from '@angular/core';
import { FormlyTuiAccordionItemModule } from "@ngx-formly/taiga/accordion-item";
// import { FormlyTuiInputModule } from "@ngx-formly/taiga/input";
// import { FormlyTuiComboBoxModule } from "@ngx-formly/taiga/combo-box";
import { FormlyTuiDateTimeModule } from "@ngx-formly/taiga/date-time";
import { FormlyTuiIslandModule } from "@ngx-formly/taiga/island";
import { FormlyTuiLabelModule } from "@ngx-formly/taiga/label";
import { FormlyTuiMultiSelectModule } from "@ngx-formly/taiga/multi-select";
// import { FormlyTuiSelectModule } from "@ngx-formly/taiga/select";
import { FormlyTuiToggleModule } from "@ngx-formly/taiga/toggle";
import { FormlyTuiCheckboxModule } from "@ngx-formly/taiga/checkbox";
// import { FormlyTuiInputCountModule } from "@ngx-formly/taiga/input-count";
// import { FormlyTuiInputNumberModule } from "@ngx-formly/taiga/input-number";

@NgModule({
  imports: [
    // FormlyTuiInputModule,
    FormlyTuiAccordionItemModule,
    // FormlyTuiComboBoxModule,
    FormlyTuiDateTimeModule,
    FormlyTuiIslandModule,
    FormlyTuiLabelModule,
    FormlyTuiMultiSelectModule,
    // FormlyTuiSelectModule,
    FormlyTuiToggleModule,
    FormlyTuiCheckboxModule,
    // FormlyTuiInputCountModule,
    // FormlyTuiInputNumberModule
  ]
})
export class FormlyTaigaModule { }
