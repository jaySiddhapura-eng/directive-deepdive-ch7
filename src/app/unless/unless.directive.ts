import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  private templateRef:TemplateRef<any>;
  private vcRef:ViewContainerRef;

  @Input() set appUnless(condition: boolean){
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(tRef: TemplateRef<any>, vRef: ViewContainerRef ) { 
    this.templateRef = tRef;
    this.vcRef = vRef;
  }

}
