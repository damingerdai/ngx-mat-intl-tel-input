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

  public get phone() {
    return this.phoneForm.get('phone');
  }

  constructor(private fb: FormBuilder) {
    this.phoneForm = fb.group({
      phone: ['+16789088206']
    });
  }
}
