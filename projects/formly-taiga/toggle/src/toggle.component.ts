import { Component } from '@angular/core';
import { FieldType } from "@ngx-formly/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-tui-toggle',
  template: `
    <div class="container">
      <label tuiLabel>
        {{field.templateOptions?.label}}
        <tui-toggle
            [disabled]="to.disabled || false"
            [showIcons]="to.showIcons || false"
            [showLoader]="to.showLoader || false"
            [singleColor]="to.singleColor || false"
            [size]="to.size || 'l'"
            [formControl]="control"
            [formlyAttributes]="field"
        ></tui-toggle>
      </label>
    </div>
  `,
  styles: [
    `
      .container {
        margin-bottom: 15px;
      }
    `
  ]
})
export class ToggleComponent extends FieldType {

  get control(): FormControl {
    return this.formControl as any;
  }
}
