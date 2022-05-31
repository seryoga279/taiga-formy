import { Component, OnInit } from '@angular/core';
import { FieldType } from "@ngx-formly/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-input-number',
  template: `
    <div class="container">
      <tui-input-number
          [formControl]="control"
          [min]="to.min || -Infinity"
          [max]="to.max || Infinity"
          [postfix]="postfix"
          [precision]="to.precision || 3"
          [decimal]="to.decimal || 'not-zero'"
          [tuiHintContent]="to.tuiHintContent || null"
          [tuiHintDirection]="to.tuiHintDirection || null"
          [tuiHintMode]="to.tuiHintMode || null"
          [tuiTextfieldAutocomplete]="to.tuiTextfieldAutocomplete || ''"
          [tuiTextfieldCleaner]="to.tuiTextfieldCleaner || false"
          [tuiTextfieldExampleText]="to.tuiTextfieldExampleText || ''"
          [tuiTextfieldInputMode]="to.tuiTextfieldInputMode || 'text'"
          [tuiTextfieldLabelOutside]="to.tuiTextfieldLabelOutside || false"
          [tuiTextfieldMaxLength]="to.tuiTextfieldMaxLength || null"
          [tuiTextfieldSize]="to.tuiTextfieldSize || 'm'"
          [tuiTextfieldType]="to.tuiTextfieldType || 'text'"
          [readOnly]="to.readOnly || false"
          [pseudoInvalid]="to.pseudoInvalid || null"
          [focusable]="to.focusable || true"
          [nativeId]="to.nativeId || null"
          [pseudoHovered] = "to.pseudoHovered || null"
          [pseudoFocused] = "to.pseudoFocused || null"
          [pseudoPressed] = "to.pseudoPressed || null"
      >
        {{to.label}}
      </tui-input-number>
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
export class InputNumberComponent extends FieldType implements OnInit {

  Infinity = Infinity;

  get control(): FormControl {
    return this.formControl as any;
  }

  get postfix() {
    if (this.to.postfix) {
      return this.get(this.form.getRawValue(), this.to.postfix, this.to.postfix).value;
    }
    return '';
  }

  get = (obj: any, path: any, defValue: any) => {
    // If path is not defined or it has false value
    if (!path) return undefined;
    // Check if path is string or array. Regex : ensure that we do not have '.' and brackets.
    // Regex explained: https://regexr.com/58j0k
    const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);
    // Find value
    const result = pathArray.reduce((prevObj: any, key: any) => prevObj && prevObj[key], obj);
    // If found value is undefined return default value; otherwise return the value
    return result === undefined ? defValue : result
  }

  ngOnInit(): void {
  }
}
