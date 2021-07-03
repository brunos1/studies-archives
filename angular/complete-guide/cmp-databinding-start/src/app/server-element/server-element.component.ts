import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None // takes off ViewEncapsulation
  // encapsulation: ViewEncapsulation.ShadowDom // uses the shadow dom simulation
})
export class ServerElementComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') // make it bindable from outside, pass data into this component
  element: {
    type: string,
    name: string,
    content: string
  };

  constructor() { }

  ngOnInit(): void {
  }

}
