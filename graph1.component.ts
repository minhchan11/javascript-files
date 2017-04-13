import { Component, OnInit, ElementRef, AfterContentInit} from '@angular/core';
import "./script3.js";
import "./script.js";
import "./script2.js";

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styleUrls: ['./graph1.component.css']
})
export class Graph1Component implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  //   var node1 = document.createElement('script');
  //         node1.src = "./script3.js";
  //         node1.type = 'text/javascript';
  //         node1.charset = 'utf-8';
  //         document.getElementsByTagName('head')[0].appendChild(node1);
  //   var node2 = document.createElement('script');
  //         node2.src = "http://charts.livegap.com/js/webfont.js";
  //         node2.type = 'text/javascript';
  //         node2.charset = 'utf-8';
  //         document.getElementsByTagName('head')[0].appendChild(node2);
  //   var node3 = document.createElement('script');
  //         node3.src = "http://charts.livegap.com/js/Chart.min.js";
  //         node3.type = 'text/javascript';
  //         node3.charset = 'utf-8';
  //         document.getElementsByTagName('head')[0].appendChild(node3);
  //   var node = document.createElement('script');
  //         node.src = "./script.js";
  //         node.type = 'text/javascript';
  //         node.charset = 'utf-8';
  //         document.getElementsByTagName('head')[0].appendChild(node);
  // var a = document.createElement("script");
  // a.type = "text/javascript";
  // a.src = "./script3.js";
  // this.elementRef.nativeElement.appendChild(a);
  // var b = document.createElement("script");
  // b.type = "text/javascript";
  // b.src = "http://charts.livegap.com/js/webfont.js";
  // this.elementRef.nativeElement.appendChild(b);
  // var c = document.createElement("script");
  // c.type = "text/javascript";
  // c.src = "http://charts.livegap.com/js/webfont.js";
  // this.elementRef.nativeElement.appendChild(c);
  // var s = document.createElement("script");
  // s.type = "text/javascript";
  // s.src = "./script.js";
  // this.elementRef.nativeElement.appendChild(s);
}
}
