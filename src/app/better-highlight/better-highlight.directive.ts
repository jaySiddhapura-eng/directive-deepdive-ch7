// for newer version of angular Randerer2 is being used

import { Directive, 
  Renderer2, 
  OnInit, 
  ElementRef, 
  HostListener 
} from '@angular/core';

// class level decorator
@Directive({  
  selector: '[appBetterHighlight]'})
export class BetterHighlightDirective implements OnInit {

  private renderer : Renderer2;
  private eRef : ElementRef;

  constructor(inputRender : Renderer2,elRef:ElementRef) { 
    this.renderer = inputRender;
    this.eRef = elRef;
  }

  ngOnInit(){
    this.renderer.setStyle(
      this.eRef.nativeElement,'background-color','red');
  }

  // following method listens to the event
  // which is generated when mouse hover over the element
  // following decoreator is method level decorator and used to
  @HostListener ('mouseenter')
  mouseOverMethod(eventData:Event){
    this.renderer.setStyle(
      this.eRef.nativeElement,'background-color', 'orange');
  }

  // following method listens to the event
  // which is generated when mouse leave the element area
  @HostListener ('mouseleave')
  mouseLeaveMethod(eventData:Event){
    this.renderer.setStyle(
      this.eRef.nativeElement,'background-color','pink');
  }

  
}
