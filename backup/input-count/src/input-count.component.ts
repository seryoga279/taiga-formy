import { Component } from '@angular/core';
import { FieldType } from "@ngx-formly/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-tui-input-count',
  template: `
    <div class="container">
      <tui-input-count [postfix]="this.field.templateOptions?.postfix" [step]=".1" [formControl]="control" [min]="min" [max]="max">
        {{to.label}}
      </tui-input-count>
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
export class InputCountComponent extends FieldType {

  get control(): FormControl {
    return this.formControl as any
  }

  get min(): number {
    return this.to.min || 0;
  }

  get max(): number {
    return this.to.max || 100;
  }
}
