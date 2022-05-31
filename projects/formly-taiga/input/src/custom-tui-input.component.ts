import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    Inject,
    Input,
    Optional,
    Self,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import {
    AbstractTuiControl,
    isNativeFocused,
    setNativeFocused,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
} from '@taiga-ui/cdk';
import {
    TuiDataListDirective,
    TuiDataListHost,
    TuiHorizontalDirection,
    TuiHostedDropdownComponent,
    TuiPrimitiveTextfieldComponent,
} from '@taiga-ui/core';
import { TuiInputCountOptions, TUI_INPUT_COUNT_OPTIONS, TUI_INPUT_PROVIDERS } from "@taiga-ui/kit";


@Component({
    selector: 'tui-custom-input',
    template: `
        <tui-hosted-dropdown
                class="hosted"
                [canOpen]="canOpen"
                [content]="datalist || ''"
                [(open)]="open"
                (tuiActiveZoneChange)="onActiveZone($event)"
        >
            <tui-primitive-textfield
                    automation-id="tui-input__textfield"
                    class="textfield"
                    [pseudoFocused]="computedFocused"
                    [pseudoHovered]="computedHovered"
                    [invalid]="computedInvalid"
                    [nativeId]="nativeId"
                    [readOnly]="readOnly"
                    [iconContent]="icon"
                    [iconAlign]="iconAlign"
                    [disabled]="computedDisabled"
                    [focusable]="computedFocusable"
                    [value]="value"
                    (valueChange)="onValueChange($event)"
                    (hoveredChange)="onHovered($event)"
                    [postfix]="postfix"
                    [prefix]="prefix"
            >
                <ng-content></ng-content>
            </tui-primitive-textfield>
        </tui-hosted-dropdown>
  `,
    styles: [`
      :host {
          display: block;
          border-radius: var(--tui-radius-m);
          text-align: left;
      }

      :host ._disabled {
          pointer-events: none;
      }

      .hosted {
        display: block;
        border-radius: inherit;
      }

      .textfield {
        border-radius: inherit;
        text-align: inherit;
      }`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_INPUT_PROVIDERS,
})
export class CustomTuiInputComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor, TuiDataListHost<string>
{
    @ViewChild(TuiHostedDropdownComponent)
    private readonly hostedDropdown?: TuiHostedDropdownComponent;

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    @Input()
    @tuiDefaultProp()
    icon: string | null = null;

    @Input()
    @tuiDefaultProp()
    iconAlign: TuiHorizontalDirection = 'left';

    @Input()
    @tuiDefaultProp()
    postfix = this.options.postfix;

    @Input()
    @tuiDefaultProp()
    prefix = '';

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    readonly datalist: string = '';

    open = false;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
            control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_INPUT_COUNT_OPTIONS)
        readonly options: TuiInputCountOptions,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }

    get focused(): boolean {
        return (
            isNativeFocused(this.nativeFocusableElement) ||
            (!!this.hostedDropdown && this.hostedDropdown.focused)
        );
    }

    get canOpen(): boolean {
        return !this.computedDisabled && !this.readOnly && !!this.datalist;
    }

    onValueChange(value: string) {
        this.updateValue(value);
        this.open = true;
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onActiveZone(active: any) {
        this.updateFocused(active);
    }

    handleOption(item: unknown) {
        this.setNativeValue(String(item));
        this.focusInput();
        this.updateValue(String(item));
        this.open = false;
    }

    protected getFallbackValue(): string {
        return '';
    }

    private focusInput(preventScroll: boolean = false) {
        if (this.nativeFocusableElement) {
            setNativeFocused(this.nativeFocusableElement, true, preventScroll);
        }
    }

    private setNativeValue(value: string) {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.value = value;
        }
    }
}
