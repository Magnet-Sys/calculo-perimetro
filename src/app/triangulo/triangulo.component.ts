import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TrianguloEscaleno } from '../models/triangulo-escaleno';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class TrianguloComponent {
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  perimetro: number | null = null;
  figura: TrianguloEscaleno;

  constructor() {
    this.figura = new TrianguloEscaleno(0, 0, 0);
  }

  calcular() {
    this.figura.ladoA = this.ladoA;
    this.figura.ladoB = this.ladoB;
    this.figura.ladoC = this.ladoC;
    this.perimetro = this.figura.calcularPerimetro();
  }
}
