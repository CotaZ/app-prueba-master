import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-exercicio-one',
  standalone: true,
  imports: [CommonModule, FormsModule, PanelModule],
  templateUrl: './exercicio-one.component.html',
  providers: [],
})
export class ExercicioOneComponent implements OnInit {
  public amount: number = 0; // Inicializa con un valor por defecto
  public coinSet: number[] = [100, 500];
  public result: { minCoins: number, coins: number[] } | null = null; // Permite null

  constructor() { }

  ngOnInit(): void {  }

  public calculateMinCoins(): void {
    this.result = { minCoins: 0, coins: [] };
    let remaining = this.amount;

    this.coinSet.sort((a, b) => b - a);

    for (const coin of this.coinSet) {
      while (remaining - coin >= 0) {
        remaining -= coin;
        this.result.coins.push(coin);
        this.result.minCoins++;
      }
    }

    if (remaining !== 0) {
      this.result = null; // Ahora es válido asignar null
    }
  }
}
