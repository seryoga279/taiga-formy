import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionItemComponent } from "./accordion-item.component";
import { TuiAccordionModule } from "@taiga-ui/kit";
import { FormlyModule } from "@ngx-formly/core";
import { TuiButtonModule, TuiDialogModule } from "@taiga-ui/core";

@NgModule({
  declarations: [AccordionItemComponent],
    imports: [
        CommonModule,
        TuiAccordionModule,
        TuiButtonModule,
        TuiDialogModule,

        FormlyModule.forChild({
            wrappers: [{name: 'accordion', component: AccordionItemComponent}]
        })
    ]
})
export class FormlyTuiAccordionItemModule { }
