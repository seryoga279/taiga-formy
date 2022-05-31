import { Component } from '@angular/core';
import { FieldType } from "@ngx-formly/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-input',
  template: `
    <div class="container">
      <tui-custom-input
          [formControl]="control" 
          [tuiTextfieldAutocomplete]="to.tuiTextfieldAutocomplete || null"
          [tuiTextfieldCleaner]="to.tuiTextfieldCleaner || true"
          [tuiTextfieldExampleText]="to.tuiTextfieldExampleText || null"
          [formlyAttributes]="field"
          [tuiTextfieldInputMode]="to.tuiTextfieldInputMode || null"
          [tuiTextfieldLabelOutside]="to.tuiTextfieldLabelOutside || false"
          [tuiTextfieldMaxLength]="to.tuiTextfieldMaxLength || null"
          [tuiTextfieldSize]="to.tuiTextfieldSize || 'm'"
          [tuiTextfieldType]="to.tuiTextfieldType || 'text'"
          [readOnly]="to.readOnly || false"
          [pseudoInvalid]="to.pseudoInvalid || null"
          [focusable]="to.focusable || true"
          [nativeId]="to.nativeId || null"
          [pseudoHovered]="to.pseudoHovered || null"
          [pseudoFocused]="to.pseudoFocused || null"
          [pseudoPressed]="to.pseudoPressed || null"
          [postfix]="to.postfix || null"
          [prefix]="to.prefix || null"
      >
        {{to.label}}
      </tui-custom-input>
    </div>
  `,
  styles: [`
      :host {
          width: 100%;
      }
      .container {
        margin-bottom: 15px;
      }
  `]
})
export class InputComponent extends FieldType {

  get control(): FormControl {
    return this.formControl as any;
  }
}
