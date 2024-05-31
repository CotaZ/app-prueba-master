import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-exercicio-two',
  standalone: true,
  imports: [CommonModule, FormsModule, PanelModule], // Añade CommonModule y FormsModule aquí
  templateUrl: './exercicio-two.component.html',
  providers: [],
})
export class ExercicioTwoComponent implements OnInit {
  public firstBinary: string = '';
  public secondBinary: string = '';
  public binaryResult: string = '';
  public problem = { // Define la propiedad problem aquí
    title: 'Problema N° 2',
    description: 'Dado el siguiente caso, resuelva el problema:',
    body: 'Se requiere crear una función que dado dos strings que representen dos números binarios, retorna la suma de ambos como números binarios.',
    exemple: 'input: { firstBinary: "10", secondBinary: "01" }, output: { binaryResult: "11" }',
  };

  constructor() { }

  ngOnInit(): void {  }

  // Función para sumar dos números binarios representados como strings
  public addBinary(): void {
    let result = '';
    let carry = 0;
    let i = this.firstBinary.length - 1;
    let j = this.secondBinary.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
      carry += i >= 0 ? parseInt(this.firstBinary[i], 2) : 0;
      carry += j >= 0 ? parseInt(this.secondBinary[j], 2) : 0;
      result = (carry % 2) + result;
      carry = Math.floor(carry / 2);
      i--;
      j--;
    }

    this.binaryResult = result;
  }
}
