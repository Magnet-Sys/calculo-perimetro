import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CirculoComponent,
    TrianguloComponent,
    CommonModule,
    FormsModule,
  ],
})
export class HomePage {
  figuraSeleccionada: string | null = null;

  // Propiedades para el círculo
  radio: number = 0;
  perimetroCirculo: number | null = null;

  // Propiedades para el triángulo
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  perimetroTriangulo: number | null = null;

  constructor() {}

  figuraCambiada() {
    // Método para limpiar los valores y el resultado al cambiar de figura
    if (this.figuraSeleccionada === 'circulo') {
      // Limpia valores para el triángulo
      this.ladoA = 0;
      this.ladoB = 0;
      this.ladoC = 0;
      this.perimetroTriangulo = null;
    } else if (this.figuraSeleccionada === 'triangulo') {
      // Limpia valores para el círculo
      this.radio = 0;
      this.perimetroCirculo = null;
    }
  }
}
