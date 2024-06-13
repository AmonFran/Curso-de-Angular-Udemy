import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
    @HostBinding('class.open') isOpen = false;
    // @Input() defaultClass: string = "btn-group";
    // @Input() openClass: string = "btn-group open";
    // @HostBinding("class") clase: string = this.defaultClass;
    // constructor(private elRef: ElementRef, private render: Renderer2) {

    // }
    ngOnInit() {

    }
    // @HostListener('click') toggleOpen(eventData: Event) {
    //     if (this.clase === this.defaultClass) {
    //         this.clase = this.openClass;
    //     } else {
    //         this.clase = this.defaultClass;
    //     }
    // }
    @HostListener('click') toggleOpen(eventData: Event) {
        this.isOpen = !this.isOpen;
    }
}