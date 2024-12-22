// Importación de módulos y clases necesarias para el funcionamiento del componente
import { Component } from '@angular/core'; // Decorador necesario para definir el componente Angular
import { CommonModule } from '@angular/common'; // Proporciona directivas comunes como 'ngIf', 'ngFor', etc.
import { FormsModule } from '@angular/forms'; // Para trabajar con formularios y la vinculación de datos con 'ngModel'
import { IonicModule } from '@ionic/angular'; // Módulo necesario para usar los componentes de Ionic como 'ion-card', 'ion-button', etc.
import { TrianguloEscaleno } from '../models/triangulo-escaleno';

@Component({
  selector: 'app-triangulo', // El selector del componente es 'app-triangulo', que se usará en la plantilla HTML
  templateUrl: './triangulo.component.html', // Ruta al archivo de plantilla HTML asociado al componente
  styleUrls: ['./triangulo.component.scss'], // Ruta al archivo de estilos (CSS) asociado al componente
  standalone: true, // Indica que este componente es autónomo y no depende de un módulo Angular externo
  imports: [IonicModule, CommonModule, FormsModule], // Importación de los módulos necesarios para el funcionamiento del componente
})
export class TrianguloComponent {
  ladoA: number = 0; // Variable para almacenar el valor del lado A del triángulo (inicializada en 0)
  ladoB: number = 0; // Variable para almacenar el valor del lado B del triángulo (inicializada en 0)
  ladoC: number = 0; // Variable para almacenar el valor del lado C del triángulo (inicializada en 0)
  perimetro: number | null = null; // Variable para almacenar el resultado del cálculo del perímetro (inicializada como null)
  figura: TrianguloEscaleno; // Instancia de la clase 'TrianguloEscaleno' para gestionar los cálculos del triángulo escaleno

  constructor() {
    // Inicialización del objeto 'figura' de tipo TrianguloEscaleno con valores iniciales de 0 para los tres lados
    this.figura = new TrianguloEscaleno(0, 0, 0);
  }

  calcular() {
    // Método para calcular el perímetro del triángulo escaleno basado en los valores ingresados para los lados
    this.figura.ladoA = this.ladoA;
    this.figura.ladoB = this.ladoB;
    this.figura.ladoC = this.ladoC;

    // Calcula el perímetro llamando al método 'calcularPerimetro' de la clase 'TrianguloEscaleno'
    this.perimetro = this.figura.calcularPerimetro();
  }
}
