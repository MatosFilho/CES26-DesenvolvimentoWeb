import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  nomes: string[] = ["Ana", "Maria", "José"];

  mostrarNomes: boolean = false; 

  constructor() { }

  ngOnInit() {
  }

  onMostrarNomes(){
    this.mostrarNomes = !this.mostrarNomes;
  }

}
