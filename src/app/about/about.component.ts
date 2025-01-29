import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [TranslateModule],
  selector: 'app-about',
  templateUrl: 'about.component.html',
})
export class AboutComponent {}
