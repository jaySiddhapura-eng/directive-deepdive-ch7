import { Directive,
  HostBinding, 
  ElementRef, 
  Renderer2, 
  HostListener, 
  OnInit, 
  Input} 
  from '@angular/core';

@Directive({
  selector: '[appPropertyHostBinding]'
})
export class PropertyHostBindingDirective implements OnInit{

  @Input() defaultColor:string = 'transparant';
  @Input() highlightColor:string = 'green';

  private renderer : Renderer2;
  private eRef : ElementRef;

  @HostBinding('style.backgroundColor')
  backgroundColor:string;

  constructor(inputRender : Renderer2,elRef:ElementRef) { 
    this.renderer = inputRender;
    this.eRef = elRef;
  }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

  // following method listens to the event
  // which is generated when mouse hover over the element
  // following decoreator is method level decorator and used to
  @HostListener ('mouseenter')
  mouseOverMethod(eventData:Event){
    this.backgroundColor= this.highlightColor;
  }

  // following method listens to the event
  // which is generated when mouse leave the element area
  @HostListener ('mouseleave')
  mouseLeaveMethod(eventData:Event){
    this.backgroundColor= this.defaultColor;
  }

}
