import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  public Editor = ClassicEditor;
  contacts = [
    {
      firstName: 'john',
      lastName: 'duck',
      age: 24,
    },
    {
      firstName: 'priya',
      lastName: 'willaan',
      age: 24,
    },
    {
      firstName: 'maya',
      lastName: 'jenefier',
      age: 24,
    },
  ];
}
