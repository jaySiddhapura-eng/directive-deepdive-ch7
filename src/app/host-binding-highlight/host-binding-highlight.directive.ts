import { Directive, HostBinding, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHostBindingHighlight]'})
export class HostBindingHighlightDirective implements OnInit {

  private renderer : Renderer2;
  private eRef : ElementRef;

  @HostBinding('style.backgroundColor')
  backgroundColor:string = 'transparent';

  constructor(inputRender : Renderer2,elRef:ElementRef) { 
    this.renderer = inputRender;
    this.eRef = elRef;
  }

  ngOnInit(){
  }

  // following method listens to the event
  // which is generated when mouse hover over the element
  // following decoreator is method level decorator and used to
  @HostListener ('mouseenter')
  mouseOverMethod(eventData:Event){
    this.backgroundColor="orange";
  }

  // following method listens to the event
  // which is generated when mouse leave the element area
  @HostListener ('mouseleave')
  mouseLeaveMethod(eventData:Event){
    this.backgroundColor='transparent';
  }
}
