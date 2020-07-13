import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector:'[appBasicHighlight]'
})

export class BasicHighLightDirective implements OnInit {

   private refHold:ElementRef;

    constructor(elem:ElementRef){
        this.refHold = elem;
    }

    ngOnInit(){
        this.refHold.nativeElement.style.backgroundColor = 'green';
    }

}

// basically it bring the reference of the element from dom 
// to the ts file which we can use to modify
// the style of the element 