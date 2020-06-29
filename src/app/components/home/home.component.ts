import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mailto="mailto: abhishreekhangar01@gmail.com";
  name="Abhishree Khangar.";
  about=" Hello! I'm Abhishree, a software engineer. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.";
  about2="Here are a few technologies I've been working with recently:";
  tech=["HTML & (S)CSS","Javascript","Angular 9","Java","Python"];
  constructor() { }

  ngOnInit(): void {
  }

}
