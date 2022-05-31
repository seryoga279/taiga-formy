import { Component } from '@angular/core';
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: 'app-label',
  template: `
    <div class="container">
      <span>{{to.label}}</span>
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
export class LabelComponent extends FieldType {
}
