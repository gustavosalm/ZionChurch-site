import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-zionSite';

  openFaqCard(e: any) {
    if(e.classList.contains('hidden')){
      e.classList.remove('hidden');
    }
    else {
      e.classList.add('hidden');
    }
  }
}
