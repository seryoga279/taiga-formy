import { Component, OnInit} from '@angular/core';
import { FieldType } from "@ngx-formly/core";
import { FormControl } from "@angular/forms";
import {
  ALWAYS_FALSE_HANDLER,
  TuiBooleanHandler,
  TuiDay,
  TUI_FIRST_DAY,
  TUI_LAST_DAY,
  TuiTime,
  TuiMonth
} from "@taiga-ui/cdk";
import { DEFAULT_MAX_HEIGHT, DEFAULT_MIN_HEIGHT } from "@taiga-ui/core";

@Component({
  selector: 'app-date-time',
  template: `
    <div class="container">
      <tui-input-date-time
          [formControl]="transitionFormControl"
          [formlyAttributes]="field"
          [disabledItemHandler]="disabledItemHandler"
          [min]="min"
          [max]="max"
          [defaultActiveYearMonth]="defaultActiveYearMonth"
          [timeMode]="to.timeMode || 'HH:MM'"
          [tuiDropdownAlign]="to.tuiDropdownAlign || 'right'"
          [tuiDropdownDirection]="to.tuiDropdownDirection || null"
          [tuiDropdownSided]="to.tuiDropdownSided || false"
          [tuiDropdownLimitWidth]="to.tuiDropdownLimitWidth || 'auto'"
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
      </tui-input-date-time>
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
export class DateTimeComponent extends FieldType implements OnInit {
  transitionFormControl = new FormControl(null, []);

  ngOnInit(): void {
    if (this.field.defaultValue) {
      const date = new Date(this.field.defaultValue);

      this.transitionFormControl.setValue([
          new TuiDay(date.getFullYear(), date.getMonth(), date.getDate()),
          new TuiTime(date.getHours(), date.getMinutes())
      ]);

    }
    this.transitionFormControl.valueChanges.subscribe(([TuiDay, TuiTime]: [TuiDay, TuiTime]) => {
      const date = new Date(TuiDay.year, TuiDay.month, TuiDay.day);
      TuiTime ? date.setHours(TuiTime.hours, TuiTime.minutes) : date.setHours(0, 0);
      this.formControl.setValue(date);
    });
  }

  get control(): FormControl {
    return this.formControl as any
  }

  get min(): TuiDay {
    return this.to.min ? (this.to.min as any) : TUI_FIRST_DAY;
  }

  get max(): TuiDay {
    return this.to.max ? (this.to.max as any) : TUI_LAST_DAY;
  }

  get defaultActiveYearMonth(): TuiMonth {
    return this.to.defaultActiveYearMonth ? this.to.defaultActiveYearMonth : TuiMonth.currentLocal();
  }

  get disabledItemHandler(): TuiBooleanHandler<TuiDay> {
    return this.to.disabledItemHandler ? this.to.disabledItemHandler : ALWAYS_FALSE_HANDLER;
  }

  get tuiDropdownMinHeight(): number {
    return this.to.tuiDropdownMinHeight || DEFAULT_MIN_HEIGHT;
  }

  get tuiDropdownMaxHeight(): number {
    return this.to.tuiDropdownMaxHeight || DEFAULT_MAX_HEIGHT;
  }
}
