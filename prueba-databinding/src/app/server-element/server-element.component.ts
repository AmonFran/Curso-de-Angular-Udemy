import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('svrElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header:any;
  @ContentChild('contentParagraph') paragraph:any;
  constructor() {
    // Es necesario para que pueda funcionar el programa
    console.log('constructor called!');
    this.element = { type: "", name: "", content: "" }
    this.name = "";
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnInit called!');
  }
  ngDoCheck() {
    console.log('Docheck called');
  }
  ngAfterContentInit() {
    console.log("nfAfterContentInit called");
  }
  ngAfterContentChecked() {
    console.log("nfAfterContentChecked called");
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log("Text content "+this.header.nativeElement.textContent);
    console.log("Paragraph content "+this.paragraph.nativeElement.textContent);
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
}
