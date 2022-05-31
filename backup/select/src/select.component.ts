import {Component, OnInit} from '@angular/core';
import {FieldType} from "@ngx-formly/core";
import {FormControl} from "@angular/forms";
import {TUI_DEFAULT_IDENTITY_MATCHER, TuiContextWithImplicit, tuiPure, TuiStringHandler} from "@taiga-ui/cdk";
import {TuiIdentityMatcher} from "@taiga-ui/cdk/types";

interface SelectItem {
  key: string;
  value: string;
}

@Component({
  selector: 'app-multi-select',
  template: `
    <div class="container">
      <tui-select
          *tuiLet="selectOptions as items"
          [disabled]="to.disabled || false"
          [formControl]="control"
          [valueContent]="items ? stringify(items) : ''"
          [identityMatcher]="identityMatcher"
          [tuiHintContent]="to.tuiHintContent || null"
          [tuiHintDirection]="to.tuiHintDirection || 'bottom-right'"
          [tuiHintMode]="to.tuiHintMode || null"
          [tuiTextfieldAutocomplete]="to.tuiTextfieldAutocomplete || ''"
          [tuiTextfieldCleaner]="to.tuiTextfieldCleaner || true"
          [tuiTextfieldCustomContent]="to.tuiTextfieldCustomContent || null"
          [tuiTextfieldExampleText]="to.tuiTextfieldExampleText || ''"
          [tuiTextfieldInputMode]="to.tuiTextfieldInputMode || 'text'"
          [tuiTextfieldLabelOutside]="to.tuiTextfieldLabelOutside || false"
          [tuiTextfieldMaxLength]="to.tuiTextfieldMaxLength || null"
          [tuiTextfieldSize]="to.tuiTextfieldSize || 'm'"
          [tuiTextfieldType]="to.tuiTextfieldType || 'text'"
          [readOnly]="to.pseudoPressed || false"
          [pseudoInvalid]="to.pseudoPressed || null"
          [focusable]="to.pseudoPressed || true"
          [nativeId]="to.pseudoPressed || ''"
          [pseudoHovered]="to.pseudoHovered || null"
          [pseudoFocused]="to.pseudoFocused || null"
          [pseudoPressed]="to.pseudoPressed || null"
      >
        {{to.label}}
        <ng-template tuiDataList>
          <tui-data-list *ngIf="items">
            <button *ngFor="let item of items" tuiOption [value]="item">
              {{item.value}}
            </button>
          </tui-data-list>
        </ng-template>
      </tui-select>
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
export class SelectComponent extends FieldType {

  get control(): FormControl {
    return this.formControl as any
  }

  get selectOptions(): any[] {
    return this.to.options as SelectItem[];
  }

  @tuiPure
  stringify(items: ReadonlyArray<SelectItem>): TuiStringHandler<TuiContextWithImplicit<SelectItem>> {
    const map = new Map(items.map(({key, value}) => [key, value] as [string, string]));

    return ({$implicit}: TuiContextWithImplicit<SelectItem>) => {
      return map.get($implicit.key) || ''
    };
  }

  get identityMatcher(): TuiIdentityMatcher<unknown> {
    return this.to.identityMatcher || TUI_DEFAULT_IDENTITY_MATCHER;
  }
}
