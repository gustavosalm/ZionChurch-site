import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-zionSite';
  states = [false, false];

  openFaqCard(e: any) {
    if(e.classList.contains('hidden')){
      e.classList.remove('hidden');
    }
    else {
      e.classList.add('hidden');
    }
  }

  changeDropdownState(ind: number) {
    let dds = document.getElementsByClassName('dropdownObj');
    let ddsImg = document.getElementsByClassName('dropdownArrowImg');

    if(this.states[ind]){
      dds[ind].classList.add('collapsed');
      ddsImg[ind].classList.add('collapsed');
    }
    else{
      dds[ind].classList.remove('collapsed');
      ddsImg[ind].classList.remove('collapsed');
    }

    this.states[ind] = !this.states[ind];
  }

  replaceUrl(url: string){
    window.open(url, '_blank')!.focus();
  }

}
