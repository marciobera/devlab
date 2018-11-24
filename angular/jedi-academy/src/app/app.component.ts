import { Component } from '@angular/core';

import { Students } from './student/student.model';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  students: Student[] = [
    { name: 'Luke', isJedi: true, temple: 'Coruscant' },
    { name: 'Leia', isJedi: false },
    { name: 'Han Solo', isJedi: false }
  ];
}
