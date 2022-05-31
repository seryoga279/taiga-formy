import { Component } from '@angular/core';
import { FieldType } from "@ngx-formly/core";
import { TUI_DEFAULT_IDENTITY_MATCHER, TuiContextWithImplicit, tuiPure, TuiStringHandler } from "@taiga-ui/cdk";
import { TuiIdentityMatcher } from "@taiga-ui/cdk/types";
import { FormControl } from "@angular/forms";

interface SelectItem {
  key: string;
  value: string;
}

@Component({
  selector: 'app-combo-box',
  template: `
    <div class="container">
      <tui-combo-box
          *tuiLet="selectOptions as items"
          [disabled]="to.disabled || false"
          [formControl]="control"
          [stringify]="stringify"
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
          [pseudoPressed]="to.pseudoPressed || null">
        {{to.label}}
        <input tuiTextfield [placeholder]="to.placeholder" />
        <tui-data-list-wrapper
            *tuiDataList
            [items]="items | tuiFilterByInputWith : stringify"
            [itemContent]="stringify | tuiStringifyContent"
        ></tui-data-list-wrapper>
      </tui-combo-box>
    </div>`,
  styles: [`
      :host {
        width: 100%;
      }
      .container {
        margin-bottom: 15px;
      }
  `]
})
export class ComboBoxComponent extends FieldType {

  @tuiPure
  valueContentStringify(items: ReadonlyArray<SelectItem>): TuiStringHandler<TuiContextWithImplicit<SelectItem>> {
    const map = new Map(items.map(({key, value}) => [key, value] as [string, string]));

    return ({$implicit}: TuiContextWithImplicit<SelectItem>) => {
      return map.get($implicit.key) || ''
    };
  }

  readonly stringify: any = (item: {key: string; value: string}) =>
      `${item.value}`;

  @tuiPure
  get control(): FormControl {
    return this.formControl as any
  }

  @tuiPure
  get selectOptions(): any[] {
    return this.to.options as SelectItem[];
  }

  @tuiPure
  get identityMatcher(): TuiIdentityMatcher<unknown> {
    return this.to.identityMatcher || TUI_DEFAULT_IDENTITY_MATCHER;
  }

}
