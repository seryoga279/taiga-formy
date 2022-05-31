import { Component, OnInit } from '@angular/core';
import { FieldType } from "@ngx-formly/core";
import { FormControl } from "@angular/forms";
import {
  TUI_DEFAULT_MATCHER,
  TuiContextWithImplicit,
  TuiIdentityMatcher,
  TuiStringHandler,
  ALWAYS_FALSE_HANDLER
} from "@taiga-ui/cdk";
import { BehaviorSubject, Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { DEFAULT_MAX_HEIGHT, DEFAULT_MIN_HEIGHT } from "@taiga-ui/core";

interface SelectItem {
  key: string;
  value: string;
}

@Component({
  selector: 'app-multi-select',
  template: `
<div class="container">
  <tui-multi-select
      [formControl]="control"
      (searchChange)="onSearch($event!)"
      [stringify]="stringify"
      [identityMatcher]="identityMatcher"
      [disabled]="to.disabled || false"
      [disabledItemHandler]="disabledItemHandler"
      [editable]="to.editable || true"
      [expandable]="to.expandable || true"
      [valueContent]="to.valueContent || ''"
      [tuiDropdownAlign]="to.tuiDropdownAlign || 'right'"
      [tuiDropdownDirection]="to.tuiDropdownDirection || null"
      [tuiDropdownSided]="to.tuiDropdownSided || false"
      [tuiDropdownLimitWidth]="to.tuiDropdownLimitWidth || 'fixed'"
      [tuiDropdownMinHeight]="tuiDropdownMinHeight"
      [tuiDropdownMaxHeight]="tuiDropdownMaxHeight"
      [tuiHintContent]="to.tuiHintContent || null"
      [tuiHintDirection]="to.tuiHintDirection || 'bottom-left'"
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
    <tui-data-list *tuiDataList tuiMultiSelectGroup>
      <button
          *ngFor="let item of items$ | async"
          tuiOption
          [value]="item"
      >
        {{ item.value }}
      </button>
    </tui-data-list>
  </tui-multi-select>
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
export class MultiSelectComponent extends FieldType implements OnInit {
  readonly search$ = new BehaviorSubject<string>('');
  items$!: Observable<any[]>;

  get control(): FormControl {
    return this.formControl as any
  }

  get selectOptions(): any[] {
    return this.to.options as [];
  }

  stringify: TuiStringHandler<SelectItem | TuiContextWithImplicit<SelectItem>> = (item:SelectItem | TuiContextWithImplicit<SelectItem>) => {
    return 'value' in item ? item.value : item.$implicit.value;
  };

  identityMatcher: TuiIdentityMatcher<SelectItem> = (item1: SelectItem, item2: SelectItem) =>
      item1.key === item2.key;

  onSearch(searchQuery: string): void {
    this.search$.next(searchQuery);
  }

  ngOnInit(): void {
    this.items$ = this.search$.pipe(
        startWith(''),
        map((search) =>
            (this.to.options as []).filter(({value}) => TUI_DEFAULT_MATCHER(value, search || '')))
    );
  }

  get disabledItemHandler() {
    return this.to.disabledItemHandler || ALWAYS_FALSE_HANDLER
  }

  get tuiDropdownMinHeight(): number {
    return this.to.tuiDropdownMinHeight || DEFAULT_MIN_HEIGHT;
  }

  get tuiDropdownMaxHeight(): number {
    return this.to.tuiDropdownMaxHeight || DEFAULT_MAX_HEIGHT;
  }
}
