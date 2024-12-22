import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Circulo } from '../models/circulo';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CirculoComponent {
  radio: number = 0;
  perimetro: number | null = null;
  figura: Circulo;

  constructor() {
    this.figura = new Circulo(0);
  }

  calcular() {
    this.figura.radio = this.radio;
    this.perimetro = parseFloat(this.figura.calcularPerimetro().toFixed(2));
  }
}
