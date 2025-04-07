import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[customInputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    let currentValue: string = this.el.nativeElement.value;

    this.el.nativeElement.value = currentValue.toUpperCase();
  }
}
