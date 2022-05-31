import { Component } from '@angular/core';
import { FieldWrapper } from "@ngx-formly/core";

@Component({
  selector: 'app-island',
  template: `
    <div class="container">
      <tui-island size="l">
        <div class="tui-island__content">
          <div class="tui-island__figure"></div>
          <h3 class="tui-island__title">{{to.label}}</h3>
        </div>
        <ng-container #fieldComponent></ng-container>
      </tui-island>
    </div>
  `,
  styles: [`
      :host {
          width: 100%;
      }
      .container {
        margin-bottom: 10px;
      }
  `]
})
export class IslandComponent extends FieldWrapper {
}
