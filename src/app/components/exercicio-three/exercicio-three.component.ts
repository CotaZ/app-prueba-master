import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-exercicio-three',
  standalone: true,
  imports: [CommonModule, FormsModule, PanelModule],
  templateUrl: './exercicio-three.component.html',
  providers: [],
})
export class ExercicioThreeComponent implements OnInit {
  public initSequence: number = 0; // Número inicial de la secuencia
  public countNumbers: number = 0; // Cantidad de números a retornar
  public fibonacciNumbers: number[] = []; // Aquí se almacenarán los números de Fibonacci

  constructor() {}

  ngOnInit(): void {  }

  // Función para generar la secuencia de Fibonacci
  public generateFibonacci(): void {
    this.fibonacciNumbers = [];
    let current = this.initSequence;
    let next = 1;

    for (let i = 0; i < this.countNumbers; i++) {
      this.fibonacciNumbers.push(current);
      [current, next] = [next, current + next];
    }
  }
}
