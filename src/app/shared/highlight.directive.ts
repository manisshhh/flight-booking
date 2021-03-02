import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  public element: ElementRef;
  @Input() value: string;
  @Input() value1: string;
  constructor(element: ElementRef, private logger: NGXLogger) {
    this.element = element;

    this.value = ''
    this.value1 = ''

    if(this.element.nativeElement.localName == "div") {

      this.element.nativeElement.style.background = "yellow"
    } else {
      this.element.nativeElement.style.background = "red"
    }
   }

   ngOnInit() {

      this.logger.info("mthod ")
      this.logger.debug(this.value1)
      this.element.nativeElement.style.background = this.value;
   }

}
