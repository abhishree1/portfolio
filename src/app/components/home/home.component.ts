import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   mailto="mailto: abhishreekhangar01@gmail.com";
    name="Abhishree Khangar.";
  constructor() { }

  ngOnInit(): void {
  }

}
