# Custom Directives

## Table of Contents  
* [Creating Custom Attribute Directive](#Creating-Custom-Attribute-Directive)<br>
* [Creating Custom Structural Directive](#Creating-Custom-Structural-Directive)<br>

## Creating Custom Attribute Directive

1. Create new folder in the root 

2. Create new file in above created folder ```basic-highlight.directive.ts```

3. The given name is used in the code

4. In above created file

   ~~~typescript
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
   ~~~

   ~~~typescript
   //register the directive in app.module.ts
   @NgModule({
       declarations: [
           BasicHighLightDirective
           ]
   })
   ~~~

   ~~~html
   <!--Using the above created directive in app.component.html-->
   <p appBasicHighlight>
       This paragraph will be styled by the above created directive
   </p>
   
   <!--directive can be used by its selector-->
   ~~~

5. Renderer approach [best practice]

6. In some cases, access to the DOM element is not possible, in that case renderer need to be used

7. Create new Directive, name: ```better-highlight``` , CLI : ```$ng g d better-highlight```

   ~~~typescript
   // better-highlight.directive.ts
   @Directive({  
     selector: '[appBetterHighlight]'
   })
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
   }
   ~~~

8. Adding **HostListener** in above example

9. HostListener will style the content on hovering over the content

10. Implement the host listener in the above created file

    ~~~typescript
    //execute the following method when mouse enter the element area  
    @HostListener ('mouseenter')
      mouseOverMethod(eventData:Event){
        this.renderer.setStyle(
          this.eRef.nativeElement,'background-color', 'orange');
      }
    
      // which is executed when mouse leave the element area
      @HostListener ('mouseleave')
      mouseLeaveMethod(eventData:Event){
        this.renderer.setStyle(
          this.eRef.nativeElement,'background-color','pink');
      }
    ~~~

11. Alternative to the above implemented HostListener [using **HostBinding**]

    ~~~typescript
    // host-binding-highlight.directive.ts
    @Directive({
      selector: '[appHostBindingHighlight]'})
    export class HostBindingHighlightDirective {
          private renderer : Renderer2;
      	  private eRef : ElementRef;
        
          @HostBinding('style.backgroundColor')
      	  backgroundColor:string = 'transparent';
        
          constructor(inputRender : Renderer2,elRef:ElementRef) { 
        	this.renderer = inputRender;
        	this.eRef = elRef;
      	  }
        
          @HostListener ('mouseenter')
      	  mouseOverMethod(eventData:Event){
            this.backgroundColor="orange";
          }
        
          @HostListener ('mouseleave')
          mouseLeaveMethod(eventData:Event){
            this.backgroundColor='transparent';
          }
    }
    ~~~

## Creating Custom Structural Directive

1. Create the ```unless``` directive, which work exactly opposite to the ```*ngIf``` directive

2. When ```unless``` directive used on the DOM element then, element will be rendered unless certain condition are met

3. Create the directive using CLI: ```ng g d unless```

   ~~~typescript
   //unless.directive.ts
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
   ~~~

   


