import { Input, Directive, HostListener, ElementRef,Renderer2 } from "@angular/core";
import { ValidationEmailService } from '../services/validation.email.service';

@Directive({
  selector: "[appEmailChecker]"
})
export class EmailCheckerDirective {


  @Input() public input: String;

  constructor(private renderer: Renderer2,private el: ElementRef,private emailService: ValidationEmailService) {


  }

  @HostListener("keyup") ngOnChanges() {
   
   
 
   this.emailService.getAllEmailIds().subscribe(data=> {

    const status = (data.some(x=>x.email==this.el.nativeElement.value));
  


        if(status){
    
            this.renderer.removeClass(this.el.nativeElement,'ng-valid');
            this.renderer.addClass(this.el.nativeElement,'ng-invalid');
            this.renderer.addClass(this.el.nativeElement,'email-exists');

        }else{
        
            this.renderer.removeClass(this.el.nativeElement,'ng-invalid');
            this.renderer.addClass(this.el.nativeElement,'ng-valid');
            this.renderer.removeClass(this.el.nativeElement,'email-exists');

        }

    
    });
    
  }
}

