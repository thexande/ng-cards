import { Component } from '@angular/core';
import { CardComponent } from './card/card.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // styleUrls: ['../node_modules/bootstrap/dist/css/bootstrap.min.css'],
  directives: [CardComponent] 

})
export class AppComponent {
  title = 'app works!';
}
