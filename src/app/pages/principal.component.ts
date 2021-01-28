import { Component, OnInit } from '@angular/core';
declare function customInitFunctions();

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public linkTheme= document.querySelector('#theme');

  constructor() { }

  ngOnInit(): void {

    customInitFunctions();

    const url=localStorage.getItem('theme')
    this.linkTheme.setAttribute('href', url);
  }

}
