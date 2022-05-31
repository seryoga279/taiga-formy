import { Component, Inject, Injector } from '@angular/core';
import { FieldWrapper}  from "@ngx-formly/core";
import { FormGroup } from "@angular/forms";
import { TuiDialogService } from "@taiga-ui/core";

@Component({
  template: `
    <div class="container">
      <div class="accordion-controls" *ngIf="to.controls">
        <button *ngFor="let autocompleteControl of to.controls" tuiButton size="xs" type="button">{{autocompleteControl.label}}</button>
      </div>
      <tui-accordion [formlyAttributes]="field" [closeOthers]="checkIsnull(to.closeOthers)">
        <tui-accordion-item *ngFor="let accordionItem of field?.fieldGroup"
                            [open]="accordionItem.templateOptions?.open || false"
                            class="accordion-item" borders="top-bottom"
                            [showArrow]="checkIsnull(accordionItem.templateOptions?.showArrow)">
          <div class="accordion-item__header">
            <span class="accordion-item__header_card-name">{{accordionItem.templateOptions?.label}}</span>
            <div class="accordion-counted">
            <span class="accordion-counted__label" *ngFor="let label of accordionItem.templateOptions?.calculatedLabel || []">
              {{label.label}}: {{calculateLabel(label.items)}} {{postfix(label.postfix)?.value}}
            </span>
            </div>
          </div>
          <ng-template tuiAccordionItemContent>
            <formly-form [fields]="accordionItem.fieldGroup!" [form]="form"></formly-form>
          </ng-template>
        </tui-accordion-item>
      </tui-accordion>
    </div>
   
  `,
  styles: [`
    :host {
      width: 100%;
    }

    .container {
      margin-bottom: 15px;
    }

    .container .accordion-controls {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 15px;
    }

    .container .accordion-controls button {
      margin-right: 10px;
    }

    .container .accordion-controls button:last-child {
      margin-right: 0;
    }

    .accordion-item__header {
      font: var(--tui-font-text-l);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .accordion-item__header .accordion-counted__label {
      margin-right: 10px;
      font-size: 0.6875rem;
      line-height: 1rem;
      text-transform: uppercase;
      color: var(--tui-text-02);
    }

    .accordion-item__header .accordion-counted__label:last-child {
      margin-right: 0;
    }

    .accordion-item__header-info {
      display: flex;
      justify-content: space-between;
    }

    .accordion-item__header_card-name {
      font: var(--tui-font-text-xl);
      text-align: center;
    }

    .accordion-item__header-row {
      margin-right: 20px;
      color: var(--tui-text-02);
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .accordion-item__header-row__status {
      font: var(--tui-font-text-s);
    }

  `]
})
export class AccordionItemComponent extends FieldWrapper {

  constructor(@Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
              @Inject(Injector) private readonly injector: Injector) {
    super();
  }

  calculateLabel(items: string[]) {
    const value = (this.formControl as FormGroup).getRawValue();
    return items.reduce((curr: number, next: string) => (curr += Number(this.get(value, next, 0))), 0);
  }

  checkIsnull(expr: any) {
    if (expr === null || expr === undefined) {
      return false;
    }
    return expr
  }
  postfix(patch: string): any {
    return this.get(this.form.getRawValue(), patch, patch);
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

}
