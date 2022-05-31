import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IslandComponent } from './island.component';
import { TuiIslandModule } from "@taiga-ui/kit";
import { FormlyModule } from "@ngx-formly/core";



@NgModule({
  declarations: [IslandComponent],
  imports: [
    CommonModule,
    TuiIslandModule,

    FormlyModule.forChild({
      wrappers: [{name: 'island', component: IslandComponent}]
    })
  ]
})
export class FormlyTuiIslandModule { }
