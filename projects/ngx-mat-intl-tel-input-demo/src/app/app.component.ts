import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-mat-intl-tel-input-demo';

  public phoneForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.phoneForm = fb.group({
      phone: ['']
    });
  }
}
