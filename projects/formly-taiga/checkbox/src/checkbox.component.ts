import { Component } from '@angular/core';
import { FieldType } from "@ngx-formly/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-tui-checkbox',
  template: `
    <div class="checkbox-container">
      <tui-checkbox-labeled 
          [formControl]="control"
          [formlyAttributes]="field"
          [size]="to.size || 'l'"
          [focusable]="to.focusable || false"
          [nativeId]="to.nativeId || null"
          [pseudoHovered]="to.pseudoHovered || null"
          [pseudoFocused]="to.pseudoFocused || null"
          [pseudoPressed]="to.pseudoPressed || null"
      >
        {{to.label}}
      </tui-checkbox-labeled>
    </div>
  `,
  styles: [
      `.checkbox-container {
        margin-bottom: 15px;
      }`
  ]
})
export class CheckboxComponent extends FieldType {

  get control(): FormControl {
    return this.formControl as any
  }
}
