// Importación de módulos y clases necesarias para el funcionamiento del componente
import { Component } from '@angular/core'; // Para definir el componente Angular
import { CommonModule } from '@angular/common'; // Proporciona directivas comunes como 'ngIf', 'ngFor', etc.
import { FormsModule } from '@angular/forms'; // Para trabajar con formularios y la vinculación de datos (ngModel)
import { IonicModule } from '@ionic/angular'; // Módulo necesario para usar los componentes de Ionic como 'ion-card', 'ion-button', etc.
import { Circulo } from '../models/circulo'; // Importa la clase 'Circulo' que define la lógica del círculo

@Component({
  selector: 'app-circulo', // El selector HTML que usará este componente
  templateUrl: './circulo.component.html', // Ruta al archivo de plantilla HTML asociado al componente
  styleUrls: ['./circulo.component.scss'], // Ruta al archivo de estilos (CSS) asociado al componente
  standalone: true, // Indica que el componente es autónomo y no depende de un módulo externo
  imports: [IonicModule, CommonModule, FormsModule], // Importación de módulos necesarios para el funcionamiento del componente
})
export class CirculoComponent {
  // Definición de las propiedades del componente
  radio: number = 0; // Variable para almacenar el radio ingresado por el usuario (inicializado a 0)
  perimetro: number | null = null; // Variable para almacenar el perímetro calculado (inicializado como null)
  figura: Circulo; // Instancia de la clase 'Circulo' para realizar los cálculos

  constructor() {
    // Inicialización del objeto 'figura' de tipo Circulo con un radio de 0
    this.figura = new Circulo(0);
  }

  calcular() {
    // Método para calcular el perímetro del círculo basado en el radio ingresado por el usuario
    this.figura.radio = this.radio; // Asigna el radio ingresado al objeto 'figura'
    // Llama al método 'calcularPerimetro' de la clase 'Circulo', lo convierte a número flotante con 2 decimales y lo asigna a 'perimetro'
    this.perimetro = parseFloat(this.figura.calcularPerimetro().toFixed(2));
  }
}
