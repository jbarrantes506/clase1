import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.scss']
})
export class HolaMundoComponent implements OnInit {

  public minombre = 'Jorge Barrantes'; 

  constructor() { }

  
  ngOnInit(): void {
  }

}
