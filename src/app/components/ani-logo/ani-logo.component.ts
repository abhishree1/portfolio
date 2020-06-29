import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ani-logo',
  templateUrl: './ani-logo.component.html',
  styleUrls: ['./ani-logo.component.scss']
})
export class AniLogoComponent{
  logo = document.querySelectorAll('#logo path');
  constructor(){
    console.log(this.logo);
  }
}
